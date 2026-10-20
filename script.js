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
    },
    mechanics: {
        title: 'Техническая механика',
        topics: [
            { id: '01_statics_basics', title: '1. Основные понятия и аксиомы статики' },
            { id: '02_converging_forces_1', title: '2. Плоская система сходящихся сил: сложение' },
            { id: '03_converging_forces_2', title: '3. Плоская система сходящихся сил: равновесие' },
            { id: '04_pairs_moments_1', title: '4. Пара сил и момент силы: сложение' },
            { id: '05_pairs_moments_2', title: '5. Пара сил и момент силы: эквивалентные пары' },
            { id: '06_arbitrary_forces_1', title: '6. Плоская система произвольно расположенных сил: приведение' },
            { id: '07_arbitrary_forces_2', title: '7. Плоская система произвольно расположенных сил: главный вектор' },
            { id: '08_arbitrary_forces_3', title: '8. Плоская система произвольно расположенных сил: равновесие' },
            { id: '09_arbitrary_forces_4', title: '9. Плоская система произвольно расположенных сил: балочные системы' },
            { id: '10_center_gravity_1', title: '10. Центр тяжести: координаты плоских фигур' },
            { id: '11_center_gravity_2', title: '11. Центр тяжести: стандартные профили' },
            { id: '12_center_gravity_3', title: '12. Центр тяжести: решение задач' },
            { id: '13_center_gravity_4', title: '13. Центр тяжести: закрепление' },
            { id: '14_kinematics_point', title: '14. Кинематика точки' },
            { id: '15_translational_motion', title: '15. Поступательное движение' },
            { id: '16_rotational_motion', title: '16. Вращательное движение вокруг оси' },
            { id: '17_rotation_cases', title: '17. Частные случаи вращательного движения' },
            { id: '18_linear_velocities', title: '18. Линейные скорости и ускорения' },
            { id: '19_kinematic_graphs', title: '19. Кинематические графики' },
            { id: '20_dynamics_basics', title: '20. Основные понятия и аксиомы динамики' },
            { id: '21_dalembert', title: '21. Метод кинетостатики. Принцип Даламбера' },
            { id: '22_work_power', title: '22. Работа и мощность. Количество движения' },
            { id: '23_kinetic_energy', title: '23. Теорема об изменении кинетической энергии' },
            { id: '24_system_dynamics', title: '24. Динамика системы материальных точек' },
            { id: '25_work_rotation', title: '25. Работа при вращательном движении. КПД' },
            { id: '26_strength_basics', title: '26. Основы сопротивления материалов. Метод сечений' },
            { id: '27_tension_compression', title: '27. Растяжение и сжатие: эпюры' },
            { id: '28_normal_stress', title: '28. Нормальное напряжение. Закон Гука' },
            { id: '29_material_testing', title: '29. Испытания материалов. Диаграммы' }
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
const searchInput = document.getElementById('searchInput');

let currentSubject = null;
let currentTopic = null;

// ==========================================
// 3. ГЕНЕРАЦИЯ ПАРОЛЯ (МОСКОВСКОЕ ВРЕМЯ)
// ==========================================
function getDailyPassword() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const mskTime = new Date(utcTime + (3 * 3600000)); 

    const year = String(mskTime.getFullYear()).slice(-2);
    const month = mskTime.getMonth() + 1;
    const day = mskTime.getDate();

    // Формула: Год * Месяц * День
    return (parseInt(year) * month * day).toString();
}

// ==========================================
// 4. РЕНДЕРИНГ И ПОИСК
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

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length === 0) { renderSubjects(); return; }

    subjectsListEl.innerHTML = ''; 
    let foundAny = false;

    for (const subjectKey in lecturesData) {
        const subject = lecturesData[subjectKey];
        const subjectMatches = subject.title.toLowerCase().includes(query);
        const matchingTopics = subject.topics.filter(topic => 
            topic.title.toLowerCase().includes(query)
        );

        if (subjectMatches || matchingTopics.length > 0) {
            foundAny = true;
            
            const groupTitle = document.createElement('div');
            groupTitle.className = 'search-group-title';
            groupTitle.textContent = subject.title;
            subjectsListEl.appendChild(groupTitle);

            if (subjectMatches) {
                subject.topics.slice(0, 5).forEach(topic => {
                    addSearchResult(subjectKey, subject.title, topic.id, topic.title);
                });
                if (subject.topics.length > 5) {
                    const more = document.createElement('div');
                    more.className = 'search-result-subject';
                    more.style.padding = '5px 20px 15px 20px';
                    more.textContent = `... и еще ${subject.topics.length - 5} тем`;
                    subjectsListEl.appendChild(more);
                }
            } else {
                matchingTopics.forEach(topic => {
                    addSearchResult(subjectKey, subject.title, topic.id, topic.title);
                });
            }
        }
    }

    if (!foundAny) {
        subjectsListEl.innerHTML = '<div class="search-no-results">Ничего не найдено</div>';
    }
}

