import tpl from './index.html'
import './index.less'
import '../code'
import ko from 'knockout'
function init (params) {
  this.code = params.code
}
ko.components.register('demo', {
  viewModel: init,
  template: tpl
})
