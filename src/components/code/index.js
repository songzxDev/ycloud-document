import tpl from './index.html'
import './index.less'
import ko from 'knockout'
import hljs from 'highlightjs'
import 'highlightjs/styles/atom-one-light.css'
function Init (params, el) {
  this.$el = el.childNodes[0]
  this.code = params.code
  setTimeout(() => {
    hljs.highlightBlock(this.$el)
  })
}
ko.components.register('y-code', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new Init(params, componentInfo.element)
    }
  },
  template: tpl
})
