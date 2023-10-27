const languageButtons = Array.from(document.querySelectorAll('.button-language'));
let currentLang = "Ru";

function language() {
    const languageArr = {
        "navigation-advantages": {
            Ru: "Преимущества",
            En: "Advantages",
        },
        "navigation-services": {
            Ru: "Услуги",
            En: "Services",
        },
        "navigation-widget": {
            Ru: "Виджет",
            En: "Widget",
        },
        "navigation-who": {
            Ru: "Кому",
            En: "Who",
        },
        "navigation-tariffs": {
            Ru: "Тарифы",
            En: "Tariffs",
        },
        "navigation-blog": {
            Ru: "Блог",
            En: "Blog",
        },
        "info-header": {
            Ru: "Техническая поддержка сайтов,CRM систем и мобильных приложений",
            En: "Technical support of websites, CRM systems and mobile applications",
        },
        "info-block": {
            Ru: "Профессиональное техническое сопровождение и обслуживание сайтов: полный комплекс услуг от опытных экспертов",
            En: "Professional technical support and website maintenance: a full range of services from experienced experts",
        },
        "button-connect": {
            Ru: "Подключиться",
            En: "Connect",
        },
        "button-contacts": {
            Ru: "Контакты",
            En: "Contacts",
        }
    }

    function changeLang() {
        for (const key in languageArr) {
            let elem = document.querySelector(`[data-lang=${key}]`);
            if (elem) {
                elem.textContent = languageArr[key][currentLang];
            }
        }
    }

    languageButtons.forEach((item) => {
        item.addEventListener('click', (evt) => {
            languageButtons[0].classList.toggle('button-language-active');
            languageButtons[1].classList.toggle('button-language-active');
            currentLang = evt.target.innerText;
            console.log(currentLang);
            changeLang()

        })

    })

}


module.exports = language;