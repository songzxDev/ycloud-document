import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  let viewmodel = {
    code: `
      <template>
        <y-button params="type:'primary', click:handleClick">info</y-button>
        <y-button params="type:'error', click:handleErrorClick">error</y-button>
      </template>
      <script>
        import ycloud from 'ycloud'
        var viewmodel = {
          handleClick () {
            ycloud.notice.info('基础用法info ')
          },
          handleErrorClick () {
            ycloud.notice.error('错误用法error ')
          }
        }
      </script>`,
    handleClick: () => {
      window.ycloud.notice.info('基础用法info ')
    },
    handleErrorClick () {
      window.ycloud.notice.error('错误用法error')
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
