import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-cascader params='data: $root.cascaderData, selectedValue: $root.cascaderValue, clearable: true'>
        </y-cascader>
      </template>
      <script>
        var viewmodel = {
          cascaderData: ko.observableArray([
            {
              id: 1,
              name: '1',
              children: []
            },
            {
              id: 2,
              name: '2',
              children: []
            },
            {
              id: 3,
              name: '3',
              children: [
                {
                  id: 31,
                  name: '3.1',
                  children: [
                    {
                      id: 311,
                      name: '3.1.1'
                    }
                  ]
                },
                {
                  id: 32,
                  name: '3.2'
                }
              ]
            }
          ]),
          cascaderValue: ko.observable({name: '', id: ''})
        }
      </script>
      `,
      `
      <template>
        <y-cascader params='data: $root.cascaderDataAsync, selectedValue: $root.cascaderValueAsync, loadData: $root.loadData,clearable: true'>
        </y-cascader>
      </template>
      <script>
        var viewmodel = {
          cascaderDataAsync: ko.observableArray([
            {
              id: 1,
              name: '1',
              children: []
            },
            {
              id: 2,
              name: '2',
              children: []
            },
            {
              id: 3,
              name: '3(有异步加载数据)',
              children: []
            }
          ]),
          cascaderValueAsync: ko.observable({name: '', id: ''}),
          loadData: (data, cb) => {
            setTimeout(() => {
              var children = []
              if (data.id === 3) {
                children = [
                  {
                    id: 31,
                    name: '异步数据3.1',
                    children: []
                  }
                ]
              }
              cb(children)
            }, 1000)
          }
        }
      </script>
      `
    ],
    cascaderData: ko.observableArray([
      {
        id: 1,
        name: '1',
        children: []
      },
      {
        id: 2,
        name: '2',
        children: []
      },
      {
        id: 3,
        name: '3',
        children: [
          {
            id: 31,
            name: '3.1',
            children: [
              {
                id: 311,
                name: '3.1.1'
              }
            ]
          },
          {
            id: 32,
            name: '3.2'
          }
        ]
      }
    ]),
    cascaderValue: ko.observable({name: '', id: ''}),
    cascaderDataAsync: ko.observableArray([
      {
        id: 1,
        name: '1',
        children: []
      },
      {
        id: 2,
        name: '2',
        children: []
      },
      {
        id: 3,
        name: '3(有异步加载数据)',
        children: []
      }
    ]),
    cascaderValueAsync: ko.observable({name: '', id: ''}),
    loadData: (data, cb) => {
      setTimeout(() => {
        var children = []
        if (data.id === 3) {
          children = [
            {
              id: 31,
              name: '异步数据3.1',
              children: []
            }
          ]
        }
        cb(children)
      }, 1000)
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
