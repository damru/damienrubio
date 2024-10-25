let isDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const updateColorScheme = (event) => {
    isDarkScheme = event.matches;
};
const isDarkSchemeListener = window.matchMedia("(prefers-color-scheme: dark)");
isDarkSchemeListener.addEventListener("change", updateColorScheme);

document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('forced-light')) {
        body.classList.remove('forced-light');
        if (!isDarkScheme) {
            body.classList.add('forced-dark');
        }
    } else if (body.classList.contains('forced-dark')) {
        body.classList.remove('forced-dark');
        if (isDarkScheme) {
            body.classList.add('forced-light');
        }
    } else {
        body.classList.add(isDarkScheme ? 'forced-light' : 'forced-dark');
    }
});
