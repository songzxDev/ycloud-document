import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [`
      <template>
        <y-editgrid params="rows: $root.editgridrows, columns: $root.editgridcolumns"></y-editgrid>
      </template>
      <script>
        var viewmodel = {
          editgridcolumns: ko.observableArray([{
              width: '20%',
              title: '品牌产地/材质',
              field: 'product',
              summaryType: 'render',
              summaryFn: (row) => {
                var template = "<div><div>" +
                row.materialName + "</div><div>" + row.num + row.unit + "需求组织：" +
                row.reqOrg + "</div><div>规格：" + row.spec + "</div></div>"
                return template
              },
              type: 'component',
              compFn: (row) => {
                return {
                  name: 'y-input',
                  params: {
                    value: row.product
                  }
                }
              }
            }, {
              width: '10%',
              title: '税率',
              field: 'taxrate',
              align: 'right',
              type: 'component',
              compFn: (row) => {
                return {
                  name: 'y-input',
                  params: {
                    value: row.taxrate,
                    align: 'right'
                  }
                }
              }
            }, {
              width: '10%',
              title: '无税单价(元)',
              align: 'right',
              field: 'price',
              type: 'component',
              compFn: (row) => {
                return {
                  name: 'y-input',
                  params: {
                    value: row.price,
                    align: 'right'
                  }
                }
              }
            }, {
              width: '10%',
              title: '金额',
              align: 'right',
              field: 'amount',
              type: 'component',
              compFn: (row) => {
                return {
                  name: 'y-input',
                  params: {
                    value: row.amount,
                    align: 'right'
                  }
                }
              }
            }, {
              width: '20%',
              title: '交货期',
              field: 'reqDate',
              type: 'component',
              compFn: (row) => {
                return {
                  name: 'y-datepicker',
                  params: {
                    data: row.reqDate
                  }
                }
              }
            }, {
              width: '20%',
              title: '备注',
              field: 'remark',
              type: 'component',
              compFn: (row) => {
                return {
                  name: 'y-input',
                  params: {
                    value: row.remark
                  }
                }
              }
      
            }
          ]),
          editgridrows: ko.observableArray([{
            materialName: '硫酸钾',
            num: 2000,
            unit: '吨',
            reqOrg: '广东那方是你优先公司',
            spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
            product: '',
            taxrate: 17,
            price: 200.00,
            amount: 400000.00,
            reqDate: ko.observable(''),
            holdDate: ko.observable(''),
            remark: ''
          }, {
            materialName: '硫酸钾',
            num: 200,
            unit: '吨',
            reqOrg: '广东那方是你优先公司',
            spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
            product: '',
            taxrate: 17,
            price: 220.00,
            amount: 400000.00,
            reqDate: ko.observable(''),
            holdDate: ko.observable(''),
            remark: ''
          }, {
            materialName: '硫酸钾',
            num: 1000,
            unit: '吨',
            reqOrg: '广东那方是你优先公司',
            spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
            product: '',
            taxrate: 17,
            price: '',
            amount: '',
            reqDate: ko.observable(''),
            holdDate: ko.observable(''),
            remark: ''
          }
        ])
        }
      </script>
    `, `
    <template>
      <y-childgrid params="rows: $root.childgridrows, columns:$root.childgridcolumns"></y-childgrid>
    </template>
    <script>
      var viewmodel = {
        childgridcolumns: [{
          title: '姓名',
          field: 'name',
          width: '20%',
          summaryType: 'render',
          summaryFn: (row) => {
            return '<div>' + row.title + '</div><p>这是一个summaryRow</p>'
          },
          childGridFn (row) {
            return {
              name: 'y-grid',
              params: {
                nohead: true,
                noborder: true,
                maxheight: 'auto',
                columns: [{
                  field: 'name',
                  width: '20%',
                }, {
                  field: 'age',
                  width: '10%'
                }, {
                  field: 'sex',
                  width: '30%'
                }],
                rows: ko.observableArray(row.list)
              }
            }
          }
        }, {
          title: '年龄',
          field: 'age',
          width: '10%'
        }, {
          title: '性别',
          field: 'sex',
          width: '30%'
        }],
        childgridrows: ko.observableArray([{
          title: '第一行',
          list: [
            {
              name: 'songjl',
              age: 30,
              sex: '男'
            }, {
              name: 'wuyg',
              age: 35,
              sex: '男'
            }, {
              name: 'wu2yg',
              age: 15,
              sex: '女'
            }
          ]
        }, {
          title: 'name2',
          list: [
            {
              name: 'lixih',
              age: 14,
              sex: '女'
            }, {
              name: 'guotg',
              age: 25,
              sex: '男'
            }
          ]
        }])
      } 
    </script>
    `
    ],
    editgridrows: ko.observableArray([
      {
        materialName: '硫酸钾',
        num: 2000,
        unit: '吨',
        reqOrg: '广东那方是你优先公司',
        spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
        product: '',
        taxrate: 17,
        price: 200.00,
        amount: 400000.00,
        reqDate: ko.observable(''),
        holdDate: ko.observable(''),
        remark: ''
      }, {
        materialName: '硫酸钾',
        num: 200,
        unit: '吨',
        reqOrg: '广东那方是你优先公司',
        spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
        product: '',
        taxrate: 17,
        price: 220.00,
        amount: 400000.00,
        reqDate: ko.observable(''),
        holdDate: ko.observable(''),
        remark: ''
      }, {
        materialName: '硫酸钾',
        num: 1000,
        unit: '吨',
        reqOrg: '广东那方是你优先公司',
        spec: 'XLLL 1号 #UIO 型号，历史采购档次一致',
        product: '',
        taxrate: 17,
        price: '',
        amount: '',
        reqDate: ko.observable(''),
        holdDate: ko.observable(''),
        remark: ''
      }
    ]),
    editgridcolumns: ko.observableArray([
      {
        width: '20%',
        title: '品牌产地/材质',
        field: 'product',
        summaryType: 'render',
        summaryFn: (row) => {
          var template = `<div><div>${row.materialName}</div>
        <div>${row.num}${row.unit}
          需求组织：${row.reqOrg}
        </div>
        <div>规格：${row.spec}</div></div>`
          return template
          // return {
          //   name: 'y-input',
          //   params: {
          //     value: row.reqDate
          //   }
          // }
        },
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              value: row.product
            }
          }
        }
      }, {
        width: '10%',
        title: '税率',
        field: 'taxrate',
        align: 'right',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              value: row.taxrate,
              align: 'right'
            }
          }
        }
      }, {
        width: '10%',
        title: '无税单价(元)',
        align: 'right',
        field: 'price',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              value: row.price,
              align: 'right'
            }
          }
        }
      }, {
        width: '10%',
        title: '金额',
        align: 'right',
        field: 'amount',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              value: row.amount,
              align: 'right'
            }
          }
        }
      }, {
        width: '20%',
        title: '交货期',
        field: 'reqDate',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-datepicker',
            params: {
              data: row.reqDate
            }
          }
        }
      }, {
        width: '20%',
        title: '备注',
        field: 'remark',
        type: 'component',
        compFn: (row) => {
          return {
            name: 'y-input',
            params: {
              value: row.remark
            }
          }
        }

      }
    ]),
    childgridcolumns: [{
      title: '姓名',
      field: 'name',
      width: '20%',
      summaryType: 'render',
      summaryFn: (row) => {
        return '<div>' + row.title + '</div><p>这是一个summaryRow</p>'
      },
      childGridFn (row) {
        return {
          name: 'y-grid',
          params: {
            nohead: true,
            noborder: true,
            maxheight: 'auto',
            columns: [{
              field: 'name',
              width: '20%'
            }, {
              field: 'age',
              width: '10%'
            }, {
              field: 'sex',
              width: '30%'
            }],
            rows: ko.observableArray(row.list)
          }
        }
      }
    }, {
      title: '年龄',
      field: 'age',
      width: '10%'
    }, {
      title: '性别',
      field: 'sex',
      width: '30%'
    }],
    childgridrows: ko.observableArray([{
      title: '第一行',
      list: [
        {
          name: 'songjl',
          age: 30,
          sex: '男'
        }, {
          name: 'wuyg',
          age: 35,
          sex: '男'
        }, {
          name: 'wu2yg',
          age: 15,
          sex: '女'
        }
      ]
    }, {
      title: 'name2',
      list: [
        {
          name: 'lixih',
          age: 14,
          sex: '女'
        }, {
          name: 'guotg',
          age: 25,
          sex: '男'
        }
      ]
    }])
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
