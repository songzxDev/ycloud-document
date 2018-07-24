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
    code2: `
      <template>
        <y-button params="type:'primary', click:$parent.handleShowMask">显示遮罩</y-button>
        <y-button params="type:'primary', click:$parent.handleShowTextMask">自定义文本</y-button>
      </template>
      <script>
        import ycloud from 'ycloud'
        var viewmodel = {
          handleShowMask () {
            ycloud.loading.show()
            setTimeout(function () {
              ycloud.loading.hide()
            }, 2000)
          },
          handleShowTextMask () {
            ycloud.loading.show('我们正在加载中。。。')
            setTimeout(function () {
              ycloud.loading.hide()
            }, 2000)
          }
        }
      </script>`,
    handleClick: () => {
      window.ycloud.notice.info('基础用法info ')
    },
    handleErrorClick () {
      window.ycloud.notice.error('错误用法error')
    },
    handleShowMask () {
      window.ycloud.loading.show()
      setTimeout(function () {
        window.ycloud.loading.hide()
      }, 2000)
    },
    handleShowTextMask () {
      window.ycloud.loading.show('我们正在加载中。。。')
      setTimeout(function () {
        window.ycloud.loading.hide()
      }, 2000)
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
