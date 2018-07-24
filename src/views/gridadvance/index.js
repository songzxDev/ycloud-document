// lazy
// 跨页选择
// verticalScroll
// dragable组件
import template from './index.html'
import ko from 'knockout'
import _ from 'lodash'
import '@/components'
function init () {
  var viewmodel = {
    code: [`
      <template>
        <y-grid params="rows:$root.caculateRows, 
        columns: $root.caculateMainColumns, 
        caculateColumns: $root.caculateColumns">
        </y-grid>
      </template>
      <script>
      var viewmodel = {
        caculateColumns: [{
          type: 'render',
          _show: true,
          renderFn (row) {
            return '合计：'
          }
        }, {
          _show: true,
          type: 'render',
          align: 'right',
          // 在此自有定义你的合计计算方法
          renderFn (row) {
            return '¥ ' + _.reduce(viewmodel.caculateRows(), function (a, b) {
              return {age: (a.age - 0) + (b.age - 0)}
            }, {
              age: 0
            }).age
          }
        }, {
          _show: true
        }],
        caculateRows: ko.observableArray([
          {
            name: 'name',
            age: 24000.034,
            sex: '男'
          }, {
            name: 'name',
            age: 223291.0000000,
            sex: '男'
          }, {
            name: 'name',
            age: '2112389.010',
            sex: '男'
          }, {
            name: 'name',
            age: 2300000.01,
            sex: '男'
          }
        ]),
        caculateMainColumns: [{
          title: '姓名',
          field: 'name',
          type: 'render',
          renderFn: function (row) {
            return "<a href='http://www.baidu.com'>row.name</a>"
          }
        }, {
          title: '价格',
          field: 'age',
          align: 'right',
          dataType: 'money'
        }, {
          title: '性别',
          field: 'sex',
        }]
      } 
    </script>
    `, `
    <template>
      <y-basicgrid params="maxheight:'205px',ref:'loadingGrid',columns:$root.ComputeColumns,rows: $root.ComputeRows"></y-basicgrid>
    </template>
    <script>
      var viewmodel = {
        ComputeRows: ko.observableArray([{
          id: 1,
          name: 'name',
          price: ko.observable(23),
          num: 2,
          total: 46
        }, {
          id: 1,
          name: 'name',
          price: ko.observable(23),
          num: 2,
          total: 46
        }]),
        ComputeColumns: [{
          title: '单价+',
          field: 'id',
          type: 'component',
          compFn (row) {
            return {
              name: 'y-grid-merge-td',
              params: {
                dataList: [
                  {
                    field: 'price'
                  }, {
                    field: 'num',
                    type: 'render',
                    renderFn () {
                      var html = '<div>数量：' + row.num + '</div>'
                      return html
                    }
                  }, {
                    field: 'id',
                    type: 'component',
                    compFn () {
                      return {
                        name: 'y-input',
                        params: {
                          value: row.price,
                          placeholder: '你好世界'
                        }
                      }
                    }
                  }
                ],
                row: row
              }
            }
          }
        }, {
          title: '总价',
          field: 'total'
        }]
      } 
    </script>
    `, `
      <template>
        <y-basicgrid params="ref:'lazygrid',lockcolumn: true,lockhead:true,handleScroll:$root.lazyScroll,lazy: $root.gridLazy, rows: $root.lazyRows, columns: $root.lazyColumns">
        </y-basicgrid>
      </template>
      <script >
      var viewmodel = {
        gridLazy: {
          lazyStart: ko.observable(0),
          lazyEnd: ko.observable(10)
        }
      }
      var lazyGrid = null
      var el = null
      setTimeout(function () {
        lazyGrid = window.ycloud.$refs['lazygrid']
        el = window.$(lazyGrid.$el).find('.y-grid-body table')[0]
      })
    
      // 示例代码
      viewmodel.lazyScroll = function (event, scrollTop) {
        var index = lazyGrid.getFitIndexByScrollTop(scrollTop)
        if (index === -1) {
          var curIndex = Math.round(datas.length * scrollTop / el.offsetHeight)
          index = curIndex
        }
        // 详细参数根据不同页面的数据级别灵活调整
        viewmodel.gridLazy.lazyStart(index - 30 < datas.length - datas.length / 5 ? index - 30 : datas.length - datas.length / 5)
        viewmodel.gridLazy.lazyEnd(index + 30 > datas.length ? datas.length : index + 30)
      }
      </script>
    `,
      `
    <template>
      <y-grid params="
          crossPageSelectedRows: $root.crossPageRows,
          onPageChange:$root.handleChange,
          onSizeChange:$root.handleChange,
          pagination:true,totalCount:ko.observable(20),
          maxheight:'auto',
          rows:$root.pageRows,
          columns: $root.pageColumns">
        </y-grid>
    </template>
    <script>
      var vm = {
        crossPageRows: ko.observableArray([])
      }
    </script>
    `
    ],
    caculateRows: ko.observableArray([
      {
        name: 'name',
        age: 24000.034,
        sex: '男'
      }, {
        name: 'name',
        age: 223291.0000000,
        sex: '男'
      }, {
        name: 'name',
        age: '2112389.010',
        sex: '男'
      }, {
        name: 'name',
        age: 2300000.01,
        sex: '男'
      }
    ]),
    caculateMainColumns: [{
      title: '姓名',
      field: 'name',
      type: 'render',
      renderFn: function (row) {
        return "<a href='http://www.baidu.com'>row.name</a>"
      }
    }, {
      title: '价格',
      field: 'age',
      align: 'right',
      dataType: 'money'
    }, {
      title: '性别',
      field: 'sex'
    }],
    caculateColumns: [{
      type: 'render',
      _show: true,
      renderFn (row) {
        return '<b>合计：</b>'
      }
    }, {
      _show: true,
      type: 'render',
      align: 'right',
      renderFn (row) {
        return '<span style="font-family: \'Microsoft YaHei\'">¥ </span>' + _.reduce(viewmodel.caculateRows(), function (a, b) {
          return {age: (a.age - 0) + (b.age - 0)}
        }, {
          age: 0
        }).age
      }
    }, {
      _show: true
    }],
    ComputeRows: ko.observableArray([{
      id: 1,
      name: 'name',
      price: ko.observable(23),
      num: 2,
      total: 46
    }, {
      id: 1,
      name: 'name',
      price: ko.observable(23),
      num: 2,
      total: 46
    }]),
    ComputeColumns: [{
      title: '单价+',
      field: 'id',
      type: 'component',
      compFn (row) {
        return {
          name: 'y-grid-merge-td',
          params: {
            dataList: [
              {
                field: 'price'
              }, {
                field: 'num',
                type: 'render',
                renderFn () {
                  var html = '<div>数量：' + row.num + '</div>'
                  return html
                }
              }, {
                field: 'id',
                type: 'component',
                compFn () {
                  return {
                    name: 'y-input',
                    params: {
                      value: row.price,
                      placeholder: '你好世界'
                    }
                  }
                }
              }
            ],
            row: row
          }
        }
      }
    }, {
      title: '总价',
      field: 'total'
    }],
    gridLazy: {
      lazyStart: ko.observable(0),
      lazyEnd: ko.observable(10)
    },
    pageRows: ko.observableArray(),
    pageColumns: [{
      type: 'checkbox'
    }, {
      title: '列1',
      field: 'field1'
    }, {
      title: '列2',
      field: 'field2'
    }],
    crossPageRows: ko.observableArray([]),
    handleChange (pageIndex, pageSize) {
      if (pageIndex === 0) {
        viewmodel.pageRows([{
          id: 1,
          field1: 'field1',
          field2: 'field2'
        }, {
          id: 2,
          field1: 'field11',
          field2: 'field21'
        }, {
          id: 3,
          field1: 'field12',
          field2: 'field22'
        }])
      } else {
        viewmodel.pageRows([{
          id: 4,
          field1: 'field4',
          field2: 'field4'
        }, {
          id: 5,
          field1: 'field5',
          field2: 'field25'
        }])
      }
    }
  }
  viewmodel.pageRows([{
    id: 1,
    field1: 'field1',
    field2: 'field2'
  }, {
    id: 2,
    field1: 'field11',
    field2: 'field21'
  }, {
    id: 3,
    field1: 'field12',
    field2: 'field22'
  }])
  var datas = []
  for (var i = 0; i < 500; i++) {
    datas.push({
      a: i,
      b: 'b',
      c: 'c'
    })
  }
  viewmodel.lazyRows = ko.observableArray(datas)
  var lazyGrid = null
  var el = null
  setTimeout(function () {
    lazyGrid = window.ycloud.$refs['lazygrid']
    el = window.$(lazyGrid.$el).find('.y-grid-body table')[0]
  })
  // 示例代码
  viewmodel.lazyScroll = function (event, scrollTop) {
    var index = lazyGrid.getFitIndexByScrollTop(scrollTop)
    if (index === -1) {
      var curIndex = Math.round(datas.length * scrollTop / el.offsetHeight)
      index = curIndex
    }
    viewmodel.gridLazy.lazyStart(index - 30 < datas.length - datas.length / 5 ? index - 30 : datas.length - datas.length / 5)
    viewmodel.gridLazy.lazyEnd(index + 30 > datas.length ? datas.length : index + 30)
  }
  viewmodel.lazyColumns = [
    {
      title: 'a',
      field: 'a',
      width: 200,
      lock: true
    },
    {
      title: 'b',
      field: 'b',
      width: 100,
      type: 'render',
      renderFn: function (row) {
        if (row.a % 7 === 0) {
          return '<div>1</div><div>2</div><div>3</div><div>5</div>'
        } else if (row.a.toString().split('').indexOf('3') >= 0) {
          return '<div>5</div><div>2</div><div>3</div><div>5</div><div>5</div><div>5</div>'
        } else {
          return '12,3,4'
        }
      }
    },
    {
      title: 'c',
      field: 'c',
      width: 200
    }, {
      title: 'b',
      field: 'b',
      width: 200
    }, {
      title: 'c',
      field: 'c',
      width: 200
    }
  ]
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
