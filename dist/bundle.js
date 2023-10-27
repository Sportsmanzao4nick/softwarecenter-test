/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/languagelist.js":
/*!****************************************!*\
  !*** ./src/js/modules/languagelist.js ***!
  \****************************************/
/***/ ((module) => {

eval("const languageButtons = Array.from(document.querySelectorAll('.button-language'));\r\nlet currentLang = \"Ru\";\r\n\r\nfunction language() {\r\n    const languageArr = {\r\n        \"navigation-advantages\": {\r\n            Ru: \"Преимущества\",\r\n            En: \"Advantages\",\r\n        },\r\n        \"navigation-services\": {\r\n            Ru: \"Услуги\",\r\n            En: \"Services\",\r\n        },\r\n        \"navigation-widget\": {\r\n            Ru: \"Виджет\",\r\n            En: \"Widget\",\r\n        },\r\n        \"navigation-who\": {\r\n            Ru: \"Кому\",\r\n            En: \"Who\",\r\n        },\r\n        \"navigation-tariffs\": {\r\n            Ru: \"Тарифы\",\r\n            En: \"Tariffs\",\r\n        },\r\n        \"navigation-blog\": {\r\n            Ru: \"Блог\",\r\n            En: \"Blog\",\r\n        },\r\n        \"info-header\": {\r\n            Ru: \"Техническая поддержка сайтов,CRM систем и мобильных приложений\",\r\n            En: \"Technical support of websites, CRM systems and mobile applications\",\r\n        },\r\n        \"info-block\": {\r\n            Ru: \"Профессиональное техническое сопровождение и обслуживание сайтов: полный комплекс услуг от опытных экспертов\",\r\n            En: \"Professional technical support and website maintenance: a full range of services from experienced experts\",\r\n        },\r\n        \"button-connect\": {\r\n            Ru: \"Подключиться\",\r\n            En: \"Connect\",\r\n        },\r\n        \"button-contacts\": {\r\n            Ru: \"Контакты\",\r\n            En: \"Contacts\",\r\n        }\r\n    }\r\n\r\n    function changeLang() {\r\n        for (const key in languageArr) {\r\n            let elem = document.querySelector(`[data-lang=${key}]`);\r\n            if (elem) {\r\n                elem.textContent = languageArr[key][currentLang];\r\n            }\r\n        }\r\n    }\r\n\r\n    languageButtons.forEach((item) => {\r\n        item.addEventListener('click', (evt) => {\r\n            languageButtons[0].classList.toggle('button-language-active');\r\n            languageButtons[1].classList.toggle('button-language-active');\r\n            currentLang = evt.target.innerText;\r\n            console.log(currentLang);\r\n            changeLang()\r\n\r\n        })\r\n\r\n    })\r\n\r\n}\r\n\r\n\r\nmodule.exports = language;\n\n//# sourceURL=webpack:///./src/js/modules/languagelist.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ ((module) => {

eval("const popupBg = document.querySelector('.popup__bg ');\r\nconst popupContainer = document.querySelector('.popup__container');\r\nconst openPopupButton = document.querySelector('.button-contacts');\r\nconst closePopupButton = document.querySelector('.button-close');\r\n\r\nfunction showPopup() {\r\n    openPopupButton.addEventListener('click', (evt) => {\r\n        evt.preventDefault();\r\n        popupBg.classList.add('popup__bg-active');\r\n        popupContainer.classList.add('popup__container-active');\r\n    })\r\n    closePopupButton.addEventListener('click', () => {\r\n        popupBg.classList.remove('popup__bg-active');\r\n        popupContainer.classList.remove('popup__container-active');\r\n    })\r\n\r\n    document.addEventListener('click', (evt) => {\r\n        if (evt.target === popupBg) {\r\n            popupBg.classList.remove('popup__bg-active');\r\n            popupContainer.classList.remove('popup__container-active');\r\n        }\r\n    })\r\n\r\n}\r\n\r\nmodule.exports = showPopup;\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener('DOMContentLoaded', ()=> {\r\n    const language = __webpack_require__(/*! ./modules/languagelist */ \"./src/js/modules/languagelist.js\");\r\n    const showPopup = __webpack_require__(/*! ./modules/popup */ \"./src/js/modules/popup.js\");\r\n    language();\r\n    showPopup();\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;