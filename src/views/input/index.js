import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <div class="col-md-4">
          <y-input params="placeholder: '请输入文本..', value: $root.value.base1"></y-input>
          <hr class="hr-fix">
          <y-input params="placeholder: '请输入文本..', value: $root.value.base2, class: 'setWidth'"></y-input>
        </div>
      </template>
      <script>
        var viewmodel = {
          value: {
            base1: ko.observable(),
            base2: ko.observable()
          }
        }
      </script>
      `,
      `
      <template>
        <div class="col-md-4">
          <y-input params="placeholder:'请输入文本',class:'y-inline-block',type:'integer',value:ko.observable('')"></y-input>
          <hr class="hr-fix">
          <y-input params="placeholder:'请输入文本',class:'y-inline-block',type:'positiveinteger',value:ko.observable('')"></y-input>
          <hr class="hr-fix">
          <y-input params="placeholder:'请输入文本',class:'y-inline-block',type:'positivenumber',value:ko.observable('')"></y-input>
        </div>
      </template>
      `,
      `
      <template>
        <y-input params="placeholder: '请输入文本..', value: $root.value.icon, iconClass:'fa fa-search', onIconClick: $root.onIconClick"></y-input>
      </template>
      <script>
        var viewmodel = {
          value: {
            icon: ko.observable()
          },
          onIconClick: () => {
            alert('Don't touch me!')
          }
        }
      </script>
      `,
      `
      <template>
        <y-input params="placeholder: '请输入文本..', value: $root.value.disabled, disabled: $root.disabled"></y-input>
      </template>
      <script>
        var viewmodel = {
          value: {
            disabled: ko.observable()
          },
          disabled: ko.observable(true)
        }
      </script>
      `,
      `
      <template>
        <y-input params="placeholder: '请输入文本..', value: $root.value.input, iconClass:'fa fa-search', onIconClick: $root.onIconClick, onInput: $root.onInput, onBlur: $root.onBlur, onFocus: $root.onFocus, onSubmit: $root.onSubmit"></y-input>
      </template>
      <script>
        var viewmodel = {
          value: {
            input: ko.observable()
          },
          eventText: ko.observable(),
          onIconClick: () => {
            alert(' Don't touch me!')
          },
          onInput: () => {
            viewmodel.eventText('onInput: <br>正在输入..')
          },
          onFocus: () => {
            viewmodel.eventText('onFocus: <br>I am shy, don't look at me!')
          },
          onBlur: () => {
            viewmodel.eventText('onBlur: <br>Don't leave me alone!')
          },
          onSubmit: () => {
            viewmodel.eventText('onSubmit: <br>enter触发!')
          }
        }
      </script>
      `
    ],
    value: {
      base1: ko.observable(),
      base2: ko.observable(),
      icon: ko.observable(),
      disabled: ko.observable(),
      input: ko.observable()
    },
    eventText: ko.observable(),
    disabled: ko.observable(true),
    onIconClick: () => {
      alert(`Don't touch me!`)
    },
    onInput: () => {
      viewmodel.eventText('onInput: <br>正在输入..')
    },
    onFocus: () => {
      viewmodel.eventText(`onFocus: <br>I am shy, don't look at me!`)
    },
    onBlur: () => {
      viewmodel.eventText(`onBlur: <br>Don't leave me alone!`)
    },
    onSubmit: () => {
      viewmodel.eventText(`onSubmit: <br>enter触发!`)
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
