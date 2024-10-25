const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('forced-light')) {
        body.classList.remove('forced-light');
        body.classList.add('forced-dark');
    } else if (body.classList.contains('forced-dark')) {
        body.classList.remove('forced-dark');
        body.classList.add('forced-light');
    } else {
        body.classList.add(prefersDarkScheme ? 'forced-light' : 'forced-dark');
    }
});
