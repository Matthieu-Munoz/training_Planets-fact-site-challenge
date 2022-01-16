const responsiveMenu = {
    menuBurgerIcon: document.querySelector('.header__main__burger'),

    init: function () {
      responsiveMenu.menuBurgerIcon.addEventListener('click', responsiveMenu.handlerResponsiveMenu)
      window.addEventListener('resize', responsiveMenu.autoClose);
    },
  
    handlerResponsiveMenu: function () {
      let responsiveMenuElement = document.querySelector('.header__mobile')
      responsiveMenu.menuBurgerIcon.classList.toggle('header__main__burger--active')
      responsiveMenuElement.classList.toggle('header__mobile--hidden')
    },

    autoClose: function(){
        if (responsiveMenu.menuBurgerIcon.classList.contains('header__main__burger--active')) {
            responsiveMenu.handlerResponsiveMenu()
        }
    }
}