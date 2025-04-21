
// ================================
// Configuración del modo oscuro
// ================================
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Aplica el tema según la preferencia
const applyTheme = (theme) => {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        if(themeToggle) themeToggle.checked = true;
    } else {
        htmlElement.classList.remove('dark');
        if(themeToggle) themeToggle.checked = false;
    }
};

// Verifica preferencias guardadas o sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let initialTheme = 'dark';
if (savedTheme) {
    initialTheme = savedTheme;
}
applyTheme(initialTheme);

// Escucha el cambio manual del toggle
if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
} else {
    console.error("Theme toggle button not found");
}
