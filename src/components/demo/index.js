import tpl from './index.html'
import './index.less'
import '../code'
import ko from 'knockout'
function init (params) {
  this.code = params.code
  this.isShowAll = ko.observable(false)
  this.toggle = function () {
    this.isShowAll(!this.isShowAll())
  }.bind(this)
}
ko.components.register('demo', {
  viewModel: init,
  template: tpl
})
