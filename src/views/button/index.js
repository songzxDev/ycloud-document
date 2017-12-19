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
      `
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
