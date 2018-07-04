import ko from 'knockout'
import $ from 'jquery'
// import componentsList from './model/views'
var routesList = {}
routesList['/'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/home/index')
    resolve(view)
  })
}
routesList['/box'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/box/index')
    resolve(view)
  })
}
routesList['/button'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/button/index')
    resolve(view)
  })
}
routesList['/grid'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/grid/index')
    resolve(view)
  })
}
routesList['/complexgrid'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/complexgrid/index')
    resolve(view)
  })
}
routesList['/gridadvance'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/gridadvance/index')
    resolve(view)
  })
}
routesList['/modal'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/modal/index')
    resolve(view)
  })
}
routesList['/tree'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/tree/index')
    resolve(view)
  })
}
routesList['/pagination'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/pagination/index')
    resolve(view)
  })
}
routesList['/switch'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/switch/index')
    resolve(view)
  })
}
routesList['/select'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/select/index')
    resolve(view)
  })
}
routesList['/radio'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/radio/index')
    resolve(view)
  })
}
routesList['/checkbox'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/checkbox/index')
    resolve(view)
  })
}
routesList['/tag'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/tag/index')
    resolve(view)
  })
}
routesList['/boxsticky'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/boxsticky/index')
    resolve(view)
  })
}
routesList['/icon'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/icon/index')
    resolve(view)
  })
}
routesList['/input'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/input/index')
    resolve(view)
  })
}
routesList['/notice'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/notice/index')
    resolve(view)
  })
}
routesList['/form'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/form/index')
    resolve(view)
  })
}
routesList['/statetabs'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/statetabs/index')
    resolve(view)
  })
}
routesList['/cascader'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/cascader/index')
    resolve(view)
  })
}
routesList['/datepicker'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/datepicker/index')
    resolve(view)
  })
}
routesList['/tooltip'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/tooltip/index')
    resolve(view)
  })
}
routesList['/breadcrumb'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/breadcrumb/index')
    resolve(view)
  })
}
routesList['/showdetail'] = resolve => {
  require.ensure([], function () {
    var view = require('./views/showdetail/index')
    resolve(view)
  })
}
function initPage (page) {
  page(function (item) {
    console.log(item)
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
if (window.location.href.indexOf('#') < 0) {
  window.location.href = '#/'
}
