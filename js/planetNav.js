const planetNav = {

    navHeader: document.querySelectorAll("[data-navheader]"),
    navbtn: document.querySelectorAll("[data-navbtn]"),
    planetImg: document.querySelectorAll(".main__planet"),
    planetDesc: document.querySelectorAll(".content__desc"),

    // <h3 data-nav="1" class="header__secondary__title header__secondary__title--active">Overview</h3>

    init: function () {
        for (let navHeaderElement of planetNav.navHeader) {
            navHeaderElement.addEventListener("click", planetNav.headerNav);
        }
        for (let navBtn of planetNav.navbtn) {
            navBtn.addEventListener("click", planetNav.btnNav);
        }
    },

    headerNav: function (evt) {
        const sectionClickedId = evt.currentTarget.dataset.navheader;
        planetNav.mainNav(sectionClickedId);
    },

    btnNav: function (evt) {
        const sectionClickedId = evt.currentTarget.dataset.navbtn;
        planetNav.mainNav(sectionClickedId);
    },

    mainNav: function (id) {
        planetNav.removeClass()
        let planetDesc = document.querySelector('#content__desc--' + id)
        let navHeader = document.querySelector("[data-navheader='" + id + "']")
        let navBtn = document.querySelector("[data-navbtn='" + id + "']")
        navHeader.classList.add('header__secondary__title--active');
        navBtn.classList.add('main__nav--active');
        planetDesc.classList.add('content__desc--active');
        if (id == 3) {
        let planetImg = document.querySelector('#main__planet--1')        
        planetImg.classList.add('main__planet--active');
        }else {
        let planetImg = document.querySelector('#main__planet--' + id)
        let imgOverlay = document.querySelector('.main__planet--overlay');
        planetImg.classList.add('main__planet--active');
        imgOverlay.classList.add('overlayhidden');
        }
    },

    removeClass: function () {
        for (const element of planetNav.navHeader) {
            element.classList.remove('header__secondary__title--active');
        }
        for (const element of planetNav.navbtn) {
            element.classList.remove('main__nav--active');
        }
        for (const element of planetNav.planetImg) {
            element.classList.remove('main__planet--active');
        }
        for (const element of planetNav.planetDesc) {
            element.classList.remove('content__desc--active');
        }
        const imgOverlay = document.querySelector('.main__planet--overlay');
        imgOverlay.classList.remove('overlayhidden');
    },

};
// const planetImg = {
//     0: planetNav.overviewImg,
//     1: planetNav.internalImg,
//     2: planetNav.surfaceImg,
// };

// const planetDesc = {
//     0: planetNav.overviewDesc,
//     1: planetNav.internalDesc,
//     2: planetNav.surfaceDesc,
// };


// removeClass: function () {
//     for (const [key, element] of Object.entries(planetImg)){
//         element.classList.remove('main__planet--active');
//     }
//     for (const [key, element] of Object.entries(planetDesc)){
//        element.classList.remove('content__desc--active');
//     }
// },