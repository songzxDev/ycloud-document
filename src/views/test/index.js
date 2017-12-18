import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: `
      <y-button type="primary">按钮</y-button>
    `
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
