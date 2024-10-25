document.getElementById('theme-toggle').addEventListener('click', function () {
    let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.body;
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        if (!isDarkMode) body.classList.add('dark');
    } else if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        if (isDarkMode) body.classList.add('light');
    } else {
        if (!isDarkMode) {
            body.classList.add('dark');
        } else {
            body.classList.add('light');
        }
    }
});
