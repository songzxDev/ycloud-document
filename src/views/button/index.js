import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewModel = {
    code: {
      type: `
      <template>
        <y-button>Default</y-button>
        <y-button params="type: 'primary', size: 'large'">Primary</y-button>
        <y-button params="type: 'ghost', size: 'large'">Ghost</y-button>
        <y-button params="type: 'dashed'">Dashed</y-button>
        <y-button params="type: 'text'">Text</y-button>
        <y-button params="type: 'info'">Info</y-button>
        <y-button params="type: 'success'">Success</y-button>
        <y-button params="type: 'warning'">Warning</y-button>
        <y-button params="type: 'error'">Error</y-button>
      </template>
      `,
      shape: `
      <template>
        <y-button params="type: 'warning', shape: 'circle'">0.0</y-button>
        <y-button params="type: 'warning'">0.0</y-button>
      </template>
      `,
      size: `
      <template>
        <y-button params="type: 'ghost', size: 'large'">Large</y-button>
        <y-button params="type: 'ghost'">Default</y-button>
        <y-button params="type: 'ghost', size: 'small'">Small</y-button>
        <y-button params="type: 'ghost', shape: 'circle', size: 'large'">Large</y-button>
        <y-button params="type: 'ghost', shape: 'circle'">Default</y-button>
        <y-button params="type: 'ghost', shape: 'circle', size: 'small'">Small</y-button>
      </template>
      `,
      disabled: `
      <template>
        <y-button params="type: 'primary'">Default</y-button>
        <y-button params="type: 'primary', disabled: true">Default(Disabled)</y-button>
      </template>
      `,
      loading: `
      <template>
        <y-button params="type: 'success'">Success</y-button>
        <y-button params="type: 'success', click: $parent.load, loading: $parent.loading">Loading</y-button>
      </template>
      <script>
        var viewmodel = {
          loading: ko.observable(false),
          load: () => {
            viewModel.loading(true)
            setTimeout(() => {
              viewModel.loading(false)
            }, 3000)
          }
        }
      </script>
      `,
      wait: `
      <template>
        <y-button params="type: 'error', click: $parent.wait">Default</y-button>
        <y-button params="type: 'error', click: $parent.wait, wait: 3000">wait</y-button>
      </template>
      <script>
        wait: () => {}
      <script>
      `,
      btnType_a: `
      <template>
      <y-button params="type: 'info', btnType: 'a', url: 'www.baidu.com'">相对路径本页跳转</y-button>
      <y-button params="type: 'info', btnType: 'a', url: 'www.baidu.com', rootPath: true">绝对路径本页跳转</y-button>
      <y-button params="type: 'info', btnType: 'a', url: 'www.baidu.com', target: '_blank'">相对路径打开新开页</y-button>
      <y-button params="type: 'info', btnType: 'a', url: 'www.baidu.com', rootPath: true, target: '_blank'">绝对路径打开新开页</y-button>
      </template>
      `
    },
    loading: ko.observable(false),
    load: () => {
      viewModel.loading(true)
      setTimeout(() => {
        viewModel.loading(false)
      }, 3000)
    },
    wait: () => {}
  }
  ko.applyBindings(viewModel, document.getElementById('app'))
}
export default {
  template,
  init
}
