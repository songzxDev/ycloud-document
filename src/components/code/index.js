import tpl from './index.html'
import './index.less'
import ko from 'knockout'
import hljs from 'highlightjs'
import Clipboard from 'clipboard'
import 'highlightjs/styles/github.css'
// import { debug } from 'util'
function Init (params, el) {
  // 只获取高亮的DOM，否则会影响ko指令
  this.$el = el.childNodes[0].childNodes[3]
  this.code = params.code
  this.copy = () => {
    const clipboard = new Clipboard('.copy', {
      text () {
        return params.code
      }
    })
    clipboard.on('success', (e) => {
      e.clearSelection()
      clipboard.destroy()
      window.alert('代码已复制到剪贴板')
    })
  }
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
