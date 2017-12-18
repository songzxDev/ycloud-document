// 组件列表
import ko from 'knockout'
import componentsList from './model/views'

var viewModel = {
  componentsList: componentsList
}
ko.applyBindings(viewModel, document.getElementById('side-menu'))