function addSearchResult(subjectId, subjectTitle, topicId, topicTitle) {
    const div = document.createElement('div');
    div.className = 'search-result-item';
    div.innerHTML = `
        <span class="search-result-title">${topicTitle}</span>
        <span class="search-result-subject">${subjectTitle}</span>
    `;
    div.onclick = () => {
        selectSubject(subjectId);
        selectTopic(subjectId, topicId, topicTitle);
    };
    subjectsListEl.appendChild(div);
}

// ==========================================
// 5. НАВИГАЦИЯ
// ==========================================
function selectSubject(subjectId) {
    currentSubject = subjectId;
    currentTopic = null;
    searchInput.value = '';

    document.querySelectorAll('.subject-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === subjectId);
    });

    headerTitleEl.textContent = lecturesData[subjectId].title;
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
    appContainer.classList.add('show-content');
    window.location.hash = `${subjectId}`;
    
    if (searchInput.value === '') renderSubjects();
}

function selectTopic(subjectId, topicId, topicTitle) {
    currentTopic = topicId;
    searchInput.value = '';
    renderSubjects(); 

    headerTitleEl.textContent = `${lecturesData[subjectId].title} / ${topicTitle}`;
    window.location.hash = `${subjectId}/${topicId}`;
    renderPasswordForm(subjectId, topicId);
}

// ==========================================
// 6. ПАРОЛЬ И ЗАГРУЗКА (БЕЗ ПОДСКАЗОК)
// ==========================================
function renderPasswordForm(subjectId, topicId) {
    contentBodyEl.innerHTML = `
        <div class="password-form">
            <h3>Доступ к лекции</h3>
            <p style="margin-bottom: 20px; color: #7f91a4; font-size: 14px;">Введите пароль для просмотра</p>
            <input type="text" id="passInput" placeholder="Введите пароль" autocomplete="off">
            <button id="submitPassBtn">Войти</button>
            <div id="errorMsg" class="error-msg"></div>
        </div>
    `;

    const input = document.getElementById('passInput');
    const btn = document.getElementById('submitPassBtn');
    const errorMsg = document.getElementById('errorMsg');

    const checkPassword = () => {
        if (input.value.trim() === getDailyPassword()) {
            loadLecture(subjectId, topicId);
        } else {
            errorMsg.textContent = 'Неверный пароль.';
            input.value = '';
        }
    };

    btn.onclick = checkPassword;
    input.onkeypress = (e) => { if (e.key === 'Enter') checkPassword(); };
}

function loadLecture(subjectId, topicId) {
    contentBodyEl.innerHTML = '<div style="color: #7f91a4; text-align: center; margin-top: 50px;">Загрузка...</div>';
    
    const filePath = `lectures/${subjectId}/${topicId}.txt`;

    // Запрет кэширования
    fetch(filePath, { cache: "no-store" })
        .then(response => {
            if (!response.ok) throw new Error('Файл не найден');
            return response.text();
        })
        .then(text => {
            const pre = document.createElement('div');
            pre.className = 'lecture-text';
            pre.textContent = text; 
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
// 7. ОБРАБОТЧИКИ И ИНИЦИАЛИЗАЦИЯ
// ==========================================
backBtn.onclick = () => {
    appContainer.classList.remove('show-content');
    if (currentSubject) {
         selectSubject(currentSubject);
    } else {
        window.location.hash = '';
    }
};

searchInput.addEventListener('input', handleSearch);

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

// Запуск
renderSubjects();
window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);
