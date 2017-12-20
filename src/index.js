// 组件列表
import ko from 'knockout'
import componentsList from './model/views'

var viewModel = {
  componentsList: componentsList,
  hash: ko.observable(window.location.hash)
}
if (('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode === 8)) {
  window.addEventListener('hashchange', () => {
    viewModel.hash(window.location.hash)
  })
}
ko.applyBindings(viewModel, document.getElementById('side-menu'))
