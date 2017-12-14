import template from './index.html'
import ko from 'knockout'
function init () {
  var viewmodel = {
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
