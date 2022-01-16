const app = {

  init: function () {
    mainNav.init()
    responsiveMenu.init()
    planetNav.init()
  },

  root : document.querySelector(':root')

}

document.addEventListener('DOMContentLoaded', app.init);