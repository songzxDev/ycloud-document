import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `<template>
        <y-switch params="checked: $parent.checked1"></y-switch>
      </template>
      <script>
        var viewmodel = {
          checked1: ko.observable(false)
        }
        viewmodel.checked1.subscribe((val) => {
          window.alert(val)
        })
      </script>
      `,
      `<template>
        <y-switch params="checked: $parent.checked2[0], size: 'large'"></y-switch>
        <y-switch params="checked: $parent.checked2[1]"></y-switch>
        <y-switch params="checked: $parent.checked2[2], size: 'small'"></y-switch>
      </template>
      <script>
        var viewmodel = {
          checked2: [
            ko.observable(false),
            ko.observable(false),
            ko.observable(false)
          ]
        }
      </script>
      `,
      `<template>
        <y-switch params="checked: $parent.checked3[0]">
          <span data-bind="text: checked()? '开': '关'"></span>
        </y-switch>
        <y-switch params="checked: $parent.checked3[1]">
          <span data-bind="visible: checked">
            <i class="fa fa-check"></i>
          </span>
          <span data-bind="visible: !checked()">
            <i class="fa fa-times"></i>
          </span>
        </y-switch>
      </template>
      <script>
        var viewmodel = {
          checked3: [
            ko.observable(false),
            ko.observable(false)
          ]
        }
      </script>
      `,
      `<template>
        <y-switch params="checked: $parent.checked4, disabled: $parent.disabled"></y-switch>
        <y-button params="type: 'success', click: $parent.toggle">toggle</y-button>
      </template>
      <script>
        var viewmodel = {
          checked4: ko.observable(false),
          disabled: ko.observable(true),
          toggle: () => {
            viewmodel.disabled(!viewmodel.disabled())
          }
        }
      </script>
      `
    ],
    checked1: ko.observable(false),
    checked2: [
      ko.observable(false),
      ko.observable(false),
      ko.observable(false)
    ],
    checked3: [
      ko.observable(false),
      ko.observable(false)
    ],
    checked4: ko.observable(false),
    disabled: ko.observable(true),
    toggle: () => {
      viewmodel.disabled(!viewmodel.disabled())
    }
  }
  viewmodel.checked1.subscribe((val) => {
    window.alert(val)
  })

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
