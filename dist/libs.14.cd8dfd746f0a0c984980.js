webpackJsonp([14],{31:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={code:["\n      <template>\n        <y-form params=\"model: $root.model, labelAlign: 'right'\">\n          <y-formitem params=\"label:'输入框:'\">\n            <y-input params=\"placeholder:'请输入文本', type:'text', value:$parent.model.input\"></y-input>\n          </y-formitem>\n          <y-formitem params=\"label:'选择框:'\">\n            <y-select params=\"dataList: $parent.model.selectList,value: $parent.model.selectValue\"></y-select>\n          </y-formitem>\n          <y-formitem params=\"label:'单选:'\">\n            <y-radio params=\"dataList: $parent.model.radioList,value: $parent.model.radioValue\"></y-radio>\n          </y-formitem>\n          <y-formitem params=\"label:'多选:'\">\n            <y-checkbox params=\"dataList: $parent.model.checkboxList, value: $parent.model.checkboxValue\"></y-checkbox>\n          </y-formitem>\n          <y-formitem params=\"label:'开关:'\">\n            <y-switch params=\"value: $parent.model.switch\"></y-switch>\n          </y-formitem>\n          <y-formitem params=\"label:'提交:'\">\n            <y-button params=\"type: 'info', click: $parent.model.submit\">提交</y-button>\n          </y-formitem>\n        </y-form>\n      </template>\n      <script>\n        var viewmodel = {\n          model: {\n            input: ko.observable(),\n            selectList: ko.observableArray([\n              {value: 1, label: '北京'},\n              {value: 2, label: '上海'},\n              {value: 3, label: '广州'},\n              {value: 4, label: '杭州'},\n              {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]\n            ),\n            selectValue: ko.observable(),\n            radioList: ko.observableArray([\n              {value: 1, label: '北京'},\n              {value: 2, label: '上海'},\n              {value: 3, label: '广州'}\n            ]),\n            radioValue: ko.observable(1),\n            checkboxList: ko.observableArray([\n              {value: 1, label: '苹果'},\n              {value: 2, label: '草莓'},\n              {value: 3, label: '菠萝'}\n            ]),\n            checkboxValue: ko.observableArray(),\n            switch: ko.observable(true),\n            submit: () => {\n              ycloud.notice.info('提交表单！')\n            }\n          }\n        }\n      <\/script>\n    ","\n    <template>\n      <y-form params=\"ref: 'validateform', vRules: $root.model.vRules, model: $root.model, labelAlign: 'right'\">\n        <y-formitem params=\"label:'账号:',vMap:validateList,vKey:'name'\">\n          <y-input params=\"placeholder:'请输入用户名', type:'text', value:$parent.model.name\"></y-input>\n        </y-formitem>\n        <y-formitem params=\"label:'密码:',vMap:validateList,vKey:'pwd'\">\n          <y-input params=\"placeholder:'请输入密码', type:'text', value:$parent.model.pwd\"></y-input>\n        </y-formitem>\n        <y-formitem>\n          <y-button params=\"type: 'info', click: $parent.model.login\">登录</y-button>\n        </y-formitem>\n      </y-form>\n    </template>\n    <script>\n      var viewmodel = {\n        model: {\n          name: ko.observable(),\n          pwd: ko.observable(),\n          vRules: {\n            name: {\n              type: 'string',\n              required: true\n            },\n            pwd: {\n              type: 'string',\n              required: true\n            }\n          },\n          login: () => {\n            var form = ycloud.$refs['validateform']\n            form.formValidate({name: viewmodel.model.name(), pwd: viewmodel.model.pwd()}, function (data) {})\n          }\n        }\n      } \n    <\/script>\n    "],model:{input:r.default.observable(),selectList:r.default.observableArray([{value:1,label:"北京"},{value:2,label:"上海"},{value:3,label:"广州"},{value:4,label:"杭州"},{value:5,label:"超过二十个字的参照超过二十个字的参照超过二十个字的参照"}]),selectValue:r.default.observable(),radioList:r.default.observableArray([{value:1,label:"北京"},{value:2,label:"上海"},{value:3,label:"广州"}]),radioValue:r.default.observable(1),checkboxList:r.default.observableArray([{value:1,label:"苹果"},{value:2,label:"草莓"},{value:3,label:"菠萝"}]),checkboxValue:r.default.observableArray(),switch:r.default.observable(!0),submit:function(){s.default.notice.info("提交表单！")},name:r.default.observable(),pwd:r.default.observable(),vRules:{name:{type:"string",required:!0},pwd:{type:"string",required:!0}},login:function(){s.default.$refs.validateform.formValidate({name:e.model.name(),pwd:e.model.pwd()},function(e){})}}};r.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(72),i=_interopRequireDefault(o),a=n(0),r=_interopRequireDefault(a);n(38);var l=n(1),s=_interopRequireDefault(l);t.default={template:i.default,init:init}},38:function(e,t,n){"use strict";n(39),n(54)},39:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.code=e.code,this.isShowAll=r.default.observable(!1),this.toggle=function(){this.isShowAll(!this.isShowAll())}.bind(this)}var o=n(40),i=_interopRequireDefault(o);n(41),n(42);var a=n(0),r=_interopRequireDefault(a);r.default.components.register("demo",{viewModel:init,template:i.default})},40:function(e,t){e.exports='<div class="demo">\n  <div class="demo-show">\n  \x3c!-- ko template: { nodes: $componentTemplateNodes } --\x3e\x3c!-- /ko --\x3e\n  </div>\n  <div class="demo-split"></div>\n  <div class="demo-code" data-bind="css:{\'demo-hideCode\':!isShowAll()}">\n    <y-code params="code:code"></y-code>\n  </div>\n  <div class="demo-toggle" data-bind="click:toggle"><span class="fa" data-bind="css:{\'fa-angle-double-down\':!isShowAll(),\'fa-angle-double-up\':isShowAll()}"></span></div>\n</div>\n'},41:function(e,t){},42:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function Init(e,t){var n=this;this.$el=t.childNodes[0].childNodes[3],this.code=e.code,this.copy=function(){var t=new u.default(".copy",{text:function(){return e.code}});t.on("success",function(e){e.clearSelection(),t.destroy(),window.alert("代码已复制到剪贴板")})},setTimeout(function(){s.default.highlightBlock(n.$el)})}var o=n(43),i=_interopRequireDefault(o);n(44);var a=n(0),r=_interopRequireDefault(a),l=n(3),s=_interopRequireDefault(l),c=n(45),u=_interopRequireDefault(c);n(53),r.default.components.register("y-code",{viewModel:{createViewModel:function(e,t){return new Init(e,t.element)}},template:i.default})},43:function(e,t){e.exports='<div class="code">\n  <div class="tools">\n    <i class="fa fa-clipboard copy" data-bind="click: copy"></i>\n  </div>\n  <pre><code class="html" data-bind="text: code"></code></pre>\n</div>\n'},44:function(e,t){},45:function(e,t,n){var o,i,a;!function(r,l){i=[e,n(46),n(48),n(49)],o=l,void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(0,function(e,t,n,o){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getAttributeValue(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var i=_interopRequireDefault(t),a=_interopRequireDefault(n),r=_interopRequireDefault(o),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),c=function(e){function Clipboard(e,t){_classCallCheck(this,Clipboard);var n=_possibleConstructorReturn(this,(Clipboard.__proto__||Object.getPrototypeOf(Clipboard)).call(this));return n.resolveOptions(t),n.listenClick(e),n}return _inherits(Clipboard,e),s(Clipboard,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===l(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,r.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return getAttributeValue("action",e)}},{key:"defaultTarget",value:function(e){var t=getAttributeValue("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return getAttributeValue("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),Clipboard}(a.default);e.exports=c})},46:function(e,t,n){var o,i,a;!function(r,l){i=[e,n(47)],o=l,void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(0,function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(e){return e&&e.__esModule?e:{default:e}}(t),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=function(){function ClipboardAction(e){_classCallCheck(this,ClipboardAction),this.resolveOptions(e),this.initSelection()}return i(ClipboardAction,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),ClipboardAction}();e.exports=a})},47:function(e,t){function select(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}e.exports=select},48:function(e,t){function E(){}E.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function listener(){o.off(e,listener),t.apply(n,arguments)}var o=this;return listener._=t,this.on(e,listener,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var a=0,r=o.length;a<r;a++)o[a].fn!==t&&o[a].fn._!==t&&i.push(o[a]);return i.length?n[e]=i:delete n[e],this}},e.exports=E},49:function(e,t,n){function listen(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return listenNode(e,t,n);if(o.nodeList(e))return listenNodeList(e,t,n);if(o.string(e))return listenSelector(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function listenNode(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function listenNodeList(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function listenSelector(e,t,n){return i(document.body,e,t,n)}var o=n(50),i=n(51);e.exports=listen},50:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},51:function(e,t,n){function _delegate(e,t,n,o,i){var a=listener.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}function delegate(e,t,n,o,i){return"function"==typeof e.addEventListener?_delegate.apply(null,arguments):"function"==typeof n?_delegate.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return _delegate(e,t,n,o,i)}))}function listener(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}var o=n(52);e.exports=delegate},52:function(e,t){function closest(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=closest},53:function(e,t){},54:function(e,t,n){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){this.name=e.name||"",this.link=e.link||""}var o=n(55),i=_interopRequireDefault(o);_interopRequireDefault(n(0)).default.components.register("y-title",{viewModel:init,template:i.default})},55:function(e,t){e.exports='<h1>\n  <span data-bind="text: name"></span>组件\n</h1>\n\x3c!-- ko if: link--\x3e\n<h2>\n  <a data-bind="attr: {href: link}" target="_blank" style="color: #2baee9">\n    <span data-bind="text: name"></span>组件API文档\n  </a>\n</h2>\n\x3c!-- /ko --\x3e\n<h2>代码示例</h2>\n'},72:function(e,t){e.exports='<div class="y-box">\n  <y-title params="name: \'Form表单\', link: \'https://github.com/yonyouyc/blog/issues/41\'"></y-title>\n  <demo params="code:code[0]">\n    <div class="code-top row">\n      <div class="col-md-7">\n        <y-form params="model: $root.model, labelAlign: \'right\'">\n          <y-formitem params="label:\'输入框:\'">\n            <y-input params="placeholder:\'请输入文本\', type:\'text\', value:$parent.model.input"></y-input>\n          </y-formitem>\n          <y-formitem params="label:\'选择框:\'">\n            <y-select params="dataList: $parent.model.selectList,value: $parent.model.selectValue"></y-select>\n          </y-formitem>\n          <y-formitem params="label:\'单选:\'">\n            <y-radio params="dataList: $parent.model.radioList,value: $parent.model.radioValue"></y-radio>\n          </y-formitem>\n          <y-formitem params="label:\'多选:\'">\n            <y-checkbox params="dataList: $parent.model.checkboxList, value: $parent.model.checkboxValue"></y-checkbox>\n          </y-formitem>\n          <y-formitem params="label:\'开关:\'">\n            <y-switch params="value: $parent.model.switch"></y-switch>\n          </y-formitem>\n          <y-formitem params="label:\'提交:\'">\n            <y-button params="type: \'info\', click: $parent.model.submit">提交</y-button>\n          </y-formitem>\n        </y-form>\n      </div>\n    </div>\n    <div class="code-split">\n      <span>表单控件</span>\n    </div>\n    <div class="code-bottom">\n      在form内，每个表单域由formitem组成。<br>\n      给form设置<code>labelWidth</code>给label设置宽度，给form设置<code>labelAlign</code>为label的对齐方式(默认为<code>right</code>)。<br>\n      给formitem设置<code>label</code>可以显示表单域的标签。\n    </div>\n  </demo>\n\n  <demo params="code:code[1]">\n    <div class="code-top row">\n      <div class="col-md-7">\n        <y-form params="ref: \'validateform\', vRules: $root.model.vRules, model: $root.model, labelAlign: \'right\'">\n          <y-formitem params="label:\'账号:\',vMap:validateList,vKey:\'name\'">\n            <y-input params="placeholder:\'请输入用户名\', type:\'text\', value:$parent.model.name"></y-input>\n          </y-formitem>\n          <y-formitem params="label:\'密码:\',vMap:validateList,vKey:\'pwd\'">\n            <y-input params="placeholder:\'请输入密码\', type:\'text\', value:$parent.model.pwd"></y-input>\n          </y-formitem>\n          <y-formitem>\n            <y-button params="type: \'info\', click: $parent.model.login">登录</y-button>\n          </y-formitem>\n        </y-form>\n      </div>\n    </div>\n    <div class="code-split">\n      <span>表单验证</span>\n    </div>\n    <div class="code-bottom">\n      form组件基于async-validator实现的数据验证，给form设置属性<code>vRules</code>，同时给需要验证的formtem设置属性<code>vMap</code>，同时设置<code>vKey</code>指向对应字段即可。\n      完整的验证规则请参照开源项目async-validator。\n    </div>\n  </demo>\n</div>\n'}});
//# sourceMappingURL=libs.14.cd8dfd746f0a0c984980.js.map