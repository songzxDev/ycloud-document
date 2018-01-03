import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  var viewmodel = {
    code: [
      `
      <template>
        <y-tooltip params="title:'上左出现tooltip',position:'topleft'">
        </y-tooltip>
        <y-tooltip params="title:'上方出现tooltip',position:'top'">
        </y-tooltip>
        <y-tooltip params="title:'上右出现tooltip',position:'topright'">
        </y-tooltip>
        <y-tooltip params="title:'下左出现tooltip',position:'bottomleft'">
        </y-tooltip>
        <y-tooltip params="title:'下方出现tooltip',position:'bottom'">
        </y-tooltip>
        <y-tooltip params="title:'下右出现tooltip',position:'bottomright'">
        </y-tooltip>
      </template>
      `,
      `
      <template>
        <y-tooltip params="title:'上方出现tooltip',position:'top'">
        </y-tooltip>
        <y-tooltip params="title:'上方出现tooltip',position:'top',question:true">
        </y-tooltip>
      </template>
      `,
      `
      <template>
        <y-tooltip params="title:'topleft+自定义内容'">
          <y-tooltipctn params="targetEl:$el,title:title,show:isShow,position:'topleft',height:213">
            <div>
              不限定报价品范围：不进行报价范围的指定，供应商可以为本次寻源项目的所有物料报价。
            </div>
            <br>
            <div>
              手动分配：在被邀请的供应商中，采购员手动为供应商分配可报价的物料范围，供应商报价时仅可对已被分配的物料范围进行报价，其他未被分配的物料供应商报价时不可见不可报价。
            </div>
            <br>
            <div>
              按供货目录自动分配：按照供货目录自动分配报价范围给自有合格供应商（供应商的供货目录数据来源供应商档案中的主供物料分类数据）。不接受盘外供应商报价。
            </div>
          </y-tooltipctn>
          <i class="fa fa-edit"></i>
        </y-tooltip>
      </template>
      `
    ]
  }

  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
