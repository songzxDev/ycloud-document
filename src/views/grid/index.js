import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var table = new window.u.DataTable({
    meta: {
      id: '',
      name: '',
      price: '',
      num: '',
      total: '',
      date: ''
    }
  })
  var morerows = new window.u.DataTable({
    meta: {
      id: '',
      name: '',
      price: '',
      num: '',
      total: '',
      date: ''
    }
  })
  table.on('price.valueChange', function (obj) {
    var price = obj.rowObj.getValue('price')
    var num = obj.rowObj.getValue('num')
    let total = price * num
    obj.rowObj.ref('total')(total)
  })
  var viewmodel = {
    rowspancol: [
      {
        title: '<div title="第一列">第一列</div>',
        width: '100',
        field: 'field1',
        type: 'render',
        renderFn: function (row) {
          let template = `<div>${row.field1}</div>
          <span>第一列是由多列组成</span>
        `
          return template
        }
      }, {
        title: '第二列',
        width: '100',
        field: 'field2'
      }, {
        title: '第三列',
        width: '100',
        field: 'field3'
      }, {
        title: '第四列折行的列名',
        width: '100',
        field: 'field4',
        align: 'right'
      }, {
        title: '第五列',
        width: '50%',
        field: 'field5'
      }, {
        title: '第六列',
        width: '50%',
        field: 'field6'
      }
    ],
    rowspanrows: ko.observableArray(),
    rows: table.rows,
    morerows: morerows.rows,
    columnsRender: [
      {
        title: 'id',
        field: 'id'
      }, {
        title: 'name',
        field: 'name',
        type: 'render',
        renderFn (row) {
          return `姓名：<span>${row.getValue('name')}</span>, 单价：<span>${row.ref('price')()}</span>`
        }
      }
    ],
    columnsBase: [
      {
        title: 'id',
        field: 'id'
      }, {
        title: 'name',
        field: 'name'
      }
    ],
    columnsIndex: [
      {
        title: 'id',
        field: 'id',
        type: 'checkbox'
      }, {
        title: '序号',
        field: 'id',
        type: 'index',
        width: '80'
      }, {
        title: 'id',
        field: 'id'
      }, {
        title: 'name',
        field: 'name'
      }
    ],
    columnsOper: [
      {
        title: '序号',
        field: 'id',
        type: 'index',
        width: '80'
      }, {
        title: 'name',
        field: 'name'
      }, {
        type: 'operation',
        operationList: [
          {
            title: '切换disabled',
            click: function (row, evt) {
              row._disabled(true)
              return false
            },
            visible: function (row) {
              return !row._disabled()
            }
          }, {
            title: '操作2',
            click: function (row, evt) {
              row._disabled(false)
              return false
            }
          }, {
            title: '操作3',
            click: function (row, evt) {
              return false
            }
          }, {
            title: '操作4',
            click: function (row, evt) {
              alert('操作4')
            }
          }
        ]
      }
    ],
    selectList: ko.observableArray([
      {
        label: '23',
        value: 23
      }, {
        label: '31',
        value: 31
      }, {
        label: '100',
        value: 100
      }, {
        label: '200',
        value: 200
      }, {
        label: '300',
        value: 300
      }
    ]),
    columnsComp: [{
      title: 'y-input组件',
      type: 'component',
      compFn: function (row) {
        return {
          name: 'y-input',
          params: {
            value: row.ref('name')
          }
        }
      }
    }, {
      title: 'y-datepicker组件',
      type: 'component',
      compFn: function (row) {
        return {
          name: 'y-datepicker',
          params: {
            data: row.ref('date')
          }
        }
      }
    }, {
      title: 'y-select组件',
      type: 'component',
      compFn: function (row) {
        return {
          name: 'y-select',
          params: {
            dataList: viewmodel.selectList,
            id: row.ref('price'),
            label: row.ref('price')
          }
        }
      }
    }],
    handleGetSelectedRow () {
      console.log(window.ycloud.$refs['grid1'].getSelectedRows())
    },
    handleChange (pageIndex, pageSize) {
      window.ycloud.notice.info('pageIndex:' + pageIndex + ' pageSize：' + pageSize)
    },
    handleColumnVisible () {
      window.ycloud.$refs['grid2'].setColVisibleByField('name', false)
    },
    columns: [{
      title: 'id',
      field: 'id'
    }, {
      title: 'name',
      field: 'name'
    }, {
      title: '单价',
      field: 'price',
      type: 'component',
      compFn: function (row) {
        return {
          name: 'y-input',
          params: {
            type: 'text',
            value: row.ref('price')
          }
        }
      }
    }, {
      title: '数量',
      field: 'num'
    }, {
      title: '总价',
      field: 'total'
    }],
    code2: `
      <template>
        <y-grid params="isDataTable:true,rows:$parent.rows, columns: $parent.columnsRender"></y-grid>
      </template>  
      <script>
        viewmodel = {
          rows: new u.DataTable({
            meta: {
              id: '',
              name: '',
              price: '',
              num: '',
              total: ''
            }
          }).rows,
          columnsRender: [{
            title: 'id',
            field: 'id'
          }, {
            title: 'name',
            field: 'name',
            type: 'render',
            renderFn (row) {
              return '姓名：<span>' + row.getValue("name") + '</span>, 单价：<span>' + row.getValue("price") + '</span>'
            }
          }]
        }
      </script>
    `,
    code3: `
      <template>
        <y-grid params="isDataTable:true,rows:$parent.rows, columns: $parent.columnsOper"></y-grid>
      </template>  
      <script>
        viewmodel = {
          rows: new u.DataTable({
            meta: {
              id: '',
              name: '',
              price: '',
              num: '',
              total: ''
            }
          }).rows,
          columnsOper: [{
              title: '序号',
              field: 'id',
              type: 'index',
              width: '80'
            }, {
              title: 'name',
              field: 'name'
            }, {
              type: 'operation',
              operationList: [
                {
                  title: '切换disabled',
                  click: function (row, evt) {
                    row._disabled(true)
                    return false
                  },
                  visible: function (row) {
                    return !row._disabled()
                  }
                }, {
                  title: '操作2',
                  click: function (row, evt) {
                    row._disabled(false)
                    return false
                  }
                }, {
                  title: '操作3',
                  click: function (row, evt) {
                    return false
                  }
                }, {
                  title: '操作4',
                  click: function (row, evt) {
                    alert('操作4')
                  }
                }
              ]
            }
          ]
        }
      </script>
    `,
    code4: `
      <template>
        <y-grid params="onPageChange:handleChange,onSizeChange:handleChange,pagination:true,totalCount:ko.observable(20),maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsBase"></y-grid>
      </template>  
      <script>
        viewmodel = {
          rows: new u.DataTable({
            meta: {
              id: '',
              name: '',
              price: '',
              num: '',
              total: ''
            }
          }).rows,
          handleChange (pageIndex, pageSize) {
            ycloud.notice.info('pageIndex:' + pageIndex + ' pageSize:' + pageSize)
          },
        }
      </script>
    `,
    code5: `
      <template>
        <y-grid params="maxheight:'200px',lockhead:true, isDataTable:true,rows:$parent.morerows, columns: $parent.columnsBase"></y-grid>
      </template>
    `,
    code6: `
      <template>
        <y-grid params="maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsComp"></y-grid>
      </template>  
      <script>
        viewmodel = {
          columnsComp: [{
          title: '姓名',
          type: 'component',
          compFn: function (row) {
            return {
              name: 'y-input',
              params: {
                value: row.ref('name')
              }
            }
          }
        }, {
          title: '日期',
          type: 'component',
          compFn: function (row) {
            return {
              name: 'y-datepicker',
              params: {
                data: row.ref('date')
              }
            }
          }
        }, {
          title: '单价',
          type: 'component',
          compFn: function (row) {
            return {
              name: 'y-select',
              params: {
                dataList: viewmodel.selectList,
                id: row.ref('price'),
                label: row.ref('price')
              }
            }
          }
        }],
        }
      </script>
    `,
    code7: `
      <template>
        <y-grid params="maxheight:'auto',isStripe:true,rowspan:{maxCol: 2},id:'rowspantable',columns:$root.rowspancol,rows: $root.rowspanrows"></y-grid>
      </template>
    `,
    code8: `
      <template>
        <y-grid params="ref: 'grid1',maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsIndex"></y-grid>
      </template>
      <script >
        var viewmodel = {
          handleGetSelectedRow () {
            console.log(window.ycloud.$refs['grid1'].getSelectedRows())
          }
        }
      </script>
    `,
    code9: `
      <template>
        <y-grid params="ref: 'grid2',maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsIndex"></y-grid>
      </template>
      <script >
        var viewmodel = {
          handleColumnVisible () {
            window.ycloud.$refs['grid2'].setColVisibleByField('name', false)
          }
        }
      </script>
    `,
    code: `
      <template>
        <y-grid params="
          isDataTable:true,
          rows: rows, 
          columns: columns">
        </y-grid>
      </template>
      <script>
      var viewmodel = {
          rows: new u.DataTable({
            meta: {
              id: '',
              name: '',
              price: '',
              num: '',
              total: ''
            }
          }).rows,
          columns: [{
            title: 'id',
            field: 'id'
          }, {
            title: 'name',
            field: 'name'
          }, {
            title: '单价',
            field: 'price',
            type: 'component',
            compFn: function (row) {
              return {
                name: 'y-input',
                params: {
                  type: 'text',
                  value: row.ref('price')
                }
              }
            }
          }, {
            title: '数量',
            field: 'num'
          }, {
            title: '总价',
            field: 'total'
          }]
        };
      </script>
    `
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
  setTimeout(() => {
    morerows.setSimpleData([
      {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }, {
        id: 1001,
        name: '张飞牛肉',
        price: 23,
        num: 2,
        total: 46
      }, {
        id: 1002,
        name: '李白猪肉',
        price: 31,
        num: 2,
        total: 46
      }
    ])
    table.setSimpleData([{
      id: 1001,
      name: '张飞牛肉',
      price: 23,
      num: 2,
      total: 46
    }, {
      id: 1002,
      name: '李白猪肉',
      price: 31,
      num: 2,
      total: 46
    }])
    viewmodel.rowspanrows([
      {
        field1: 'A',
        field2: 'A',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'A',
        field2: 'A',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F1'
      }, {
        field1: 'A',
        field2: 'C',
        field3: 'D',
        field4: 'D',
        field5: 'E',
        field6: 'F2'
      }, {
        field1: 'A',
        field2: 'C',
        field3: 'E',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'B',
        field2: 'B',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'B',
        field2: 'B',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }, {
        field1: 'B',
        field2: 'B',
        field3: 'C',
        field4: 'D',
        field5: 'E',
        field6: 'F'
      }
    ])
  }, 300)
}
export default {
  template,
  init
}
