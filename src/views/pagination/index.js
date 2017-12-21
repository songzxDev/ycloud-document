import template from './index.html'
import ko from 'knockout'
import ycloud from 'ycloud'
import '@/components'
function init () {
  var viewmodel = {

    code: `
      <template>
        <y-pagination params="
          onPageChage: handlePageChange,
          pageSize: pageSize, 
          totalCount: totalCount, 
          pageIndex: pageIndex">      
        </y-pagination>
      </template>
      <script>
      var viewmodel = {
         totalCount: ko.observable(100),
          pageSize: ko.observable(10),
          pageIndex: ko.observable(0),
          handlePageChange (pageIndex, pageSize) {
            ycloud.notice.info('pageIndex:' + pageIndex + ',pageSize:' + pageSize)
          }
      };
      </script>
    `,
    totalCount: ko.observable(100),
    pageSize: ko.observable(10),
    pageIndex: ko.observable(0),
    handlePageChange (pageIndex, pageSize) {
      ycloud.notice.info('pageIndex:' + pageIndex + ',pageSize:' + pageSize)
    }
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
