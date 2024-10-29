const profilePicture = document.querySelector('.profile-picture');
let terminate = false;
profilePicture.addEventListener('mouseenter', function () {
    terminate = false;

    profilePicture.classList.add('morph')
});
profilePicture.addEventListener('mouseleave', function () {
    terminate = true;
});
profilePicture.addEventListener('animationiteration', function(event) {
    if (event.animationName === 'morph' && terminate) {
        profilePicture.classList.remove('morph');
    }
});
