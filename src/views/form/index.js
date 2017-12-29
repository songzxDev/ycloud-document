import template from './index.html'
import ko from 'knockout'
import '@/components'
import ycloud from 'ycloud'
function init () {
  var viewmodel = {
    code: [`
      <template>
        <y-form params="model: $root.model, labelAlign: 'right'">
          <y-formitem params="label:'输入框:'">
            <y-input params="placeholder:'请输入文本', type:'text', value:$parent.model.input"></y-input>
          </y-formitem>
          <y-formitem params="label:'选择框:'">
            <y-select params="dataList: $parent.model.selectList,value: $parent.model.selectValue"></y-select>
          </y-formitem>
          <y-formitem params="label:'单选:'">
            <y-radio params="dataList: $parent.model.radioList,value: $parent.model.radioValue"></y-radio>
          </y-formitem>
          <y-formitem params="label:'多选:'">
            <y-checkbox params="dataList: $parent.model.checkboxList, value: $parent.model.checkboxValue"></y-checkbox>
          </y-formitem>
          <y-formitem params="label:'开关:'">
            <y-switch params="value: $parent.model.switch"></y-switch>
          </y-formitem>
          <y-formitem params="label:'提交:'">
            <y-button params="type: 'info', click: $parent.model.submit">提交</y-button>
          </y-formitem>
        </y-form>
      </template>
      <script>
        var viewmodel = {
          model: {
            input: ko.observable(),
            selectList: ko.observableArray([
              {value: 1, label: '北京'},
              {value: 2, label: '上海'},
              {value: 3, label: '广州'},
              {value: 4, label: '杭州'},
              {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
            ),
            selectValue: ko.observable(),
            radioList: ko.observableArray([
              {value: 1, label: '北京'},
              {value: 2, label: '上海'},
              {value: 3, label: '广州'}
            ]),
            radioValue: ko.observable(1),
            checkboxList: ko.observableArray([
              {value: 1, label: '苹果'},
              {value: 2, label: '草莓'},
              {value: 3, label: '菠萝'}
            ]),
            checkboxValue: ko.observableArray(),
            switch: ko.observable(true),
            submit: () => {
              ycloud.notice.info('提交表单！')
            }
          }
        }
      </script>
    `, `
    <template>
      <y-form params="ref: 'validateform', vRules: $root.model.vRules, model: $root.model, labelAlign: 'right'">
        <y-formitem params="label:'账号:',vMap:validateList,vKey:'name'">
          <y-input params="placeholder:'请输入用户名', type:'text', value:$parent.model.name"></y-input>
        </y-formitem>
        <y-formitem params="label:'密码:',vMap:validateList,vKey:'pwd'">
          <y-input params="placeholder:'请输入密码', type:'text', value:$parent.model.pwd"></y-input>
        </y-formitem>
        <y-formitem>
          <y-button params="type: 'info', click: $parent.model.login">登录</y-button>
        </y-formitem>
      </y-form>
    </template>
    <script>
      var viewmodel = {
        model: {
          name: ko.observable(),
          pwd: ko.observable(),
          vRules: {
            name: {
              type: 'string',
              required: true
            },
            pwd: {
              type: 'string',
              required: true
            }
          },
          login: () => {
            var form = ycloud.$refs['validateform']
            form.formValidate({name: viewmodel.model.name(), pwd: viewmodel.model.pwd()}, function (data) {})
          }
        }
      } 
    </script>
    `
    ],
    model: {
      input: ko.observable(),
      selectList: ko.observableArray([
        {value: 1, label: '北京'},
        {value: 2, label: '上海'},
        {value: 3, label: '广州'},
        {value: 4, label: '杭州'},
        {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
      ),
      selectValue: ko.observable(),
      radioList: ko.observableArray([
        {value: 1, label: '北京'},
        {value: 2, label: '上海'},
        {value: 3, label: '广州'}
      ]),
      radioValue: ko.observable(1),
      checkboxList: ko.observableArray([
        {value: 1, label: '苹果'},
        {value: 2, label: '草莓'},
        {value: 3, label: '菠萝'}
      ]),
      checkboxValue: ko.observableArray(),
      switch: ko.observable(true),
      submit: () => {
        ycloud.notice.info('提交表单！')
      },
      name: ko.observable(),
      pwd: ko.observable(),
      vRules: {
        name: {
          type: 'string',
          required: true
        },
        pwd: {
          type: 'string',
          required: true
        }
      },
      login: () => {
        var form = ycloud.$refs['validateform']
        form.formValidate({name: viewmodel.model.name(), pwd: viewmodel.model.pwd()}, function (data) {})
      }
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
