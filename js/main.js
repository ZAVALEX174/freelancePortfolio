// находим кнопку
const btnDarkMode = document.querySelector('.dark-mode-btn');

// правильный порядок проверок:

// 1. проверка темной темы на уровне системных настроек:
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

// 2. проверяем, если темная тема включена в localStorage, то добавляем классы
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

// 3. если меняются системные настройки меняется и тема:
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (evt) => {
    const newColorScheme = evt.matches ? 'dark' : 'light';

    alert('Change!!!');

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light')
    }

})

// вешаем клик на кнопку и меняем класс
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    // записываем в локалсторадж включен или нет режим темной темы
    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}

