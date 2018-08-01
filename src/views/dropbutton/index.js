// wjk 2018-08-01
import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: `
     <y-button-group params="click:$root.dropButton,
                            dropList:$root.dropArr,
                            onDropList:$root.dropClick">
        <span class="fa fa-edit"></span>新增
     </y-button-group>
     <script>
     var viewmodel = {
        dropArr: ko.observableArray([
          {value: 1, label: 'view Detail'},
          {value: 2, label: '上海'},
          {value: 3, label: 'Apply to Requirement'}
        ]),
        dropButton: () => { 
        },
        dropClick: function (item) {
        }
     }
    </script>
    `,
    dropArr: ko.observableArray([
      {value: 1, label: 'view Detail'},
      {value: 2, label: '上海'},
      {value: 3, label: 'Apply to Requirement'}
    ]),
    dropButton: () => {
      debugger
    },
    dropClick: function (item) {
      debugger
    }
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
