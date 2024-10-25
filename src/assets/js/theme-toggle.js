function useLightMode(isDarkMode, body) {
    if (isDarkMode) {
        body.classList.add('light');
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "rgb(251,251,251)");
    }
}

document.getElementById('theme-toggle').addEventListener('click', function () {
    let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;
    let themeColor = "rgb(45, 61, 84)";
    let lightThemeColor = "rgb(196, 215, 242)";
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        if (!isDarkMode) body.classList.add('dark');
    } else if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        if (isDarkMode) body.classList.add('light');
        themeColor = lightThemeColor;
    } else {
        if (!isDarkMode) body.classList.add('dark');
        if (isDarkMode) {
            body.classList.add('light');
            themeColor = lightThemeColor;
        }
    }
    document.querySelector('meta[name="theme-color"]').setAttribute("content", themeColor);
});
