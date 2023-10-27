const popupBg = document.querySelector('.popup__bg ');
const popupContainer = document.querySelector('.popup__container');
const openPopupButton = document.querySelector('.button-contacts');
const closePopupButton = document.querySelector('.button-close');

function showPopup() {
    openPopupButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        popupBg.classList.add('popup__bg-active');
        popupContainer.classList.add('popup__container-active');
    })
    closePopupButton.addEventListener('click', () => {
        popupBg.classList.remove('popup__bg-active');
        popupContainer.classList.remove('popup__container-active');
    })

    document.addEventListener('click', (evt) => {
        if (evt.target === popupBg) {
            popupBg.classList.remove('popup__bg-active');
            popupContainer.classList.remove('popup__container-active');
        }
    })

}

module.exports = showPopup;