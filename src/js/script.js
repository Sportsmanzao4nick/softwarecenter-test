window.addEventListener('DOMContentLoaded', ()=> {
    const language = require('./modules/languagelist');
    const showPopup = require('./modules/popup');
    language();
    showPopup();
});

