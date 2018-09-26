import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [`
      <template>
        <y-popdialog params="
        data:{test: 1}, 
        onOk: $root.popdialogOk,
        tipText: '你们是否要修改此条目,你修改了可能会有麻烦哦！你是不是要考虑一下？',
        operText: '修改'"></y-popdialog>
      </template>
      <script>
        var viewmodel = {
          popdialogOk: function (data) {
            console.log(data)
          }
        }
      </script>
    `, `
    <template>
      <y-basicgrid params="maxheight: 'auto',rows: $root.rows, columns: $root.columns"></y-basicgrid>
    </template>
    <script >
      var viewmodel = {
        columns: [{
          title: 'id',
          field: 'id'
        }, {
          title: '名次',
          field: 'name'
        }, {
          title: '操作',
          type: 'operation',
          operationList: [{
            title: '新增',
            click: function (row) {
              alert('新增')
            }
          }, {
            title: '删除',
            click: function (row) {
              alert('删除' + row.name)
            },
            type: 'popdialog',
            tipText: '<span class="fa fa-warning" style="color:red"></span>请确认是否要删除?'
          }, {
            title: '查看详细'
          }]
        }],
        rows: ko.observableArray([{
          id: 1,
          name: '第一名',
          status: 1
        }, {
          id: 2,
          name: '第二名',
          status: 1
        }, {
          id: 3,
          name: '第三名',
          status: 1
        }])
      }
    </script>
    `],
    popdialogOk: function (data) {
      console.log(data)
    },
    rows: ko.observableArray([{
      id: 1,
      name: '第一名',
      status: 1
    }, {
      id: 2,
      name: '第二名',
      status: 1
    }, {
      id: 3,
      name: '第三名',
      status: 1
    }]),
    columns: [{
      title: 'id',
      field: 'id'
    }, {
      title: '名次',
      field: 'name'
    }, {
      title: '操作',
      type: 'operation',
      operationList: [{
        title: '新增',
        click: function (row) {
          alert('新增')
        }
      }, {
        title: '删除',
        click: function (row) {
          alert('删除' + row.name)
        },
        type: 'popdialog',
        tipText: '<span class="fa fa-warning" style="color:red"></span>请确认是否要删除?'
      }, {
        title: '查看详细'
      }]
    }]
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
