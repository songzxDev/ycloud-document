import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-datepicker params='placeholder:"请选择日期", data: $root.datepicker'>
        </y-datepicker>
      </template>
      <script>
        var viewmodel = {
          datepicker: ko.observable()
        }
        viewmodel.datepicker.subscribe((val) => {
          console.log(val)
        })
      </script>
      `,
      `
      <template>
        <y-datetimepicker params='placeholder:"请选择时间", data: $root.datetimepicker'>
        </y-datetimepicker>
      </template>
      <script>
        var viewmodel = {
          datetimepicker: ko.observable()
        }
      </script>
      `
    ],
    datepicker: ko.observable(new Date()),
    datetimepicker: ko.observable(),
    minDate: ko.observable('2010-01-01'),
    maxDate: ko.observable('2020-12-31')
  }
  viewmodel.datepicker.subscribe((val) => {
    console.log(val)
  })
  viewmodel.datetimepicker.subscribe((val) => {
    console.log(val)
  })

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
