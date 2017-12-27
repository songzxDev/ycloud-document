import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: `
    <y-icon params="type:'bicycle'"></y-icon>
    <y-icon params="type:'bus'"></y-icon>
    <y-icon params="type:'car'"></y-icon>
    <y-icon params="type:'plane'"></y-icon>
    <y-icon params="type:'bicycle', color: '#2d8cf0'"></y-icon>
    <y-icon params="type:'bus', color: '#19be6b'"></y-icon>
    <y-icon params="type:'car', color: '#ff9900'"></y-icon>
    <y-icon params="type:'plane', color: '#ed3f14'"></y-icon>
    <y-icon params="type:'bicycle', size: 12"></y-icon>
    <y-icon params="type:'bus', size: 14"></y-icon>
    <y-icon params="type:'car', size: 16"></y-icon>
    <y-icon params="type:'plane', size: 18"></y-icon>
    `
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
