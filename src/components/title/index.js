import tpl from './index.html'
import ko from 'knockout'
function init (params) {
  this.name = params.name || ''
  this.link = params.link || ''
}
ko.components.register('y-title', {
  viewModel: init,
  template: tpl
})
