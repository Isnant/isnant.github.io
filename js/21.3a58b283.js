(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"0824":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("font",{staticClass:"text-bold",attrs:{size:"1",color:"grey"}},[t._v("REPORT "),a("q-icon",{attrs:{name:"double_arrow"}}),t._v(" EQUIPMENT REPORT")],1),a("div",{staticStyle:{"margin-bottom":"30px",width:"240px"},attrs:{align:"left"}},[a("font",{staticClass:"text-bold",staticStyle:{"margin-bottom":"10px"},attrs:{size:"5"}},[t._v("EQUIPMENT REPORT")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-20",staticStyle:{width:"32%"}},[a("q-separator",{attrs:{color:"orange-10"}}),a("q-separator",{attrs:{color:"orange-10"}})],1),a("div",{staticClass:"col"},[a("q-separator",{attrs:{color:"purple-10"}}),a("q-separator",{attrs:{color:"purple-10"}})],1)])],1),a("q-card",{staticStyle:{width:"70%"}},[a("q-card-section",[a("q-expansion-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"SEARCH","header-class":"bg-indigo-2 text-indigo-10",icon:"search"}},[a("div",{staticClass:"bg-orange-1",staticStyle:{padding:"10px",width:"100%"}},[a("div",{staticClass:"row",staticStyle:{"margin-bottom":"20px"}},[a("div",{staticClass:"col",staticStyle:{"margin-right":"10px"}},[a("q-select",{attrs:{"stack-label":"",options:t.eqCategoryList,label:"Equipment Category"},model:{value:t.searchVal.eqCategory,callback:function(e){t.$set(t.searchVal,"eqCategory",e)},expression:"searchVal.eqCategory"}})],1),a("div",{staticClass:"col",staticStyle:{"margin-right":"10px"}},[a("q-select",{attrs:{"stack-label":"",options:t.regionList,label:"Region"},on:{input:function(e){return t.filterHubCode()}},model:{value:t.searchVal.region,callback:function(e){t.$set(t.searchVal,"region",e)},expression:"searchVal.region"}})],1),a("div",{staticClass:"col",staticStyle:{"margin-right":"10px"}},[a("q-select",{attrs:{"stack-label":"",options:t.filteredHubCodeList,label:"Hub Name"},on:{input:function(e){return t.getSelectValue()}},model:{value:t.searchVal.hubCode,callback:function(e){t.$set(t.searchVal,"hubCode",e)},expression:"searchVal.hubCode"}})],1),a("div",{staticClass:"col"},[a("q-btn",{attrs:{round:"",color:"indigo-10"},on:{click:function(e){return t.getReportEquipmentList()}}},[a("q-icon",{attrs:{name:"search"}}),a("q-tooltip",[t._v("Search")])],1)],1)])])]),a("div",[a("q-table",{attrs:{data:t.dataList,columns:t.tableColumns,pagination:t.pagination,"table-header-class":"text-indigo-10 bg-indigo-2","row-key":"id",dense:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"body-cell-historyDate",fn:function(e){return a("q-td",{},[t._v("\n            "+t._s(t._f("formatDate")(e.row.historyDate))+"\n          ")])}},{key:"body-cell-action",fn:function(e){return a("q-td",{},[a("div",{attrs:{align:"center"}},[a("q-btn-dropdown",{attrs:{rounded:"",size:"sm",color:"indigo-10"}},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[a("q-item-section",[a("q-btn",{attrs:{color:"indigo-6",round:"",size:"sm"},on:{click:function(a){return t.doOpenForm(e.row)}}},[a("q-icon",{attrs:{name:"fas fa-edit"}}),a("q-tooltip",[t._v("Show Child")])],1)],1)],1)],1)],1)],1)])}},{key:"body-cell-productType",fn:function(e){return a("q-td",{},["SUM"===e.row.productType?a("div",[a("div",{staticClass:"text-bold"},[t._v(t._s(e.row.productType))])]):a("div",[a("div",[t._v(t._s(e.row.productType))])])])}},{key:"body-cell-equipmentSum",fn:function(e){return a("q-td",{},["SUM"===e.row.productType?a("div",[a("div",{staticClass:"text-bold",attrs:{align:"right"}},[t._v(t._s(e.row.equipmentSum))])]):a("div",[a("div",{attrs:{align:"right"}},[t._v(t._s(e.row.equipmentSum))])])])}}])})],1)],1)],1),a("q-page-sticky",{attrs:{position:"top-right",offset:[30,30]}},[a("q-btn",{staticStyle:{"margin-bottom":"10px"},attrs:{id:"Submit",round:"",color:"positive"},nativeOn:{click:function(e){return t.downloadExcel(e)}}},[a("q-icon",{attrs:{name:"fas fa-file-excel"}}),a("q-tooltip",[t._v("Download Excel")])],1)],1)],1)},i=[],n=(a("55dd"),a("3a5f")),s={mixins:[n["a"]],data:function(){return{dataList:[],eqCategoryList:["All","Field","Indoor","Network"],hubCodeList:[],filteredHubCodeList:[],regionList:[],tableColumns:[{name:"equipmentCategory",label:"Equipment Category",field:"equipmentCategory",align:"left",style:"width: 100px",sortable:!0},{name:"region",label:"Region",field:"region",align:"left",style:"width: 200px",sortable:!0},{name:"hubCode",label:"Hub Name",field:"hubCode",align:"left",style:"width: 200px",sortable:!0},{name:"productType",label:"Product Type",field:"productType",align:"left",style:"width: 200px",sortable:!0},{name:"equipmentSum",label:"Jumlah",field:"equipmentSum",align:"right",sortable:!0}],pagination:{sortBy:"equipmentCategory",descending:!0,page:1,rowsPerPage:10},searchVal:{eqCategory:"All",hubCode:"All",region:"All"},showForm:!1}},methods:{doInitPage:function(){var t=this;"Indoor"===this.searchVal.eqCategory&&(this.searchVal.eqCategory="Hub"),this.showLoading(),this.$axios.get("".concat("/","getReportEquipmentInitPage"),{params:{eqCategory:this.searchVal.eqCategory,hubCode:this.searchVal.hubCode,region:this.searchVal.region}}).then((function(e){t.doMainFillTableResult(e.data.listOfReportEquipment),t.hubCodeList=e.data.listOfHubCode.sort(t.compareLabel),t.filteredHubCodeList=t.hubCodeList,t.regionList=t.hubCodeList.map((function(t){return t.cascadeValue})).filter(t.distinct).sort(t.compare),t.$q.loading.hide()})).catch((function(e){t.$q.loading.hide(),t.$q.notify({color:"negative",icon:"report_problem",message:e})}))},getReportEquipmentList:function(){var t=this;this.showLoading(),this.$axios.get("".concat("/","getReportEquipmentList"),{params:{eqCategory:this.searchVal.eqCategory,hubCode:this.searchVal.hubCode,region:this.searchVal.region}}).then((function(e){t.doMainFillTableResult(e.data),t.$q.loading.hide()})).catch((function(e){t.$q.loading.hide(),t.$q.notify({color:"negative",icon:"report_problem",message:e})}))},doMainFillTableResult:function(t){this.dataList=t},getSelectValue:function(){this.searchVal.hubCode=this.searchVal.hubCode.value},filterHubCode:function(){var t=this;"All"===this.searchVal.region?this.filteredHubCodeList=this.hubCodeList:(this.searchVal.hubCode="All",this.filteredHubCodeList=this.hubCodeList.filter((function(e){return e.cascadeValue===t.searchVal.region})),this.filteredHubCodeList.unshift({label:"All",value:"All"}))},downloadExcel:function(){var t=this;this.showLoading(),this.$axios.get("".concat("/","reportEquipmentExcelDownload"),{responseType:"arraybuffer"}).then((function(e){t.$q.loading.hide();var a=window.URL.createObjectURL(new Blob([e.data]),{type:""}),o=document.createElement("a");o.href=a,o.style="display: none",o.download="Equipment Report.xlsx",document.body.appendChild(o),o.click()})).catch((function(e){t.$q.loading.hide(),t.notify({color:"negative",icon:"report_problem",message:e})}))},compareLabel:function(t,e){var a=t.label.toUpperCase(),o=e.label.toUpperCase(),i=0;return a>o?i=1:a<o&&(i=-1),i},distinct:function(t,e,a){return a.indexOf(t)===e},compare:function(t,e){var a=0;return t>e?a=1:t<e&&(a=-1),a}},beforeMount:function(){this.doInitPage()}},r=s,l=(a("6b27"),a("2877")),c=Object(l["a"])(r,o,i,!1,null,null,null);e["default"]=c.exports},"3a5f":function(t,e,a){"use strict";var o=a("8380");e["a"]={methods:{showLoading:function(){this.$q.loading.show({spinner:o["a"],spinnerColor:"orange-10",spinnerSize:140,backgroundColor:"purple",messageColor:"black"})},showCheckingLoading:function(){this.$q.loading.show({spinner:o["a"],message:"Checking Excel Data...",spinnerColor:"orange-10",spinnerSize:60,backgroundColor:"purple",messageColor:"white",messageSize:60})},showUploadLoading:function(){this.$q.loading.show({spinner:o["a"],message:"Uploading Excel Data...",spinnerColor:"orange-10",spinnerSize:60,backgroundColor:"purple",messageColor:"white",messageSize:60})}}}},"42d8":function(t,e,a){},"6b27":function(t,e,a){"use strict";var o=a("42d8"),i=a.n(o);i.a}}]);