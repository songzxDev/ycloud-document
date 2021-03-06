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
      date: '',
      datetime: '',
      financial: ''
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
  var i = 0
  var viewmodel = {
    resetColSort: function () {
      i++
      if (i % 2) {
        window.ycloud.$refs['gridSort'].resetColumnSortIndex({name: 2, age: 1})
      } else {
        window.ycloud.$refs['gridSort'].resetColumnSortIndex({name: 1, age: 2})
      }
    },
    sortColumns: ko.observableArray([{
      field: 'name',
      title: '姓名',
      sortIndex: 1
    }, {
      field: 'age',
      title: '年龄',
      sortIndex: 2
    }]),
    sortRows: ko.observableArray([{
      name: '李建国',
      age: 20
    }]),
    rowspancol: [
      {
        title: '<div title="第一列">第一列</div>',
        width: '100',
        field: 'field1',
        lock: true,
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
        width: 300,
        field: 'field5',
        type: 'operation',
        operationList: [
          {
            title: '新增',
            click: function () {},
            visible: function (row, index, test) {
              return row.field1 === 'A'
            }
          }, {
            title: '修改',
            click: function () {},
            visible: function (row, index, test) {
              return row.field1 === 'A'
            }
          }, {
            title: '删除',
            click: function () {}
          }, {
            title: '提交',
            click: function () {}
          }
        ]
      }, {
        title: '第六列',
        width: 100,
        field: 'field6'
      }, {
        title: '第六列',
        width: 200,
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
    columns1: ko.observableArray([
      {
        title: '供应商名称',
        field: 'name',
        rowspan: 2,
        width: 200
      }, {
        title: '报价信息',
        colspan: 3,
        align: 'center'
      }, {
        title: '供应商联系方式',
        field: 'cell',
        width: 100,
        rowspan: 2
      }
    ]),
    columns2: ko.observableArray([
      {
        title: '单价',
        field: 'price'
      }, {
        title: '数量',
        field: 'num'
      }, {
        title: '税率',
        field: 'tax'
      }
    ]),
    columnsDynamic1: ko.observableArray([
      {
        title: '供应商名称',
        field: 'name',
        rowspan: 2,
        lock: true,
        width: 200
      }, {
        title: '第{n}次报价信息',
        colspan: 3,
        field: 'price',
        loop: true,
        uniqueKey: 'price',
        looplength: function (row) {
          return row.detailList.length
        },
        align: 'center'
      }, {
        title: '供应商联系方式',
        field: 'cell',
        width: 100,
        rowspan: 2
      }
    ]),
    columnsDynamic3: [
      {
        title: 'A',
        field: 'name',
        lock: true,
        width: 200
      }, {
        title: 'B',
        field: 'cell',
        width: 300
      }, {
        title: 'C',
        field: 'name',
        width: 200
      }, {
        title: 'D',
        field: 'price',
        align: 'center'
      }, {
        title: 'E',
        field: 'cell',
        width: 200
      }
    ],
    columnsDynamic2: ko.observableArray([
      {
        title: '单价',
        field: 'price',
        width: 50,
        loop: true,
        type: 'render',
        uniqueKey: 'price',
        renderFn: function (row, index, col) {
          return row.detailList[col._childIndex].price
        }
      }, {
        title: '数量',
        field: 'num',
        width: 50,
        loop: true,
        type: 'render',
        uniqueKey: 'price',
        renderFn: function (row, index, col) {
          return row.detailList[col._childIndex].num
        }
      }, {
        title: '税率',
        field: 'tax',
        width: 50,
        loop: true,
        type: 'render',
        uniqueKey: 'price',
        renderFn: function (row, index, col) {
          return row.detailList[col._childIndex].tax
        }
      }
    ]),
    complexHeadRows: ko.observableArray([
      {
        name: '北京供应商',
        cell: '18182736212',
        price: 100.00,
        num: 12,
        tax: '17%'
      }, {
        name: '上海供应商',
        cell: '18182736212',
        price: 100.00,
        num: 12,
        tax: '17%'
      }, {
        name: '天津供应商',
        cell: '18182736212',
        price: 115.00,
        num: 12,
        tax: '13%'
      }, {
        name: '四川供应商',
        cell: '18182736212',
        price: 98.00,
        num: 12,
        tax: '17%'
      }
    ]),
    columnsDataType: [{
      title: '日期',
      field: 'date',
      dataType: 'date'
    }, {
      title: '日期时间',
      field: 'datetime',
      dataType: 'datetime'
    }, {
      title: '财务数字',
      field: 'financial',
      dataType: 'financial'
    }, {
      title: '去0处理',
      field: 'financial',
      dataType: 'removeZero'
    }],
    complexHeadRowsDynamic: ko.observableArray([
      {
        name: '北京供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 112.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '上海供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 112.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '天津供应商',
        cell: '18182736212',
        detailList: [{
          price: 98.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 115.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '四川供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 101.00,
          num: 12,
          tax: '17%'
        }, {
          price: 102.00,
          num: 12,
          tax: '17%'
        }]
      }
    ]),
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
    codeDataType: `
      <template>
      <y-basicgrid params="maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsDataType"></y-basicgrid>
      </template>
      <script >
       var vm = {
          columnsDataType: [{
            title: '日期',
            field: 'date',
            dataType: 'date'
          }, {
            title: '日期时间',
            field: 'datetime',
            dataType: 'datetime'
          }, {
            title: '财务数字',
            field: 'financial',
            dataType: 'financial'
          }, {
            title: '去0处理',
            field: 'financial',
            dataType: 'removeZero'
          }],
          rows: [{
            id: 1001,
            name: '张飞牛肉',
            price: 23,
            num: 2,
            total: 46,
            date: '2014-02-02',
            datetime: '2014-02-02 02:02:04',
            financial: '200000000.0700'
          }, {
            id: 1002,
            name: '李白猪肉',
            price: 31,
            num: 2,
            total: 46,
            date: '2014-02-02',
            datetime: 1527055083896,
            financial: 200200000.020
          }]
       }
      </script>
    `,
    codecheckbox: `
      <template>
        <y-basicgrid params="maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsIndex"></y-basicgrid>
      </template> 
      <script>
        var viewmodel = {
          columnsIndex: [{
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
          ]
        }
      </script>
    `,
    code2: `
      <template>
        <y-basicgrid params="isDataTable:true,rows:$parent.rows, columns: $parent.columnsRender"></y-basicgrid>
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
        <y-basicgrid params="isDataTable:true,rows:$parent.rows, columns: $parent.columnsOper"></y-basicgrid>
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
        <y-basicgrid params="onPageChange:handleChange,onSizeChange:handleChange,pagination:true,totalCount:ko.observable(20),maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsBase"></y-basicgrid>
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
        <y-basicgrid params="maxheight:'200px',lockhead:true, isDataTable:true,rows:$parent.morerows, columns: $parent.columnsBase"></y-basicgrid>
      </template>
    `,
    code6: `
      <template>
        <y-basicgrid params="maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsComp"></y-basicgrid>
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
    codeColumnsIndex: `
    <y-basicgrid params="maxheight:'auto',isStripe:true,rowspan:{columnIndex: [1,3]},id:'rowspantable',columns:$root.rowspancol,rows: $root.rowspanrows"></y-basicgrid>
    `,
    code7: `
      <template>
        <y-basicgrid params="maxheight:'auto',isStripe:true,rowspan:{maxCol: 2},id:'rowspantable',columns:$root.rowspancol,rows: $root.rowspanrows"></y-basicgrid>
      </template>
    `,
    code8: `
      <template>
        <y-basicgrid params="ref: 'grid1',maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsIndex"></y-basicgrid>
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
        <y-basicgrid params="ref: 'grid2',maxheight:'auto',isDataTable:true,rows:$parent.rows, columns: $parent.columnsIndex"></y-basicgrid>
      </template>
      <script >
        var viewmodel = {
          handleColumnVisible () {
            window.ycloud.$refs['grid2'].setColVisibleByField('name', false)
          }
        }
      </script>
    `,
    code10: `
      <template>
        <y-basicgrid params="
          maxheight:'auto',
          isTableBorder:true,
          columns1:$root.columns1, 
          columns2: $root.columns2, 
          rows: $root.complexHeadRows"></y-basicgrid>
      </template> 
      <script>
        viewmodel = {
        columns1: ko.observableArray([
          {
            title: '供应商名称',
            field: 'name',
            rowspan: 2,
            width: 200
          }, {
            title: '报价信息',
            colspan: 3,
            align: 'center'
          }, {
            title: '供应商联系方式',
            field: 'cell',
            width: 100,
            rowspan: 2
          }
        ]),
        columns2: ko.observableArray([
          {
            title: '单价',
            field: 'price'
          }, {
            title: '数量',
            field: 'num'
          }, {
            title: '税率',
            field: 'tax'
          }
        ]),
        complexHeadRows: ko.observableArray([
          {
            name: '北京供应商',
            cell: '18182736212',
            price: 100.00,
            num: 12,
            taxt: '17%'
          }, {
            name: '上海供应商',
            cell: '18182736212',
            price: 120.00,
            num: 12,
            taxt: '13%'
          }, {
            name: '天津供应商',
            cell: '18182736212',
            price: 115.00,
            num: 12,
            taxt: '13%'
          }, {
            name: '四川供应商',
            cell: '18182736212',
            price: 98.00,
            num: 12,
            taxt: '17%'
          }
        ])}
      </script>
    `,
    code13: `
        <template>
          <y-basicgrid params="
          ref: 'sortGrid',
          maxheight:'auto',
          columns:columns,  
          rows: rows"></y-basicgrid>
        </template>
        <script>
          var viewModel = {
            // 必须设置为observableArray
            columns: ko.observableArray([{
              field: 'name',
              title: '姓名',
              sortIndex: 1
            }, {
              field: 'age',
              title: '年龄',
              sortIndex: 2
            }]),
            rows: ko.observableArray([{age: 1, name: '李建国'}])
          }
          // 
          setTimeout(function () {
            ycloud.$refs['sortGrid'].resetColumnSortIndex({
              name: 2,
              age: 1
            })
          })
        </script>
    `,
    code11: `
      <template>
        <y-basicgrid params="
        headHeight:'90px',
        lockcolumn:true,
        maxheight:'auto',
        isTableBorder:true,
        columns1:columnsDynamic1, 
        columns2: columnsDynamic2, 
        rows: complexHeadRowsDynamic"></y-basicgrid>
      </template> 
      <script>
        viewmodel = {
        columnsDynamic1: ko.observableArray([
      {
        title: '供应商名称',
        field: 'name',
        rowspan: 2,
        lock: true,
        width: 200
      }, {
        title: '第{n}次报价信息',
        colspan: 3,
        loop: true,
        uniqueKey: 'price',
        looplength: function (row) {
          return row.detailList.length
        },
        align: 'center'
      }, {
        title: '供应商联系方式',
        field: 'cell',
        width: 100,
        rowspan: 2
      }
    ]),
    columnsDynamic2: ko.observableArray([
      {
        title: '单价',
        width: 50,
        loop: true,
        type: 'render',
        uniqueKey: 'price',
        renderFn: function (row, index, col) {
          return row.detailList[col._childIndex].price
        }
      }, {
        title: '数量',
        width: 50,
        loop: true,
        type: 'render',
        uniqueKey: 'price',
        renderFn: function (row, index, col) {
          return row.detailList[col._childIndex].num
        }
      }, {
        title: '税率',
        width: 50,
        loop: true,
        type: 'render',
        uniqueKey: 'price',
        renderFn: function (row, index, col) {
          return row.detailList[col._childIndex].tax
        }
      }
    ]),
        complexHeadRowsDynamic: ko.observableArray([
      {
        name: '北京供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 112.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '上海供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 112.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '天津供应商',
        cell: '18182736212',
        detailList: [{
          price: 98.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 115.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '四川供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 101.00,
          num: 12,
          tax: '17%'
        }, {
          price: 102.00,
          num: 12,
          tax: '17%'
        }]
      }
    ])}
      </script>
    `,
    code12: `
      <template>
        <y-basicgrid params="
        lockcolumn:true, 
        isTableBorder:true,
        columns:$root.columnsDynamic3,
        rows: $root.complexHeadRowsDynamic"></y-basicgrid>
      </template> 
      <script>
        viewmodel = {
        columnsDynamic3: [
          {
            title: 'A',
            field: 'name',
            lock: true,
            width: 200
          }, {
            title: 'B',
            field: 'cell',
            width: 300
          }, {
            title: 'C',
            field: 'name',
            width: 200
          }, {
            title: 'D',
            field: 'price',
            align: 'center'
          }, {
            title: 'E',
            field: 'cell',
            width: 200
          }
        ],
       complexHeadRowsDynamic: ko.observableArray([
      {
        name: '北京供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 112.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '上海供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 112.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '天津供应商',
        cell: '18182736212',
        detailList: [{
          price: 98.00,
          num: 12,
          tax: '17%'
        }, {
          price: 110.00,
          num: 12,
          tax: '17%'
        }, {
          price: 115.00,
          num: 12,
          tax: '17%'
        }]
      }, {
        name: '四川供应商',
        cell: '18182736212',
        detailList: [{
          price: 100.00,
          num: 12,
          tax: '17%'
        }, {
          price: 101.00,
          num: 12,
          tax: '17%'
        }, {
          price: 102.00,
          num: 12,
          tax: '17%'
        }]
      }
    ])}
      </script>
    `,
    code: `
      <template>
        <y-basicgrid params="
          isDataTable:true,
          rows: rows, 
          columns: columns">
        </y-basicgrid>
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
      total: 46,
      date: '2014-02-02',
      datetime: '2014-02-02 02:02:04',
      financial: '200000000.0700'
    }, {
      id: 1002,
      name: '李白猪肉',
      price: 31,
      num: 2,
      total: 46,
      date: '2014-02-02',
      datetime: 1527055083896,
      financial: 200200000.020
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
