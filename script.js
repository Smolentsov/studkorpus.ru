// ==========================================
// 1. БАЗА ДАННЫХ ЛЕКЦИЙ (Отсортировано по алфавиту)
// ==========================================
const lecturesData = {
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
            { id: '26_strength_basics', title: '26. Основы сопротивления материалов' },
            { id: '27_tension_compression', title: '27. Растяжение и сжатие' },
            { id: '28_normal_stress', title: '28. Нормальное напряжение. Закон Гука' },
            { id: '29_material_testing', title: '29. Испытания материалов на растяжение и сжатие' }
        ]
    },
    electro_labs: {
        title: 'Электротехника (Лабораторные)',
        topics: [
            { id: 'lab_01_capacitors', title: '1. Устройство и виды исполнения конденсаторов' },
            { id: 'lab_02_dc_circuits', title: '2. Простейшие линейные электрические цепи постоянного тока' },
            { id: 'lab_03_mixed_connection', title: '3. Смешанное соединение элементов в цепи постоянного тока' },
            { id: 'lab_04_mixed_connection_2', title: '4. Смешанное соединение элементов в цепи постоянного тока (продолжение)' },
            { id: 'lab_05_ferromagnetics', title: '5. Виды ферромагнитных материалов' },
            { id: 'lab_06_ac_params', title: '6. Определение параметров элементов цепей переменного тока' },
            { id: 'lab_07_ac_params_2', title: '7. Определение параметров элементов цепей переменного тока (продолжение)' },
            { id: 'lab_08_ac_series', title: '8. Электрические цепи переменного тока с последовательным соединением' },
            { id: 'lab_09_ac_series_2', title: '9. Электрические цепи переменного тока (продолжение)' },
            { id: 'lab_10_three_phase_star', title: '10. Соединение трёхфазной цепи по схемам «звезда» и «треугольник»' },
            { id: 'lab_11_three_phase_star_2', title: '11. Соединение трёхфазной цепи (продолжение)' },
            { id: 'lab_12_measurements', title: '12. Электроизмерительные приборы и измерения' },
            { id: 'lab_13_measurements_2', title: '13. Электроизмерительные приборы и измерения (продолжение)' },
            { id: 'lab_14_multimeter', title: '14. Правила работы с мультиметром' },
            { id: 'lab_15_multimeter_2', title: '15. Правила работы с мультиметром (продолжение)' },
            { id: 'lab_16_async_motor_start', title: '16. Исследование схемы пуска асинхронного двигателя' },
            { id: 'lab_17_async_motor_start_2', title: '17. Сборка схемы пуска асинхронного двигателя' },
            { id: 'lab_18_async_motor_start_3', title: '18. Сборка схемы пуска асинхронного двигателя (продолжение)' },
            { id: 'lab_19_diodes', title: '19. Исследование диодов' },
            { id: 'lab_20_transistors', title: '20. Исследование биполярного транзистора' },
            { id: 'lab_21_rectifiers', title: '21. Исследование схем выпрямления' }
        ]
    },
    electro: {
        title: 'Электротехника (Лекции)',
        topics: [
            { id: '01_electric_field', title: '1. Электрическое поле' },
            { id: '02_conductors_dielectrics', title: '2. Проводники и диэлектрики в электрическом поле' },
            { id: '03_dc_circuits', title: '3. Электрические цепи постоянного тока' },
            { id: '04_resistors_ohm', title: '4. Соединение резисторов. Закон Ома' },
            { id: '05_kirchhoff_laws', title: '5. Законы Кирхгофа' },
            { id: '06_circuit_methods', title: '6. Расчёт цепей методами контурных токов и узловых потенциалов' },
            { id: '07_magnetic_field', title: '7. Магнитное поле' },
            { id: '08_magnetic_properties', title: '8. Магнитные свойства вещества' },
            { id: '09_electromagnetic_induction', title: '9. Электромагнитная индукция' },
            { id: '10_magnetic_circuits', title: '10. Магнитные цепи' },
            { id: '11_ac_current_basics', title: '11. Переменный синусоидальный ток' },
            { id: '12_ac_values', title: '12. Мгновенное, амплитудное, действующее и среднее значения' },
            { id: '13_ac_parameters', title: '13. Параметры синусоидального тока' },
            { id: '14_single_phase_r', title: '14. Однофазные цепи переменного тока' },
            { id: '15_single_phase_rl_c', title: '15. Цепь с активным сопротивлением и индуктивностью' },
            { id: '16_resonance', title: '16. Резонансный режим работы цепи' },
            { id: '17_three_phase_basics', title: '17. Трёхфазные цепи' },
            { id: '18_three_phase_connection', title: '18. Соединение обмоток генератора звездой и треугольником' },
            { id: '19_three_phase_emergency', title: '19. Аварийные ситуации в трёхфазных цепях' },
            { id: '20_measurements_basics', title: '20. Электрические измерения' },
            { id: '21_measuring_instruments', title: '21. Электроизмерительные приборы различных систем' },
            { id: '22_instrument_types', title: '22. Приборы, основанные на действии магнитной и электрической энергии' },
            { id: '23_transformers', title: '23. Трансформаторы' },
            { id: '24_async_motor', title: '24. Асинхронный двигатель' },
            { id: '25_dc_machines', title: '25. Машины постоянного тока' },
            { id: '26_electric_drive', title: '26. Основы электропривода' },
            { id: '27_drive_modes', title: '27. Режимы работы электродвигателей' },
            { id: '28_motor_selection', title: '28. Расчёт мощности и выбор двигателя' },
            { id: '29_power_transmission', title: '29. Передача и распределение электрической энергии' },
            { id: '30_power_supply', title: '30. Классификация линий электропередачи' },
            { id: '31_electronics_basics', title: '31. Физические основы электроники' },
            { id: '32_rectifiers', title: '32. Электронные выпрямители' }
        ]
    },
    electro_practice: {
        title: 'Электротехника (Практика)',
        topics: [
            { id: '01_capacitor_calc', title: '1. Расчёт эквивалентной ёмкости батареи конденсаторов' },
            { id: '02_resistors_folding', title: '2. Расчёт цепей со смешанным соединением резисторов методом «свёртывания»' },
            { id: '03_resistors_folding_2', title: '3. Расчёт цепей со смешанным соединением резисторов (продолжение)' },
            { id: '04_dc_circuits_methods', title: '4. Расчёт цепи постоянного тока разными методами' },
            { id: '05_dc_circuits_methods_2', title: '5. Расчёт цепи постоянного тока разными методами (продолжение)' },
            { id: '06_magnetic_circuits', title: '6. Расчёт магнитных цепей' },
            { id: '07_magnetic_circuits_2', title: '7. Расчёт магнитных цепей (продолжение)' },
            { id: '08_single_phase_calc', title: '8. Расчёт параметров однофазной цепи переменного тока' },
            { id: '09_single_phase_calc_2', title: '9. Расчёт параметров однофазной цепи переменного тока (продолжение)' },
            { id: '10_rlc_mixed_calc', title: '10. Расчёт цепи переменного тока со смешанным сопротивлением R, L и C' },
            { id: '11_rlc_mixed_calc_2', title: '11. Расчёт цепи переменного тока со смешанным сопротивлением R, L и C (продолжение)' },
            { id: '12_vector_diagram', title: '12. Расчёт цепи переменного тока. Построение векторной диаграммы' },
            { id: '13_vector_diagram_2', title: '13. Расчёт цепи переменного тока. Построение векторной диаграммы (продолжение)' },
            { id: '14_three_phase_calc', title: '14. Расчёт трёхфазной цепи переменного тока' },
            { id: '15_three_phase_calc_2', title: '15. Расчёт трёхфазной цепи переменного тока (продолжение)' },
            { id: '16_electric_machines_calc', title: '16. Расчёт параметров электрических машин' },
            { id: '17_electric_machines_calc_2', title: '17. Расчёт параметров электрических машин (продолжение)' },
            { id: '18_motor_power_calc', title: '18. Расчёт мощности и выбор двигателя' },
            { id: '19_motor_power_calc_2', title: '19. Расчёт мощности и выбор двигателя (продолжение)' },
            { id: '20_protection_devices', title: '20. Защитные и коммутационные аппараты двигателей переменного тока' },
            { id: '21_protection_devices_2', title: '21. Защитные и коммутационные аппараты (продолжение)' },
            { id: '22_semiconductor_marking', title: '22. Маркировка полупроводниковых элементов. Прозвонка' },
            { id: '23_semiconductor_marking_2', title: '23. Маркировка полупроводниковых элементов (продолжение)' },
            { id: '24_iv_characteristics', title: '24. Вольтамперные характеристики полупроводниковых элементов' },
            { id: '25_iv_characteristics_2', title: '25. Вольтамперные характеристики (продолжение)' },
            { id: '26_rectifiers_calc', title: '26. Расчёт выпрямителей и фильтров переменного тока' },
            { id: '27_rectifiers_calc_2', title: '27. Расчёт выпрямителей и фильтров (продолжение)' }
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
// 6. ПАРОЛЬ И ЗАГРУЗКА
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
    
    // Путь: lectures/название_предмета/название_файла.txt
    const filePath = `lectures/${subjectId}/${topicId}.txt`;

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
