(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{4632:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-indigo-2",attrs:{reveal:!0,"reveal-offset":100,elevated:""}},[a("q-toolbar",{attrs:{color:"indigo-3"}},[a("q-toolbar-title",{attrs:{align:"center"}},[a("div",{attrs:{align:"center"}},[a("img",{staticClass:"responsive",attrs:{src:"statics/sealhead4.png",width:"900px"}})])])],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],n=(a("28a5"),a("b06b")),o={name:"default",data:function(){return{leftDrawerOpen:!1,userInfo:{}}},beforeMount:function(){this.$q.loading.show();var t=localStorage.getItem("user-token");void 0!==t&&null!==t||(this.$q.loading.hide(),this.$router.push("/login")),this.userInfo=JSON.parse(JSON.parse(atob(t.split(".")[1])).userInfo),this.$q.loading.hide()},methods:{openURL:n["a"]}},i=o,l=a("2877"),u=Object(l["a"])(i,r,s,!1,null,null,null);e["default"]=u.exports}}]);