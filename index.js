var yo = require('yo-yo')
var el = yo`<div><button id="demo-menu-lower-right"
          class="mdl-button mdl-js-button mdl-button--icon">
    <i class="material-icons">more_vert</i>
  </button>
  
  <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
      for="demo-menu-lower-right">
    <li class="mdl-menu__item">Some Action</li>
    <li class="mdl-menu__item">Another Action</li>
    <li disabled class="mdl-menu__item">Disabled Action</li>
    <li class="mdl-menu__item">Yet Another Action</li>
  </ul></div>`
document.body.appendChild(el)
