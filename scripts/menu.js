let menuDirection = document.querySelectorAll('.direction-of-activity')// все менюшки
let menuBtns = document.querySelectorAll('.header-menu__btn')// все кнопки менюшек


// мобильный поиск
let mobileSearchForm = document.querySelector('.mobile-search-container')
let mobileSearchBtn = document.querySelector('.mobile-search-btn')
let mobileSearchBtnClose = document.querySelector('.mobile-search-btn-close')

mobileSearchBtn.addEventListener('click', function () {
    mobileSearchForm.classList.toggle('mobile-search-container--active');
    document.body.classList.toggle('stop-scroll')
})

mobileSearchBtnClose.addEventListener('click', function () {
    mobileSearchForm.classList.remove('mobile-search-container--active');
    document.body.classList.remove('stop-scroll');
})

// направления 
let allDirectionOfActivity = document.querySelectorAll('.direction-of-activity')
allDirectionOfActivity = Array.from(allDirectionOfActivity)
allBtn = document.querySelectorAll('.header-menu__btn')
allBtn = Array.from(allBtn)

let menuDirectionRealism = document.querySelector('.direction-of-activity-realism')
let btnRealism = document.querySelector('.btn-realism')

let menuDirectionImpressionism = document.querySelector('.direction-of-activity-impressionism')
let btnImpressionism = document.querySelector('.btn-impressionism')


btnRealism.addEventListener('click', function () {

    if (menuDirectionRealism.classList.contains('menu--active')) {
        menuDirectionRealism.classList.remove('menu--active');
        btnRealism.classList.remove('header-menu__btn--active');
        document.body.classList.remove('stop-scroll');
    }
    else {
        allDirectionOfActivity.forEach((el) => {
            el.classList.remove('menu--active')
        })

        allBtn.forEach((el) => {
            el.classList.remove('header-menu__btn--active')
        })

        menuDirectionRealism.classList.add('menu--active');
        btnRealism.classList.add('header-menu__btn--active');
        document.body.classList.add('stop-scroll');
    }
})


btnImpressionism.addEventListener('click', function () {
    if (menuDirectionImpressionism.classList.contains('menu--active')) {
        menuDirectionImpressionism.classList.remove('menu--active');
        btnImpressionism.classList.remove('header-menu__btn--active');
        document.body.classList.remove('stop-scroll');

    }
    else {
        allDirectionOfActivity.forEach((el) => {
            el.classList.remove('menu--active')
        })

        allBtn.forEach((el) => {
            el.classList.remove('header-menu__btn--active')
        })

        menuDirectionImpressionism.classList.add('menu--active');
        btnImpressionism.classList.add('header-menu__btn--active');
        document.body.classList.add('stop-scroll');
    }
})


// бургер-менюшка
let burgerMenu = document.querySelector('.burger-menu')
let burgerBtn = document.querySelector('.burger')
let menuLinks = document.querySelectorAll('.burger-menu-list__link')

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('burger-menu--active');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burgerBtn.classList.remove('burger--active');
        burgerMenu.classList.remove('burger-menu--active');
        document.body.classList.remove('stop-scroll');
    })
})
