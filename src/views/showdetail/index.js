import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: {
      base: `
      <template>
        <y-showdetail params="text:'这是一条很长很长的文字描述，通常会超过一行，所以会显示...'"></y-showdetail>
        <y-showdetail params="text:nullText"></y-showdetail>
      </template>
      <script>
        var viewmodel = {
          nullText: ko.observable()
        }
      </script>
      `,
      multiple: `
      <template>
        <y-showdetail params="multiple:true,text:longText"></y-showdetail>
      </template>
      <script>
        var viewmodel = {
          longText: ko.observable('这是一条很长很长的文字描述，这是一条很长很长的文字描述,这是一条很长很长的文字描述通常会超过一行，所以会显示...')
        }
      </script>
      `,
      withformview: `
      <template>
      <div class="row">
        <y-form>
        <div class="col-md-12">
          <y-formview params="label: '标题:',style:{width: '80%'}">
            <y-showdetail params="text: $root.longText"></y-showdetail>
          </y-formview>
        </div>
        <div class="col-md-12">
          <y-formview params="label: '描述:',style:{width: '80%'}">
            <y-showdetail params="text: '新奇的世界'"></y-showdetail>
          </y-formview>
        </div>
        </y-form>
      </div>
      </template>  
      `
    },
    nullText: ko.observable(''),
    longText: ko.observable('这是一条很长很长的文字描述,这是一条很长很长的文字描述，通常会超过一行,这里显示两行，所以会显示...')
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
