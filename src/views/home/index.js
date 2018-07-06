import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    curStateIndex: ko.observable(0),
    handleClick: function (state) {

    },
    moreText: ko.observable('2.支持对文本超长的特定处理方式，当文字超过指定的长度之后，超出部分会被自动隐藏'),
    stateTabsItems: ko.observableArray([
      {
        title: '容器组件',
        state: 1
      },
      {
        title: '吸顶菜单',
        state: 2
      },
      {
        title: '企业级表格组件',
        state: 3
      },
      {
        title: '深度场景应用',
        state: 4
      }
    ]),
    code: `
      <!-- import stylesheet -->
      <link rel="stylesheet" href="https://yc.yonyoucloud.com/cpu-cdn/js/ycloud/2.0.x/ycloud.min.css">
      <!-- import ycloud -->
      <script src="https://yc.yonyoucloud.com/cpu-cdn/js/ycloud/2.0.x/ycloud.min.js"></script>
    `,
    codenpm: `
      yarn add ycloud
    `,
    importCode: `import ycloud from 'ycloud'`,
    codeDemo: `    <y-boxcontent params="style:{minHeight:'300px'},title:'容器'">
    </y-boxcontent>`
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
