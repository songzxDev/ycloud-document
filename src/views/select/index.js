import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: {
      base: `
      <template>
        <y-select params="dataList:$root.selectList,value:$root.base,onChange:$root.onSelectChange"></y-select>
      </template>
      <script>
        var viewmodel = {
          selectList: ko.observableArray([
            {value: 1, label: '北京'},
            {value: 6, label: '北平'},
            {value: 2, label: '上海'},
            {value: 3, label: '广州'},
            {value: 4, label: '杭州'},
            {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
          ),
          base: ko.observable(),
          onSelectChange: (data) => {
            console.log('change:' + JSON.stringify(data))
          }
        }
      </script>
      `,
      multiple: `
      <template>
      <y-select
        params="dataList:$root.selectList,multiValue:$root.multiselect,multiple:true"></y-select>
      </template>
      <script>
      var viewmodel = {
        selectList: ko.observableArray([
          {value: 1, label: '北京'},
          {value: 6, label: '北平'},
          {value: 2, label: '上海'},
          {value: 3, label: '广州'},
          {value: 4, label: '杭州'},
          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
        ),
        multiselect: ko.observableArray()
      }
      </script>
      `,
      default: `
      <template>
        <y-select params="dataList:$root.selectList,value:$root.singleselect.default"></y-select>
        <y-select
          params="dataList:$root.selectList,multiValue:$root.multiselectDefault,multiple:true">
        </y-select>
      </template>
      <script>
        var viewmodel = {
          selectList: ko.observableArray([
            {value: 1, label: '北京'},
            {value: 6, label: '北平'},
            {value: 2, label: '上海'},
            {value: 3, label: '广州'},
            {value: 4, label: '杭州'},
            {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
          ),
          default: ko.observable({value: 1, label: '北京'}),
          multiselectDefault: ko.observableArray([
            {value: 1, label: '北京'},
            {value: 6, label: '北平'}
          ])
        }
      </script>
      `,
      clearable: `
      <template>
        <y-select params="dataList:$root.selectList,value:$root.clearable,clearable:true"></y-select>
      </template>
      <script>
      var viewmodel = {
        selectList: ko.observableArray([
          {value: 1, label: '北京'},
          {value: 6, label: '北平'},
          {value: 2, label: '上海'},
          {value: 3, label: '广州'},
          {value: 4, label: '杭州'},
          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
        ),
        clearable: ko.observable()
      }
      </script>
      `,
      filterable: `
      <template>
        <y-select params="dataList:$root.selectList,value:$root.filterable,clearable:true,filterable:true"></y-select>
      </template>
      <script>
      var viewmodel = {
        selectList: ko.observableArray([
          {value: 1, label: '北京'},
          {value: 6, label: '北平'},
          {value: 2, label: '上海'},
          {value: 3, label: '广州'},
          {value: 4, label: '杭州'},
          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
        ),
        filterable: ko.observable()
      }
      </script>
      `,
      onmore: `
      <template>
        <y-select params="valuekey:'id',labelkey: 'personName',hasmore:true, onmore:$root.showModal,value:$root.singleselect.onmore,loadData: $root.loadSelectData,clearable:true"></y-select>
        <y-modal params="visible: $root.modalVisible, width:'700px',title:'请选择！'">
          自定义内容
        </y-modal>
      </template>
      <script>
      var viewmodel = {
        selectList: ko.observableArray([
          {value: 1, label: '北京'},
          {value: 6, label: '北平'},
          {value: 2, label: '上海'},
          {value: 3, label: '广州'},
          {value: 4, label: '杭州'},
          {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
        ),
        onmore: ko.observable(),
        modalVisible: ko.observable(false),
        showModal: () => {
          viewmodel.modalVisible(true)
        }
      }
      </script>
      `
    },
    selectList: ko.observableArray([
      {value: 1, label: '北京'},
      {value: 6, label: '北平'},
      {value: 2, label: '上海'},
      {value: 3, label: '广州'},
      {value: 4, label: '杭州'},
      {value: 5, label: '超过二十个字的参照超过二十个字的参照超过二十个字的参照'}]
    ),
    loadSelectData: (params, cb) => {
      setTimeout(() => {
        cb([{
          email: '',
          enterpriseId: 30,
          id: 31703,
          moblie: '',
          organizationId: 41,
          organizationName: '北京采购部',
          personCode: 'kbczy',
          personName: '开标操作员',
          suporgCode: 'p01',
          suporgName: '1网上商城运营方',
          userId: 889,
          userName: 'newtest'
        }])
      }, 0)
    },
    singleselect: {
      base: ko.observable(),
      clearable: ko.observable(),
      loadData: ko.observable(),
      onmore: ko.observable(),
      default: ko.observable({value: 1, label: '北京'})
    },
    multiselect: ko.observableArray(),
    multiselectDefault: ko.observableArray([
      {value: 1, label: '北京'},
      {value: 6, label: '北平'}
    ]),
    onSelectChange: function (data) {
      console.log('change:' + JSON.stringify(data))
    },
    disabled: ko.observable(true),
    modalVisible: ko.observable(false),
    showModal: () => {
      viewmodel.modalVisible(true)
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
