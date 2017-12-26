import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: `
    <y-boxsticky params="title:'吸顶菜单'">
      <div class="col-sm-8 text-center" style="line-height: 32px">
        <!-- ko foreach: {data: [1,2,3,4], as: 'row'} -->
          <a data-bind="attr: {href: '#content' + row}, text: '内容' + row" class="sticky-anchor"></a>
        <!-- /ko -->
      </div>
    </y-boxsticky>
    `
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
