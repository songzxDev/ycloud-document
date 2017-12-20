import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-button params="type:'ghost', click:$parent.showModal">显示弹框</y-button>
        <y-modal params="visible: $parent.modalVisible, width:'700px',title:'普通的Modal对话框'">
          <p>我说</p>
          <p>短发短发</p>
          <p>姑娘</p>
        </y-modal>
      </template>
      <script>
        var viewmodel = {
          modalVisible: ko.observable(false),
          showModal: () => {
            viewmodel.modalVisible(true)
          }
        }
      </script>
      `
    ],
    // 基本
    modalVisible: ko.observable(false),
    showModal: (val) => {
      viewmodel.modalVisible(true)
    },
    // 校验
    modalVisible1: ko.observable(false),
    showModal1: () => {
      viewmodel.modalVisible(true)
    },
    checked: ko.observable(false)
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
