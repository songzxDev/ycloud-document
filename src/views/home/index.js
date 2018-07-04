import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
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
