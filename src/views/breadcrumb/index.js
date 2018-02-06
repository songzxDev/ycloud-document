import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: `
    <y-breadcrumb params="
    separator:'/',
    data:[{text: '首页', link: 'https://www.baidu.com/'},
        {text: '第二页', link: 'https://yc.yonyoucloud.com/home/index.html#/'},
        {text: '第三页'}]">
    </y-breadcrumb>
    `
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
