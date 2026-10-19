// --- 1. База данных лекций ---
// Структура: предмет -> список тем. 
// id должны совпадать с названиями папок и файлов (только латиница!)
const lecturesData = {
    math: {
        title: 'Математика',
        topics: [
            { id: 'derivatives', title: 'Производные' },
            { id: 'integrals', title: 'Интегралы' }
        ]
    },
    physics: {
        title: 'Физика',
        topics: [
            { id: 'mechanics', title: 'Механика' },
            { id: 'optics', title: 'Оптика' }
        ]
    }
};

// --- 2. DOM Элементы ---
const subjectsListEl = document.getElementById('subjectsList');
const contentBodyEl = document.getElementById('contentBody');
const headerTitleEl = document.getElementById('headerTitle');
const backBtn = document.getElementById('backBtn');
const appContainer = document.querySelector('.app-container');

// Переменные состояния
let currentSubject = null;
let currentTopic = null;

// --- 3. Генерация пароля (Московское время UTC+3) ---
function getDailyPassword() {
    // Получаем текущее время
    const now = new Date();
    
    // Переводим в московское время (UTC+3)
    // getTimezoneOffset возвращает разницу в минутах между UTC и локальным временем.
    // Нам нужно получить время по МСК независимо от часового пояса пользователя.
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const mskTime = new Date(utcTime + (3 * 3600000)); 

    const year = String(mskTime.getFullYear()).slice(-2); // Последние 2 цифры года
    const month = mskTime.getMonth() + 1; // Месяцы с 0
    const day = mskTime.getDate();

    // Формула: Год * Месяц * День
    return (parseInt(year) * month * day).toString();
}

// --- 4. Функции рендеринга ---
function renderSubjects() {
    subjectsListEl.innerHTML = '';
    for (const key in lecturesData) {
        const subject = lecturesData[key];
        const div = document.createElement('div');
        div.className = 'subject-item';
        div.textContent = subject.title;
        div.dataset.id = key;
        div.onclick = () => selectSubject(key);
        subjectsListEl.appendChild(div);
    }
}

function selectSubject(subjectId) {
    currentSubject = subjectId;
    currentTopic = null;
    
    // Подсветка активного предмета
    document.querySelectorAll('.subject-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === subjectId);
    });

    // Обновляем заголовок
    headerTitleEl.textContent = lecturesData[subjectId].title;

    // Рендерим список тем
    contentBodyEl.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'topics-list';
    
    lecturesData[subjectId].topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic.title;
        li.onclick = () => selectTopic(subjectId, topic.id, topic.title);
        ul.appendChild(li);
    });

    contentBodyEl.appendChild(ul);

    // Мобильная навигация
    appContainer.classList.add('show-content');
    
    // Обновляем URL (без перезагрузки)
    window.location.hash = `${subjectId}`;
}

function selectTopic(subjectId, topicId, topicTitle) {
    currentTopic = topicId;
    headerTitleEl.textContent = `${lecturesData[subjectId].title} / ${topicTitle}`;
    
    // Обновляем URL
    window.location.hash = `${subjectId}/${topicId}`;

    // Показываем форму пароля
    renderPasswordForm(subjectId, topicId);
}

// --- 5. Форма пароля и загрузка контента ---
function renderPasswordForm(subjectId, topicId) {
    contentBodyEl.innerHTML = `
        <div class="password-form">
            <h3>Доступ к лекции</h3>
            <p style="margin-bottom: 15px; color: #7f91a4; font-size: 14px;">Введите пароль дня для просмотра</p>
            <input type="text" id="passInput" placeholder="Введите пароль" autocomplete="off">
            <button id="submitPassBtn">Войти</button>
            <div id="errorMsg" class="error-msg"></div>
        </div>
    `;

    const input = document.getElementById('passInput');
    const btn = document.getElementById('submitPassBtn');
    const errorMsg = document.getElementById('errorMsg');

    const checkPassword = () => {
        const correctPassword = getDailyPassword();
        if (input.value.trim() === correctPassword) {
            loadLecture(subjectId, topicId);
        } else {
            errorMsg.textContent = 'Неверный пароль. Попробуйте еще раз.';
            input.value = '';
        }
    };

    btn.onclick = checkPassword;
    input.onkeypress = (e) => {
        if (e.key === 'Enter') checkPassword();
    };
}

// --- 6. Загрузка .txt файла ---
function loadLecture(subjectId, topicId) {
    contentBodyEl.innerHTML = '<div style="color: #7f91a4; text-align: center; margin-top: 50px;">Загрузка...</div>';
    
    // Формируем путь к файлу
    const filePath = `lectures/${subjectId}/${topicId}.txt`;

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Файл не найден');
            }
            return response.text();
        })
        .then(text => {
            const pre = document.createElement('div');
            pre.className = 'lecture-text';
            pre.textContent = text; // textContent безопаснее innerHTML, сохранит теги как текст
            contentBodyEl.innerHTML = ''; // Очищаем
            contentBodyEl.appendChild(pre);
        })
        .catch(error => {
            contentBodyEl.innerHTML = `
                <div class="empty-state">
                    <p style="color: #e53935;">Ошибка: Лекция находится в разработке или файл не найден.</p>
                    <p style="font-size: 12px; margin-top: 10px; color: #7f91a4;">Путь: ${filePath}</p>
                </div>
            `;
        });
}

// --- 7. Обработка навигации (Кнопка Назад и URL) ---
backBtn.onclick = () => {
    appContainer.classList.remove('show-content');
    if (currentSubject) {
         selectSubject(currentSubject);
    } else {
        window.location.hash = '';
    }
};

// Обработка прямых ссылок (например, site.ru/#math/derivatives)
function handleHashChange() {
    const hash = window.location.hash.substring(1); // Убираем #
    if (!hash) {
        // Если хэша нет, показываем пустой экран (или первый предмет)
        return;
    }

    const parts = hash.split('/');
    const subjectId = parts[0];
    const topicId = parts[1];

    if (lecturesData[subjectId]) {
        if (topicId) {
            const topic = lecturesData[subjectId].topics.find(t => t.id === topicId);
            if (topic) {
                // Имитируем клик по предмету, затем по теме
                selectSubject(subjectId);
                selectTopic(subjectId, topicId, topic.title);
            }
        } else {
            selectSubject(subjectId);
        }
    }
}

// --- 8. Инициализация ---
renderSubjects();
// Проверяем хэш при загрузке страницы
window.addEventListener('load', handleHashChange);
// Слушаем изменения хэша (кнопки браузера Вперед/Назад)
window.addEventListener('hashchange', handleHashChange);