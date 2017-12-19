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
      total: ''
    }
  })
  table.on('price.valueChange', function (obj) {
    var price = obj.rowObj.getValue('price')
    var num = obj.rowObj.getValue('num')
    let total = price * num
    obj.rowObj.ref('total')(total)
  })
  var viewmodel = {
    rows: table.rows,
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
    table.setSimpleData([{
      id: 1,
      name: 'name',
      price: 23,
      num: 2,
      total: 46
    }])
  }, 300)
}
export default {
  template,
  init
}
