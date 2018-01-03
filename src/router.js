import ko from 'knockout'
import $ from 'jquery'
import componentsList from './model/views'
var routesList = {}
componentsList.forEach((item) => {
  routesList['/' + item.name] = resolve => require(['./views/' + item.name], resolve)
})

function initPage (page) {
  page(function (item) {
    ko.cleanNode(document.getElementById('bodycontent'))
    $('#app').hide()
    $('#app').html(item.default.template)
    item.default.init()
    $('#app').fadeIn()
  })
}

var routes = {}
Object.keys(routesList).forEach(item => {
  routes[item] = function () {
    initPage(routesList[item])
  }
})
var route = window.Router(routes)
route.init()
