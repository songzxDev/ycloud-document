import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [`
      <template>
        <y-tag params="text:'标签一'"></y-tag>
        <y-tag params="text:'标签二'"></y-tag>
        <y-tag params="item: $root.item, text:$root.item().name,closeable:true,handleClose:$root.handleClose"></y-tag>
      </template>
      <script>
        var viewmodel = {
          item: ko.observable({
            id: '1',
            name: '标签三'
          }),
          handleClose: () => {
            console.log('关闭标签')
          }
        }
      </script>
    `, `
    <template>
      <y-tag params="text:'标签一'"></y-tag>
      <y-tag params="text:'标签二', type: 'blank'"></y-tag>
      <y-tag params="text:'标签三', type: 'ghost'"></y-tag>
    </template>
    `, `
    <template>
      <y-tag params="text: '标签一', style: {backgroundColor:'#e6451e'}"></y-tag>
      <y-tag params="text: '标签二', style: {backgroundColor:'#19be6b'}"></y-tag>
      <y-tag params="text: '标签三', style: {backgroundColor:'#f90'}"></y-tag>
    </template>
    `, `
    <template>
      <y-tag params="text: '标签一', type:'blank'"></y-tag>
      <y-tag params="item: $root.item, text: '标签二', type:'blank', enableActive:true, handleClick: $root.handleClick"></y-tag>
    </template>
    <script>
      var viewmodel = {
        item: ko.observable({
          id: '1',
          name: '标签三'
        }),
        handleClick: (item) => {
          console.log(item())
        }
      }
    </script>
    `, `<template>
      <y-formitem params="label:'不可选择标签:'">
        <y-searchtag params="tagList: $root.tagList"></y-searchtag>
      </y-formitem>
      <y-formitem params="label:'可选择标签:'">
        <y-searchtag params="enableActive:true,tagList: $root.tagList"></y-searchtag>
      </y-formitem>
    </template>
    <script>
      var viewmodel = {
        tagList: ko.observableArray([{
          title: '北京',
          value: 1,
          handleClick: function (item, isActive) {
            viewmodel.tagClick(item, isActive)
          }
        }, {
          title: '上海',
          value: 2,
          handleClick: function (item, isActive) {
            viewmodel.tagClick(item, isActive)
          }
        }, {
          title: '广州',
          value: 3,
          handleClick: function (item, isActive) {
            viewmodel.tagClick(item, isActive)
          }
        }, {
          title: '不相信',
          value: 4,
          handleClick: function (item, isActive) {
            viewmodel.tagClick(item, isActive)
          }
        }, {
          title: '眼泪',
          value: 5,
          handleClick: function (item, isActive) {
            viewmodel.tagClick(item, isActive)
          }
        }]),
        tagClick (item, isActive) {
          console.log(item)
          console.log(isActive)
        }
      }
    </script>
    `],
    item: ko.observable({
      id: '1',
      name: '标签三'
    }),
    handleClick: (item) => {
      console.log(item())
    },
    handleClose: () => {
      console.log('关闭标签')
    },
    // 以下为searchtag的vm
    tagList: ko.observableArray([{
      title: '北京',
      value: 1,
      handleClick: function (item, isActive) {
        viewmodel.tagClick(item, isActive)
      }
    }, {
      title: '上海',
      value: 2,
      handleClick: function (item, isActive) {
        viewmodel.tagClick(item, isActive)
      }
    }, {
      title: '广州',
      value: 3,
      handleClick: function (item, isActive) {
        viewmodel.tagClick(item, isActive)
      }
    }, {
      title: '不相信',
      value: 4,
      handleClick: function (item, isActive) {
        viewmodel.tagClick(item, isActive)
      }
    }, {
      title: '眼泪',
      value: 5,
      handleClick: function (item, isActive) {
        viewmodel.tagClick(item, isActive)
      }
    }]),
    tagClick (item, isActive) {
      console.log(item)
      console.log(isActive)
    }
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
