(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-org-dept-add-or-update-vue"],{7166:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"100px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"上级部门",prop:"parentName"}},[a("el-popover",{ref:"menuListPopover",attrs:{placement:"bottom-start",trigger:"click"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"default-expand-all":!1,"highlight-current":!0,"expand-on-click-node":!1,"node-key":"id",accordion:""},on:{"current-change":e.handleMenuListTreeCurrentChange}})],1),e._v(" "),a("el-input",{directives:[{name:"popover",rawName:"v-popover:menuListPopover",arg:"menuListPopover"}],staticClass:"menu-list__input",attrs:{readonly:!0,placeholder:"点击选择上级菜单"},model:{value:e.dataForm.parentName,callback:function(t){e.$set(e.dataForm,"parentName",t)},expression:"dataForm.parentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"部门名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门地址",prop:"address"}},[a("el-input",{attrs:{placeholder:"部门地址"},model:{value:e.dataForm.address,callback:function(t){e.$set(e.dataForm,"address",t)},expression:"dataForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门网址",prop:"url"}},[a("el-input",{attrs:{placeholder:"部门网址"},model:{value:e.dataForm.url,callback:function(t){e.$set(e.dataForm,"url",t)},expression:"dataForm.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门职责",prop:"scope"}},[a("el-input",{attrs:{placeholder:"部门职责"},model:{value:e.dataForm.scope,callback:function(t){e.$set(e.dataForm,"scope",t)},expression:"dataForm.scope"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"部门负责人",prop:"leader"}},[a("el-input",{attrs:{placeholder:"部门负责人"},model:{value:e.dataForm.leader,callback:function(t){e.$set(e.dataForm,"leader",t)},expression:"dataForm.leader"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"position"}},[a("el-input-number",{attrs:{min:0,"controls-position":"right",label:"排序"},model:{value:e.dataForm.position,callback:function(t){e.$set(e.dataForm,"position",t)},expression:"dataForm.position"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},o=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),i=a("ed08"),s=a("365c");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={add:s["a"].addDept,edit:s["a"].updateDept,list:s["a"].getDept},c={id:void 0,name:"",parentId:0,parentName:"",address:"",url:"",leader:"0",scope:"",position:0},u={data:function(){return{visible:!1,roleList:[],dataForm:d({},c),dataRule:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],parentName:[{required:!0,message:"上级部门不能为空",trigger:"change"}]},menuList:[],menuListTreeProps:{label:"name",children:"children"}}},created:function(){},methods:{resetDataForm:function(){this.dataForm=d({},c)},init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.resetDataForm(),this.dataForm.id=t.id||0,m.list({type:1},(function(a){e.menuList=Object(i["i"])(a.data),e.visible=!0,e.$nextTick((function(){e.$refs["dataForm"].resetFields(),Object.assign(e.dataForm,t),e.dataForm.id,e.menuListTreeSetCurrentNode()}))}),(function(e){}))},handleMenuListTreeCurrentChange:function(e,t){this.dataForm.parentId=e.id,this.dataForm.parentName=e.name},menuListTreeSetCurrentNode:function(){this.$refs.menuListTree.setCurrentKey(this.dataForm.parentId),this.dataForm.parentName=(this.$refs.menuListTree.getCurrentNode()||{})["name"]},dataFormSubmit:function(){var e=this;console.log(this.dataForm);var t=!this.dataForm.id;this.$refs["dataForm"].validate((function(a){if(console.log(e.dataForm),a){var r=t?"add":"edit";m[r](d({},e.dataForm),(function(a){e.visible=!1,e.$notify({title:"成功",message:t?"创建成功":"编辑成功",type:"success",duration:2e3}),e.$emit("refreshDataList")}),(function(e){}))}}))}}},p=u,f=(a("fb7f"),a("2877")),b=Object(f["a"])(p,r,o,!1,null,null,null);t["default"]=b.exports},"8b93":function(e,t,a){},fb7f:function(e,t,a){"use strict";var r=a("8b93"),o=a.n(r);o.a}}]);