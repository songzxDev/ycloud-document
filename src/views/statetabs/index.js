import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `<template>
        <y-state-tabs params="
          style:{marginBottom: 0},
          index:$root.curStateIndex,
          items:$root.stateTabsItems,
          handler: $root.handleClick">
        </y-state-tabs>
      </template>
      <script>
        var viewmodel = {
          curStateIndex: ko.observable(0),
          stateTabsItems: ko.observableArray([
            {
              title: '待收货',
              state: 1,
              num: 0
            },
            {
              title: '已收货',
              state: 2,
              num: 2
            },
            {
              title: '待收货',
              state: 3,
              num: 3
            }
          ]),
          handleClick (item) {
            ycloud.notice.info(JSON.stringify(item))
          }
        }
      </script>`
    ],
    curStateIndex: ko.observable(0),
    stateTabsItems: ko.observableArray([
      {
        title: '待收货',
        state: 1,
        num: 0
      },
      {
        title: '已收货',
        state: 2,
        num: 2
      },
      {
        title: '待收货',
        state: 3,
        num: 3
      }
    ]),
    handleClick (item) {
      window.ycloud.notice.info(JSON.stringify(item))
    }
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
