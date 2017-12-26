import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-checkbox params="dataList:$root.checkboxDataList,value:$root.checkboxValue"></y-checkbox>
      </template>
      <script>
        var viewmodel = {
          checkboxValue: ko.observableArray([]),
          checkboxDataList: ko.observableArray([{value: 1, label:'北京'},{value: 2,label:'上海'},{value: 3,label:'广州'}])
        }
      </script>
      `,
      `
      <template>
        <y-checkbox params="dataList:$root.checkboxDataList,value:$root.checkboxValue1,direction:'vertical'"></y-checkbox>
      </template>
      <script>
        var viewmodel = {
          checkboxValue: ko.observableArray([]),
          checkboxDataList: ko.observableArray([{value: 1, label:'北京'},{value: 2,label:'上海'},{value: 3,label:'广州'}])
        }
      </script>
      `,
      `
      <template>
        <y-checkbox params="dataList:$root.checkboxDataList,value:$root.checkboxValue"></y-checkbox>
      </template>
      <script>
        var viewmodel = {
          checkboxValue: ko.observableArray([]),
          checkboxDataList: ko.observableArray([{value: 1, label:'北京', secondarylabel:'(we are here)'},{value: 2,label:'上海'},{value: 3,label:'广州'}])
        }
      </script>
      `
    ],
    checkboxValue: ko.observableArray([]),
    checkboxValue1: ko.observableArray([]),
    checkboxValue2: ko.observableArray([]),
    checkboxDataList: ko.observableArray([{value: 1, label: '北京'}, {value: 2, label: '上海'}, {value: 3, label: '广州'}]),
    checkboxDataList1: ko.observableArray([{value: 1, label: '北京', secondarylabel: '(we are here)'}, {value: 2, label: '上海'}, {value: 3, label: '广州'}])
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
