import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
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
      size: `
      <template>
        <y-button params="type: 'primary', size: 'large'">Large</y-button>
        <y-button params="type: 'primary'">Default</y-button>
        <y-button params="type: 'primary', size: 'small'">Small</y-button>
        <y-button params="type: 'primary', shape: 'circle', size: 'large'">Large</y-button>
        <y-button params="type: 'primary', shape: 'circle'">Default</y-button>
        <y-button params="type: 'primary', shape: 'circle', size: 'small'">Small</y-button>
      </template>
      `,
      disabled: `
      <template>
        <y-button params="type: 'primary'">Default</y-button>
        <y-button params="type: 'primary', disabled: true">Default(Disabled)</y-button>
      </template>
      `,
      loading: ``
    },
    load: function () {
      console.log(this)
    }.apply(viewmodel),
    loading: ko.observable(false)
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
