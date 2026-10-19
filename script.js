// ==========================================
// 1. БАЗА ДАННЫХ ЛЕКЦИЙ
// ==========================================
const lecturesData = {
    electro: {
        title: 'Электротехника (МПК 23 02 07)',
        topics: [
            { id: '01_electric_field', title: '1. Электрическое поле. Закон Кулона' },
            { id: '02_conductors_dielectrics', title: '2. Проводники и диэлектрики. Конденсаторы' },
            { id: '03_dc_circuits', title: '3. Электрические цепи постоянного тока' },
            { id: '04_resistors_ohm', title: '4. Соединение резисторов. Закон Ома' },
            { id: '05_kirchhoff_laws', title: '5. Законы Кирхгофа' },
            { id: '06_circuit_methods', title: '6. Методы расчёта цепей' },
            { id: '07_magnetic_field', title: '7. Магнитное поле. Закон Ампера' },
            { id: '08_magnetic_properties', title: '8. Магнитные свойства вещества' },
            { id: '09_electromagnetic_induction', title: '9. Электромагнитная индукция' },
            { id: '10_magnetic_circuits', title: '10. Магнитные цепи' },
            { id: '11_ac_current_basics', title: '11. Переменный синусоидальный ток' },
            { id: '12_ac_values', title: '12. Значения переменного тока' },
            { id: '13_ac_parameters', title: '13. Параметры синусоидального тока' },
            { id: '14_single_phase_r', title: '14. Однофазные цепи (R, L)' },
            { id: '15_single_phase_rl_c', title: '15. Цепи с R, L и C' },
            { id: '16_resonance', title: '16. Резонансный режим работы цепи' },
            { id: '17_three_phase_basics', title: '17. Трёхфазные цепи. Генератор' },
            { id: '18_three_phase_connection', title: '18. Соединение обмоток звездой/треугольником' },
            { id: '19_three_phase_emergency', title: '19. Аварийные ситуации в трёхфазных цепях' },
            { id: '20_measurements_basics', title: '20. Электрические измерения' },
            { id: '21_measuring_instruments', title: '21. Электроизмерительные приборы' },
            { id: '22_instrument_types', title: '22. Принцип действия приборов' },
            { id: '23_transformers', title: '23. Трансформаторы' },
            { id: '24_async_motor', title: '24. Асинхронный двигатель' },
            { id: '25_dc_machines', title: '25. Машины постоянного тока' },
            { id: '26_electric_drive', title: '26. Основы электропривода' },
            { id: '27_drive_modes', title: '27. Режимы работы электродвигателей' },
            { id: '28_motor_selection', title: '28. Выбор двигателя. Аппаратура' },
            { id: '29_power_transmission', title: '29. Передача и распределение энергии' },
            { id: '30_power_supply', title: '30. Электроснабжение предприятий' },
            { id: '31_electronics_basics', title: '31. Основы электроники' },
            { id: '32_rectifiers', title: '32. Электронные выпрямители' }
        ]
    }
};

// ==========================================
// 2. DOM ЭЛЕМЕНТЫ
// ==========================================
const subjectsListEl = document.getElementById('subjectsList');
const contentBodyEl = document.getElementById('contentBody');
const headerTitleEl = document.getElementById('headerTitle');
const backBtn = document.getElementById('backBtn');
const appContainer = document.querySelector('.app-container');

let currentSubject = null;
let currentTopic = null;

// ==========================================
// 3. ГЕНЕРАЦИЯ ПАРОЛЯ (МОСКОВСКОЕ ВРЕМЯ)
// ==========================================
function getDailyPassword() {
    const now = new Date();
    // Переводим локальное время пользователя в UTC, затем прибавляем 3 часа для МСК
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const mskTime = new Date(utcTime + (3 * 3600000)); 

    const year = String(mskTime.getFullYear()).slice(-2); // Последние 2 цифры года
    const month = mskTime.getMonth() + 1;
    const day = mskTime.getDate();

    // Формула: Год * Месяц * День
    return (parseInt(year) * month * day).toString();
}

// ==========================================
// 4. РЕНДЕРИНГ ИНТЕРФЕЙСА
// ==========================================
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

    // Мобильная навигация (показываем контент)
    appContainer.classList.add('show-content');
    
    // Обновляем URL
    window.location.hash = `${subjectId}`;
}

function selectTopic(subjectId, topicId, topicTitle) {
    currentTopic = topicId;
    headerTitleEl.textContent = `${lecturesData[subjectId].title} / ${topicTitle}`;
    
    window.location.hash = `${subjectId}/${topicId}`;
    renderPasswordForm(subjectId, topicId);
}

// ==========================================
// 5. ФОРМА ПАРОЛЯ И ЗАГРУЗКА
// ==========================================
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

function loadLecture(subjectId, topicId) {
    contentBodyEl.innerHTML = '<div style="color: #7f91a4; text-align: center; margin-top: 50px;">Загрузка...</div>';
    
    // Формируем путь: lectures/электротехника/файл.txt
    const filePath = `lectures/${subjectId}/${topicId}.txt`;

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Файл не найден');
            return response.text();
        })
        .then(text => {
            const pre = document.createElement('div');
            pre.className = 'lecture-text';
            pre.textContent = text; // Сохраняет переносы строк
            contentBodyEl.innerHTML = ''; 
            contentBodyEl.appendChild(pre);
        })
        .catch(error => {
            contentBodyEl.innerHTML = `
                <div class="empty-state">
                    <p style="color: #e53935;">Ошибка: Лекция находится в разработке или файл не найден.</p>
                    <p style="font-size: 12px; margin-top: 10px; color: #7f91a4;">Искомый путь: ${filePath}</p>
                </div>
            `;
        });
}

// ==========================================
// 6. НАВИГАЦИЯ (ХЭШ, КНОПКА НАЗАД)
// ==========================================
backBtn.onclick = () => {
    appContainer.classList.remove('show-content');
    if (currentSubject) {
         selectSubject(currentSubject);
    } else {
        window.location.hash = '';
    }
};

function handleHashChange() {
    const hash = window.location.hash.substring(1); 
    if (!hash) return;

    const parts = hash.split('/');
    const subjectId = parts[0];
    const topicId = parts[1];

    if (lecturesData[subjectId]) {
        if (topicId) {
            const topic = lecturesData[subjectId].topics.find(t => t.id === topicId);
            if (topic) {
                selectSubject(subjectId);
                selectTopic(subjectId, topicId, topic.title);
            }
        } else {
            selectSubject(subjectId);
        }
    }
}

// ==========================================
// 7. ИНИЦИАЛИЗАЦИЯ
// ==========================================
renderSubjects();
window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);
