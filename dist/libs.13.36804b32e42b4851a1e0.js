webpackJsonp([13],[,,,,,,,,,,,,,,,function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={code:'\n      \x3c!-- import stylesheet --\x3e\n      <link rel="stylesheet" href="https://yc.yonyoucloud.com/cpu-cdn/js/ycloud/2.0.x/ycloud.min.css">\n      \x3c!-- import ycloud --\x3e\n      <script src="https://yc.yonyoucloud.com/cpu-cdn/js/ycloud/2.0.x/ycloud.min.js"><\/script>\n    ',codenpm:"\n      yarn add ycloud\n    ",importCode:"import ycloud from 'ycloud'",codeDemo:"    <y-boxcontent params=\"style:{minHeight:'300px'},title:'容器'\">\n    </y-boxcontent>"};a.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(58),i=_interopRequireDefault(o),r=n(0),a=_interopRequireDefault(r);n(40),t.default={template:i.default,init:init}},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n(41),n(56)},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.code=e.code,this.isShowAll=a.default.observable(!1),this.toggle=function(){this.isShowAll(!this.isShowAll())}.bind(this)}var o=n(42),i=_interopRequireDefault(o);n(43),n(44);var r=n(0),a=_interopRequireDefault(r);a.default.components.register("demo",{viewModel:init,template:i.default})},function(e,t){e.exports='<div class="demo">\n  <div class="demo-show">\n  \x3c!-- ko template: { nodes: $componentTemplateNodes } --\x3e\x3c!-- /ko --\x3e\n  </div>\n  <div class="demo-split"></div>\n  <div class="demo-code" data-bind="css:{\'demo-hideCode\':!isShowAll()}">\n    <y-code params="code:code"></y-code>\n  </div>\n  <div class="demo-toggle" data-bind="click:toggle"><span class="fa" data-bind="css:{\'fa-angle-double-down\':!isShowAll(),\'fa-angle-double-up\':isShowAll()}"></span></div>\n</div>\n'},function(e,t){},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Init(e,t){var n=this;this.$el=t.childNodes[0].childNodes[3],this.code=e.code,this.copy=function(){var t=new s.default(".copy",{text:function(){return e.code}});t.on("success",function(e){e.clearSelection(),t.destroy(),window.alert("代码已复制到剪贴板")})},setTimeout(function(){l.default.highlightBlock(n.$el)})}var o=n(45),i=_interopRequireDefault(o);n(46);var r=n(0),a=_interopRequireDefault(r),c=n(3),l=_interopRequireDefault(c),u=n(47),s=_interopRequireDefault(u);n(55),a.default.components.register("y-code",{viewModel:{createViewModel:function(e,t){return new Init(e,t.element)}},template:i.default})},function(e,t){e.exports='<div class="code">\n  <div class="tools">\n    <i class="fa fa-clipboard copy" data-bind="click: copy"></i>\n  </div>\n  <pre><code class="html" data-bind="text: code"></code></pre>\n</div>\n'},function(e,t){},function(e,t,n){var o,i,r;!function(a,c){i=[e,n(48),n(50),n(51)],o=c,void 0!==(r="function"==typeof o?o.apply(t,i):o)&&(e.exports=r)}(0,function(e,t,n,o){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getAttributeValue(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var i=_interopRequireDefault(t),r=_interopRequireDefault(n),a=_interopRequireDefault(o),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),u=function(e){function Clipboard(e,t){_classCallCheck(this,Clipboard);var n=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return _inherits(Clipboard,e),l(Clipboard,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===c(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,a.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return getAttributeValue("action",e)}},{key:"defaultTarget",value:function(e){var t=getAttributeValue("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return getAttributeValue("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),Clipboard}(r.default);e.exports=u})},function(e,t,n){var o,i,r;!function(a,c){i=[e,n(49)],o=c,void 0!==(r="function"==typeof o?o.apply(t,i):o)&&(e.exports=r)}(0,function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return e&&e.__esModule?e:{default:e}}(t),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function(){function ClipboardAction(e){_classCallCheck(this,ClipboardAction),this.resolveOptions(e),this.initSelection()}return i(ClipboardAction,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),ClipboardAction}();e.exports=r})},function(e,t){function select(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}e.exports=select},function(e,t){function E(){}E.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function listener(){o.off(e,listener),t.apply(n,arguments)}var o=this;return listener._=t,this.on(e,listener,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},e.exports=E},function(e,t,n){function listen(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return listenNode(e,t,n);if(o.nodeList(e))return listenNodeList(e,t,n);if(o.string(e))return listenSelector(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function listenNodeList(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function listenSelector(e,t,n){return i(document.body,e,t,n)}var o=n(52),i=n(53);e.exports=listen},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){function _delegate(e,t,n,o,i){var r=listener.apply(this,arguments);return e.addEventListener(n,r,i),{destroy:function(){e.removeEventListener(n,r,i)}}}function delegate(e,t,n,o,i){return"function"==typeof e.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return _delegate(e,t,n,o,i)}))}function listener(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}var o=n(54);e.exports=delegate},function(e,t){function closest(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=closest},function(e,t){},function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.name=e.name||"",this.link=e.link||""}var o=n(57),i=_interopRequireDefault(o);_interopRequireDefault(n(0)).default.components.register("y-title",{viewModel:init,template:i.default})},function(e,t){e.exports='<h1>\n  <span data-bind="text: name"></span>组件\n</h1>\n\x3c!-- ko if: link--\x3e\n<h2>\n  <a data-bind="attr: {href: link}" target="_blank" style="color: #2baee9">\n    <span data-bind="text: name"></span>组件API文档\n  </a>\n</h2>\n\x3c!-- /ko --\x3e\n<h2>代码示例</h2>\n'},function(e,t){e.exports='<y-box>\n  <y-boxcontent>\n    <h1>1.ycloud是什么</h1>\n    <p>\n      ycloud (俗称why cloud或云采cloud) 是友云采前端团队常年基于企业级应用页面总结出品的一套用于构建用户界面的UI框架/UE规范。\n      我们在基于knockoutjs的基础上，为您提供了一系列丰富可用的组件，方便您进行快速搭建一套企业级管理应用界面。\n    </p>\n    <h1>2.安装</h1>\n    <h4>CDN 引入</h4>\n    <y-code params="code: $root.code">\n\n    </y-code>\n    <h4>NPM 安装</h4>\n    推荐使用 yarn(或npm) 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。\n    <y-code params="code: $root.codenpm"></y-code>\n\n    <h1>3.快速上手</h1>\n    <h4>使用之前</h4>\n    <p>使用ycloud开发之前，我们假设您已经熟悉了对Knockoutjs的使用，我也建议您对一下文档进行阅读：</p>\n    <ul>\n      <li>\n        <a href="https://github.com/yonyouyc/yuncai-fe-guide/blob/master/tutorial/knockoutjs-guide.pdf" target="_blank">knockout基础知识</a>\n      </li>\n    </ul>\n    <h4>使用推荐工程</h4>\n    <p>我们为您准备好了单页面应用的 <a href="https://github.com/yonyouyc/ycloud-template" target="_blank">脚手架工程</a>，您可以基于它进行您的业务开发，为您省去大量宝贵的时间。</p>\n    <h4>引入ycloud</h4>\n    <y-code params="code: $root.importCode"></y-code>\n    <h5>组件使用规范</h5>\n    ycloud组件一般以 <code>y-</code> 做为前缀，使用 <code>params</code>传递参数，如\n    <y-code params="code: $root.codeDemo"></y-code>\n\n  </y-boxcontent>\n</y-box>\n<style>\n  a{\n    color: #1baede;\n  }\n  a:hover{\n    color: #2d8cf0;\n  }\n</style>\n'}]);
//# sourceMappingURL=libs.13.36804b32e42b4851a1e0.js.map