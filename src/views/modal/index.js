import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-button params="type:'ghost', click:$parent.showModal">显示弹框</y-button>
        <y-modal params="visible: $parent.modalVisible, width:'700px',title:'普通的Modal对话框'">
          <p>我说</p>
          <p>短发短发</p>
          <p>姑娘</p>
        </y-modal>
      </template>
      <script>
        var viewmodel = {
          modalVisible: ko.observable(false),
          showModal: () => {
            viewmodel.modalVisible(true)
          }
        }
      </script>
      `,
      `
      <template>
        <y-button params="type:'ghost', click:function(){$parent.showModal1($parents)}">显示弹框</y-button>
        <y-modal params="visible: $parent.modalVisible1, width:'700px',title:'普通的Modal对话框',errormsg:'请至少选择一条数据！'">
          <y-grid params="onModalOkValidate: onModalOkValidate, modalBodyModalHeight:bodyMaxHeight,modalBodyExtraHeight:'10px',ref:'modalgrid',onRowSelect:$parentContext.$parent.onRowSelect,isStripe: true,columns: $parentContext.$parent.columns,rows: $parentContext.$parent.rows,lockhead:true, selectedRows: $parentContext.$parent.selectedRows"></y-grid>
        </y-modal>
      </template>
      <script>
        var viewmodel = {
          modalVisible1: ko.observable(false),
          showModal1: (val) => {
            viewmodel.modalVisible1(true)
          },
          selectedRows: ko.observableArray([]),
          rows: ko.observableArray([
            {id: ko.observable(1), name: ko.observable('李明')},
            {id: ko.observable(2), name: ko.observable('韩梅梅')},
            {id: ko.observable(3), name: ko.observable('丹尼')}
          ]),
          columns: ko.observableArray([
            {
              title: '',
              field: 'id',
              type: 'checkbox',
              hidden: false,
              width: 50
            },
            {
              title: 'name',
              field: 'name',
              width: '20%'
            },
            {
              field: 'id',
              title: 'renderFn',
              type: 'render',
              hidden: false,
              renderFn: function (row, index) {
                return '<span>通过render函数生成的html片段<span>'
              }
            }, {
              field: 'id',
              title: 'operation',
              hidden: false,
              type: 'operation',
              width: '20%',
              operationList: [
                {
                  title: '操作1',
                  click: function (row, evt) {
                    alert('操作1')
                  }
                }
              ]
            }
          ]),
          onRowSelect: function (row) {}
        }
        setTimeout(() => {
          let grid = ycloud.$refs['modalgrid']
          grid.onModalOkValidate(false)
          viewmodel.selectedRows.subscribe((val) => {
            // 校验规则
            if (val.length > 0) {
              grid.onModalOkValidate(true)
            } else {
              grid.onModalOkValidate(false)
            }
          })
        }, 300)
      </script>
      `
    ],
    // 基本
    modalVisible: ko.observable(false),
    showModal: (val) => {
      viewmodel.modalVisible(true)
    },
    // 校验
    modalVisible1: ko.observable(false),
    showModal1: (val) => {
      viewmodel.modalVisible1(true)
    },
    selectedRows: ko.observableArray([]),
    rows: ko.observableArray([
      {id: ko.observable(1), name: ko.observable('李明')},
      {id: ko.observable(2), name: ko.observable('韩梅梅')},
      {id: ko.observable(3), name: ko.observable('丹尼')}
    ]),
    columns: ko.observableArray([
      {
        title: '',
        field: 'id',
        type: 'checkbox',
        hidden: false,
        width: 50
      },
      {
        title: 'name',
        field: 'name',
        width: '20%'
      },
      {
        field: 'id',
        title: 'renderFn',
        type: 'render',
        hidden: false,
        renderFn: function (row, index) {
          return '<span>通过render函数生成的html片段<span>'
        }
      }, {
        field: 'id',
        title: 'operation',
        hidden: false,
        type: 'operation',
        width: '20%',
        operationList: [
          {
            title: '操作1',
            click: function (row, evt) {
              alert('操作1')
            }
          }
        ]
      }
    ]),
    onRowSelect: function (row) {}
  }
  // 要是300s渲染不完页面呢.. 300s为了subscribe只能监控变化时，初始化没选择就点确定
  setTimeout(() => {
    let grid = ycloud.$refs['modalgrid']
    grid.onModalOkValidate(false)
    viewmodel.selectedRows.subscribe((val) => {
      // 校验规则
      if (val.length > 0) {
        grid.onModalOkValidate(true)
      } else {
        grid.onModalOkValidate(false)
      }
    })
  }, 300)

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
