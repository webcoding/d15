(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login-social-signin-vue"],{"48b7":function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"social-signup-container"},[i("div",{staticClass:"sign-btn",on:{click:function(t){return n.wechatHandleClick("wechat")}}},[i("span",{staticClass:"wx-svg-container"},[i("icon-svg",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),n._v("\n    微信\n  ")]),n._v(" "),i("div",{staticClass:"sign-btn",on:{click:function(t){return n.tencentHandleClick("tencent")}}},[i("span",{staticClass:"qq-svg-container"},[i("icon-svg",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),n._v("\n    QQ\n  ")])])},c=[],o=window,s=o.screen;function r(n,t,i,e){var c=void 0!==window.screenLeft?window.screenLeft:s.left,o=void 0!==window.screenTop?window.screenTop:s.top,r=document.documentElement,a=r.clientWidth,d=r.clientHeight,l=window.innerWidth?window.innerWidth:a||s.width,w=window.innerHeight?window.innerHeight:d||s.height,u=l/2-i/2+c,h=w/2-e/2+o,p="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=".concat(i,", height=").concat(e,", top=").concat(h,", left=").concat(u),v=window.open(n,t,p);window.focus&&v.focus()}var a={name:"SocialSignin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var t="xxxxx",i=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/auth-redirect"),e="https://open.weixin.qq.com/connect/qrconnect?appid="+t+"&redirect_uri="+i+"&response_type=code&scope=snsapi_login#wechat_redirect";r(e,n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var t="xxxxx",i=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/auth-redirect"),e="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id="+t+"&redirect_uri="+i;r(e,n,540,540)}}},d=a,l=(i("8c55"),i("2877")),w=Object(l["a"])(d,e,c,!1,null,"00253537",null);t["default"]=w.exports},"75d4":function(n,t,i){},"8c55":function(n,t,i){"use strict";var e=i("75d4"),c=i.n(e);c.a}}]);