(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["design-index-vue","design-components-canvas-vue","design-components-data-vue","design-components-layout-vue","design-components-page-vue","design-components-property-vue","design-components-script-vue","design-components-widget-vue"],{"04ff":function(t,e,a){},"0737":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design-layout"},[t._v("\n  layout\n")])},n=[],s=a("2877"),c={},l=Object(s["a"])(c,i,n,!1,null,null,null);e["default"]=l.exports},"26af":function(t,e,a){},"3ba4":function(t,e,a){"use strict";var i=a("04ff"),n=a.n(i);n.a},4484:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design-page"},[t._v("\n  pages\n")])},n=[],s=a("2877"),c={},l=Object(s["a"])(c,i,n,!1,null,null,null);e["default"]=l.exports},5651:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"design-layout h-100"},[a("el-header",{staticClass:"design-header flex-middle",attrs:{height:"60px"}},[t._v("设计器")]),t._v(" "),a("el-main",{staticClass:"design-main"},[a("el-container",{staticClass:"design-container h-100"},[a("el-aside",{staticClass:"design-activity flex-items-v",attrs:{width:"50px",direction:"vertical"}},[a("div",{staticClass:"activity-item widget"},[t._v("组件库")]),t._v(" "),a("div",{staticClass:"activity-item tree"},[t._v("组件树")]),t._v(" "),a("div",{staticClass:"activity-item schema"},[t._v("Schema")])]),t._v(" "),a("el-aside",{staticClass:"design-left",attrs:{width:"250px"}},[a("d-"+t.activity,{tag:"element",attrs:{schema:t.asideSchema}})],1),t._v(" "),a("el-container",{staticClass:"design-center"},[a("el-header",{staticClass:"center-bar",attrs:{height:"40px",direction:"vertical"}},[a("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.handlePreview}},[t._v("预览")]),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"text"},on:{click:t.handleSave}},[t._v("保存")])],1),t._v(" "),a("el-main",{staticClass:"canvas-container"},[a("d-canvas",{attrs:{schema:t.canvasSchema}})],1)],1),t._v(" "),a("el-aside",{staticClass:"design-right",attrs:{width:"290px"}},[a("el-container",{staticClass:"h-100"},[a("el-header",{staticClass:"p-tabs",attrs:{height:"40px"}},[a("div",{staticClass:"p-tab",class:{active:"property"==t.tabRightPanel},on:{click:function(e){t.tabRightPanel="property"}}},[t._v("属性")]),t._v(" "),a("div",{staticClass:"p-tab",class:{active:"layout"==t.tabRightPanel},on:{click:function(e){t.tabRightPanel="layout"}}},[t._v("布局")]),t._v(" "),a("div",{staticClass:"p-tab",class:{active:"script"==t.tabRightPanel},on:{click:function(e){t.tabRightPanel="script"}}},[t._v("脚本")]),t._v(" "),a("div",{staticClass:"p-tab",class:{active:"data"==t.tabRightPanel},on:{click:function(e){t.tabRightPanel="data"}}},[t._v("数据")])]),t._v(" "),a("el-main",{staticClass:"p-tabs-items"},[a("d-"+t.tabRightPanel,{tag:"element",attrs:{schema:t.rightSchema}})],1)],1)],1)],1)],1)],1)},n=[],s={propsSchema:{type:"object",properties:{base:{type:"object",title:"通用字段",properties:{text:{type:"string",title:"单行文本",icon:""},textarea:{type:"",title:"多行文本",icon:""},number:{type:"",title:"数字",icon:""},inputNumber:{type:"",title:"计数器",icon:""},uploadImage:{type:"",title:"上传图片",icon:""},uploadFile:{type:"",title:"上传文件",icon:""},radio:{type:"",title:"单项选择",icon:""},checkbox:{type:"",title:"多项选择",icon:""},timePicker:{type:"",title:"时间",icon:""},datePicker:{type:"",title:"日期",icon:""},dateTimePicker:{type:"",title:"日期&时间",icon:""},switch:{type:"",title:"开关",icon:""},select:{type:"",title:"下拉选择器",icon:""},cascader:{type:"",title:"级联选择器",icon:""},treePicker:{type:"",title:"树形选择器",icon:""},colorPicker:{type:"",title:"颜色选择器",icon:""},richtext:{type:"",title:"富文本",icon:""},editor:{type:"",title:"编辑器",icon:""},rate:{type:"",title:"评分",icon:""},slider:{type:"",title:"滑块",icon:""}}},contact:{title:"联系信息字段",type:"object",properties:{username:{type:"",title:"姓名",icon:""},password:{type:"",title:"密码",icon:""},mobile:{type:"",title:"手机",icon:""},email:{type:"",title:"邮箱",icon:""},phone:{type:"",title:"电话",icon:""},address:{type:"",title:"地址",icon:""},link:{type:"",title:"网址",icon:""},desc:{type:"",title:"描述",icon:""}}},layout:{title:"布局字段",type:"object",properties:{layout:{type:"",title:"栅格布局",icon:""},tabs:{type:"",title:"Tabs 标签",icon:""},divider:{type:"",title:"分割线",icon:""},pageBreak:{type:"",title:"分页",icon:""}}}}}},c=a("62a6"),l=a("95bc"),o=a("e417"),r=a("0737"),d=a("b995"),u=a("4484"),p=a("94a1"),v={components:{DWidget:c["default"],DPage:u["default"],DProperty:l["default"],DLayout:r["default"],DScript:o["default"],DData:d["default"],DCanvas:p["default"]},data:function(){return{widgetSchema:s.propsSchema,canvasSchema:{},page:[],activity:"widget",property:{},script:{},layout:{},data:{},tabRightPanel:"property"}},computed:{asideSchema:function(){return this["".concat(this.activity,"Schema")]},rightSchema:function(){return this["".concat(this.tabRightPanel,"Schema")]}},methods:{handleClick:function(t,e){console.log(t,e)}}},g=v,f=(a("96e9"),a("2877")),h=Object(f["a"])(g,i,n,!1,null,"6b5eb6d2",null);e["default"]=h.exports},"5acb":function(t,e,a){"use strict";var i=a("6470"),n=a.n(i);n.a},"62a6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design-widget"},[t._l(t.schema.properties,(function(e,i){return[a("div",{key:i,staticClass:"widget-group"},[a("div",{staticClass:"widget-group-title"},[t._v(t._s(e.title))]),t._v(" "),a("draggable",t._b({staticClass:"widget-list flex-items",attrs:{move:t.handleMove,tag:"div"},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}}},"draggable",t.dragOptions,!1),[t._l(e.properties,(function(e,i){return[a("div",{key:i,staticClass:"widget-item"},[t._v(t._s(e.title))])]}))],2)],1)]}))],2)},n=[],s=(a("d263"),a("310e")),c=a.n(s),l={components:{Draggable:c.a},props:{schema:{type:Object,default:function(){}}},data:function(){return{isDragging:!1}},computed:{dragOptions:function(){return{group:{name:"widget",pull:"clone",put:!1},sort:!1,ghostClass:"ghost"}}},methods:{handleMove:function(t){var e=t.relatedContext,a=t.draggedContext,i=e.element,n=a.element;return(!i||!i.fixed)&&!n.fixed},handlePreview:function(){},handleSave:function(){},handleLoadData:function(){}}},o=l,r=(a("5acb"),a("2877")),d=Object(r["a"])(o,i,n,!1,null,"7da7ac2a",null);e["default"]=d.exports},6470:function(t,e,a){},"94a1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design-canvas full-100"},[a("draggable",{staticClass:"canvas-panel full-100",attrs:{group:{name:"widget",put:!0},swapThreshold:.7,animation:100,tag:"div","ghost-class":"ghost"},on:{add:t.handleWidgetAdd},model:{value:t.schema,callback:function(e){t.schema=e},expression:"schema"}},[a("div",{staticClass:"empty-field full-100"},[a("div",{staticClass:"empty-field-hint"},[t._v("请从左侧拖拽或点击添加字段")]),t._v(" "),a("div",{staticClass:"add-new-field-ontheleft"})])]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ask-to-pay"},[a("div",{staticClass:"power-logo"},[t._v("@dwdjs 提供技术支持")]),t._v(" "),a("div",{staticClass:"remove-ad"},[t._v("去logo")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ask-to-pay"},[a("div",{staticClass:"power-logo"},[t._v("@dwdjs 表单底部广告")]),t._v(" "),a("div",{staticClass:"remove-ad"},[t._v("去广告")])])}],s=a("310e"),c=a.n(s),l={components:{Draggable:c.a},props:{schema:{type:Object,default:function(){}}},data:function(){return{}},methods:{handleWidgetAdd:function(t){console.log("add",t)}}},o=l,r=(a("f3cc"),a("2877")),d=Object(r["a"])(o,i,n,!1,null,"13f702c9",null);e["default"]=d.exports},"95bc":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"design-property"},[t._v("\n  属性编辑\n")])},n=[],s={data:function(){return{activeName:"second"}},methods:{handleClick:function(t,e){console.log(t,e)}}},c=s,l=(a("3ba4"),a("2877")),o=Object(l["a"])(c,i,n,!1,null,"20d82173",null);e["default"]=o.exports},"96e9":function(t,e,a){"use strict";var i=a("eedd"),n=a.n(i);n.a},b995:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design-data"},[t._v("\n  data\n")])},n=[],s=a("2877"),c={},l=Object(s["a"])(c,i,n,!1,null,null,null);e["default"]=l.exports},d263:function(t,e,a){t.exports=a("9b85")(328)},e417:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"design-script"},[t._v("\n  script\n")])},n=[],s=a("2877"),c={},l=Object(s["a"])(c,i,n,!1,null,null,null);e["default"]=l.exports},eedd:function(t,e,a){},f3cc:function(t,e,a){"use strict";var i=a("26af"),n=a.n(i);n.a}}]);