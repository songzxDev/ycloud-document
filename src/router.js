import ko from 'knockout'
import $ from 'jquery'
const button = resolve => require(['./views/button'], resolve)

function initPage (page) {
  page(function (item) {
    ko.cleanNode(document.getElementById('bodycontent'))
    $('#app').html(item.default.template)
    item.default.init()
  })
}
var routesList = {
  '/button': button
}
var routes = {}
Object.keys(routesList).forEach(item => {
  routes[item] = function () {
    initPage(routesList[item])
  }
})
var route = window.Router(routes)
route.init()
