import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-radio params="dataList:$root.radioDataList,value:$root.radioValue"></y-radio>
      </template>
      <script>
        var viewmodel = {
          radioValue: ko.observable(2),
          radioDataList: ko.observableArray([{value: 1, label: '无发票'}, {value: 2, label: '普通发票'}, {value: 3, label: '增值锐发票'}])
        }
      </script>
      `,
      `
      <template>
        <y-radio params="dataList:$root.radioDataList,value:$root.radioValue"></y-radio>
      </template>
      <script>
        var viewmodel = {
          radioValue: ko.observable(2),
          radioDataList: ko.observableArray([{value: 1, label: '无发票', disabled: 'disabled'}, {value: 2, label: '普通发票'}, {value: 3, label: '增值锐发票'}])
        }
      </script>
      `,
      `
      <template>
        <y-radio params="dataList:$root.radioDataList,value:$root.radioValue,direction:'vertical'"></y-radio>
      </template>
      <script>
        var viewmodel = {
          radioValue: ko.observable(2),
          radioDataList: ko.observableArray([{value: 1, label: '无发票'}, {value: 2, label: '普通发票'}, {value: 3, label: '增值锐发票'}])
        }
      </script>
      `
    ],
    radioValue: ko.observable(2),
    radioDataList: ko.observableArray([{value: 1, label: '无发票'}, {value: 2, label: '普通发票'}, {value: 3, label: '增值锐发票'}]),
    radioValue1: ko.observable(2),
    radioDataList1: ko.observableArray([{value: 1, label: '无发票', disabled: 'disabled'}, {value: 2, label: '普通发票'}, {value: 3, label: '增值锐发票'}]),
    radioValue2: ko.observable(2)
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
