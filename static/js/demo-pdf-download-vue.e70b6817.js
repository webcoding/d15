(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo-pdf-download-vue"],{"06b8":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"main-article",attrs:{"element-loading-text":"Efforts to generate PDF"}},[n("div",{staticClass:"article__heading"},[n("div",{staticClass:"article__heading__title max-line-2"},[e._v("\n      "+e._s(e.article.title)+"\n    ")])]),e._v(" "),e._m(0),e._v(" "),n("div",{ref:"content",staticClass:"node-article-content clearfix",domProps:{innerHTML:e._s(e.article.content)}})])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{color:"#ccc"}},[e._v("\n    This article is from Evan You on "),n("a",{attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf"}},[e._v("medium")])])}],l={data:function(){return{article:"",fullscreenLoading:!0}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;n.e("chunk-2d212bba").then(n.bind(null,"aa59")).then((function(t){var n=t.default.title;document.title=n,e.article=t.default,setTimeout((function(){e.fullscreenLoading=!1,e.$nextTick((function(){window.print()}))}),3e3)}))}}},r=l,c=(n("46de"),n("2877")),o=Object(c["a"])(r,i,a,!1,null,null,null);t["default"]=o.exports},"46de":function(e,t,n){"use strict";var i=n("624f"),a=n.n(i);a.a},"624f":function(e,t,n){}}]);