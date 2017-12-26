import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [`
      <template>
        <y-tag params="text:'标签一'"></y-tag>
        <y-tag params="text:'标签二'"></y-tag>
        <y-tag params="item: $root.item, text:$root.item().name,closeable:true,handleClose:$root.handleClose"></y-tag>
      </template>
      <script>
        var viewmodel = {
          item: ko.observable({
            id: '1',
            name: '标签三'
          }),
          handleClose: () => {
            console.log('关闭标签')
          }
        }
      </script>
    `, `
    <template>
      <y-tag params="text:'标签一'"></y-tag>
      <y-tag params="text:'标签二', type: 'blank'"></y-tag>
      <y-tag params="text:'标签三', type: 'ghost'"></y-tag>
    </template>
    `, `
    <template>
      <y-tag params="text: '标签一', style: {backgroundColor:'#e6451e'}"></y-tag>
      <y-tag params="text: '标签二', style: {backgroundColor:'#19be6b'}"></y-tag>
      <y-tag params="text: '标签三', style: {backgroundColor:'#f90'}"></y-tag>
    </template>
    `, `
    <template>
      <y-tag params="text: '标签一', type:'blank'"></y-tag>
      <y-tag params="item: $root.item, text: '标签二', type:'blank', enableActive:true, handleClick: $root.handleClick"></y-tag>
    </template>
    <script>
      var viewmodel = {
        item: ko.observable({
          id: '1',
          name: '标签三'
        }),
        handleClick: (item) => {
          console.log(item())
        }
      }
    </script>
    `],
    item: ko.observable({
      id: '1',
      name: '标签三'
    }),
    handleClick: (item) => {
      console.log(item())
    },
    handleClose: () => {
      console.log('关闭标签')
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
