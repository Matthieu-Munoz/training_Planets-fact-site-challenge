const mainNav = {
    desktopNavElements: document.querySelectorAll("[data-navdesktop]"),
    tabletteNavElements: document.querySelectorAll("[data-navtablette]"),
    mobileNavElements: document.querySelectorAll("[data-navmobile]"),
    mainElement: document.querySelector('main'),

    planetIndex: 0,

    init: function () {
        for (let desktopNavElement of mainNav.desktopNavElements) {
            desktopNavElement.addEventListener("click", mainNav.desktopNav);
        }
        for (let tabletteNavElement of mainNav.tabletteNavElements) {
            tabletteNavElement.addEventListener("click", mainNav.tablettepNav);
        }
        for (let mobileNavElement of mainNav.mobileNavElements) {
            mobileNavElement.addEventListener("click", mainNav.mobileNav);
        }
    },

    desktopNav: function (evt) {
        const planetClickedId = evt.currentTarget.dataset.navdesktop;
        mainNav.navSelection(planetClickedId)
    },

    tablettepNav: function (evt) {
        const planetClickedId = evt.currentTarget.dataset.navtablette;
        mainNav.navSelection(planetClickedId)
    },
    mobileNav: function (evt) {
        evt.preventDefault();
        responsiveMenu.handlerResponsiveMenu()
        const planetClickedId = evt.currentTarget.dataset.navmobile;
        mainNav.navSelection(planetClickedId)
    },

    planet: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'],

    removeClass: function () {
        for (let desktopNavElement of mainNav.desktopNavElements) {
            desktopNavElement.classList.remove('header__secondary--desktop__title--active');
        }
        for (let tabletteNavElement of mainNav.tabletteNavElements) {
            tabletteNavElement.classList.remove('header__secondary--tablette__title--active');
        }
        mainNav.mainElement.removeAttribute("id")
        
        const planetImg = document.querySelectorAll('.main__planet--img')
        for (const index of planetImg) {
            for (const planetName of mainNav.planet) {
                index.classList.remove('planet-'+planetName)
            }
        }
    },

    navSelection: function (planetClickedId) {
        mainNav.removeClass()
        const planetClickedDesktop = document.querySelector("[data-navdesktop='" + planetClickedId + "']");
        const planetClickedTablette = document.querySelector("[data-navtablette='" + planetClickedId + "']");
        planetClickedDesktop.classList.add('header__secondary--desktop__title--active');
        planetClickedTablette.classList.add('header__secondary--tablette__title--active');
        app.root.style.setProperty('--active-color', 'var(--' + planetClickedId + ')')
        mainNav.planetIndex = planetClickedId;
        pageContent.init(mainNav.planet[planetClickedId])
    }
}