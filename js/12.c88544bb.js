(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"2dd2":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",[e("font",{staticClass:"text-bold",attrs:{size:"1",color:"grey"}},[t._v("MASTER DATA "),e("q-icon",{attrs:{name:"double_arrow"}}),t._v(" HUB ROOM LIST")],1),e("div",{staticStyle:{"margin-bottom":"30px","margin-top":"10px",width:"180px"},attrs:{align:"left"}},[e("font",{staticClass:"text-bold",staticStyle:{"margin-bottom":"10px"},attrs:{size:"5"}},[t._v("HUB ROOM LIST")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-20",staticStyle:{width:"32%"}},[e("q-separator",{attrs:{color:"orange-10"}}),e("q-separator",{attrs:{color:"orange-10"}})],1),e("div",{staticClass:"col"},[e("q-separator",{attrs:{color:"purple-10"}}),e("q-separator",{attrs:{color:"purple-10"}})],1)])],1),e("div",{staticStyle:{"max-width":"1200px"}},[e("q-card",[e("q-card-section",[e("q-expansion-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"SEARCH","header-class":"bg-indigo-2 text-indigo-10",icon:"search"}},[e("div",{staticClass:"row bg-orange-1",staticStyle:{padding:"10px",width:"100%"},attrs:{align:"left"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-20",staticStyle:{"margin-right":"10px"}},[e("q-input",{staticClass:"searchform",attrs:{"stack-label":"",label:"Hub Name",rounded:"",outlined:"",color:"orange-8"},model:{value:t.searchVal.hubName,callback:function(o){t.$set(t.searchVal,"hubName",o)},expression:"searchVal.hubName"}})],1),e("div",{staticClass:"col",staticStyle:{width:"5%"}},[e("q-btn",{attrs:{round:"",size:"small",color:"indigo-10"},on:{click:function(o){return t.doSearchByFilter()}}},[e("q-icon",{attrs:{name:"search"}}),e("q-tooltip",[t._v("Search")])],1)],1)])])]),e("q-table",{attrs:{data:t.dataList,columns:t.tableColumns,pagination:t.pagination,"table-header-class":"text-indigo-10 bg-indigo-2","row-key":"id",dense:""},on:{"update:pagination":function(o){t.pagination=o},request:t.doMainEquipmentChangePage},scopedSlots:t._u([{key:"body-cell-address",fn:function(o){return e("q-td",{style:{width:"500px",whiteSpace:"normal"}},[t._v("\n            "+t._s(o.row.address)+"\n          ")])}},{key:"body-cell-recordStatus",fn:function(t){return e("q-td",{},["A"===t.row.recordStatus?e("div",[e("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"done",color:"primary"}})],1):e("div",[e("q-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"clear",color:"negative"}})],1)])}},{key:"body-cell-action",fn:function(o){return e("q-td",{},[e("q-btn-dropdown",{attrs:{rounded:"",size:"sm",color:"indigo-10"}},[e("q-list",[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[e("q-btn",{attrs:{color:"indigo-6",round:"",size:"sm"},on:{click:function(e){return t.doOpenForm(o)}}},[e("q-icon",{attrs:{name:"fas fa-edit"}}),e("q-tooltip",[t._v("Edit")])],1)],1)],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",[e("q-btn",{attrs:{color:"indigo-6",round:"",size:"sm"},on:{click:function(e){return t.doToggleStatus(o)}}},[e("q-icon",{attrs:{name:"A"===o.row.recordStatus?"fas fa-stop-circle":"fas fa-play-circle"}}),e("q-tooltip",[t._v(t._s("A"===o.row.recordStatus?"Deactivate":"Activate"))])],1)],1)],1)],1)],1)],1)}}])})],1)],1)],1),e("q-page-sticky",{attrs:{position:"top-right",offset:[15,30]}},[e("q-fab",{attrs:{color:"orange-7",glossy:"",icon:"keyboard_arrow_down",direction:"down"}},[e("q-fab-action",{attrs:{color:"orange-6","text-color":"white",icon:"add"},nativeOn:{click:function(o){return t.doOpenForm()}}},[e("q-tooltip",[t._v("Add")])],1),e("q-fab-action",{attrs:{color:"orange-6","text-color":"white",icon:"backup"},nativeOn:{click:function(o){t.modalUploadExcel=!0}}},[e("q-tooltip",[t._v("Upload Excel")])],1),e("q-btn",{attrs:{round:"",color:"orange-6","text-color":"white"},nativeOn:{click:function(o){return t.downloadExcel(o)}}},[e("q-icon",{attrs:{name:"fas fa-file-excel"}}),e("q-tooltip",[t._v("Download Excel")])],1)],1)],1),e("q-dialog",{attrs:{persistent:""},on:{"before-hide":function(o){return t.doHideButton()}},model:{value:t.modalUploadExcel,callback:function(o){t.modalUploadExcel=o},expression:"modalUploadExcel"}},[e("q-card",{staticClass:"bg-white"},[e("q-bar",{staticClass:"bg-indigo-10 text-white"},[e("strong",[t._v("Upload Excel File")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}})],1),e("q-card-section",[e("a",{attrs:{href:"/statics/template/Hub Room - Form Upload.xlsx"}},[t._v("Download Template\n          "),e("q-tooltip",[t._v("Hub Room - Form Upload.xlsx")])],1)]),e("q-card-section",[e("q-input",{attrs:{type:"file"},on:{input:function(o){t.doAttachFile(o[0])}}}),e("div",{staticStyle:{"margin-top":"20px"},attrs:{align:"right"}},[e("q-btn",{attrs:{round:"",color:"orange-6"},on:{click:function(o){return t.uploadField()}}},[e("q-icon",{attrs:{name:"fas fa-file-upload"}}),e("q-tooltip",[t._v("Upload")])],1)],1)],1)],1)],1),e("q-dialog",{attrs:{persistent:""},on:{"before-hide":function(o){return t.clear()}},model:{value:t.showForm,callback:function(o){t.showForm=o},expression:"showForm"}},[e("q-card",{staticClass:"bg-white",staticStyle:{width:"500px"}},[e("q-bar",{staticClass:"bg-indigo-10 text-white"},[e("strong",[t._v("Hub Room Form")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}})],1),e("q-card-section",[e("q-input",{staticClass:"text-italic",attrs:{readonly:"","stack-label":"",label:"Hub Room Id"},model:{value:t.formData.hubRoomId,callback:function(o){t.$set(t.formData,"hubRoomId",o)},expression:"formData.hubRoomId"}}),e("q-input",{attrs:{"stack-label":"",label:"Hub Room Code"},model:{value:t.formData.hubCodeRoom,callback:function(o){t.$set(t.formData,"hubCodeRoom",o)},expression:"formData.hubCodeRoom"}}),e("q-input",{attrs:{"stack-label":"",label:"Room"},model:{value:t.formData.room,callback:function(o){t.$set(t.formData,"room",o)},expression:"formData.room"}}),e("q-input",{attrs:{"stack-label":"",label:"Floor"},model:{value:t.formData.floor,callback:function(o){t.$set(t.formData,"floor",o)},expression:"formData.floor"}}),e("q-input",{attrs:{"stack-label":"",label:"Hub Name"},model:{value:t.formData.hubName,callback:function(o){t.$set(t.formData,"hubName",o)},expression:"formData.hubName"}}),e("div",{staticStyle:{"text-align":"right","margin-top":"20px"}},[e("q-btn",{attrs:{round:"",color:"orange-4",size:"small"},nativeOn:{click:function(o){return t.doSave()}}},[e("q-icon",{attrs:{name:"fas fa-save"}}),e("q-tooltip",[t._v("Submit")])],1)],1)],1)],1)],1)],1)},i=[],n=(e("7f7f"),e("3a5f")),s={mixins:[n["a"]],data:function(){return{dataList:[],areaList:[],regionList:[],filteredRegionList:[],listOfRegion:[],listOfAreaForRegion:[],modalUploadExcel:!1,fileAttach:{fileName:"",file64:"",equipmentCategory:"Network"},tableColumns:[{name:"hubRoomId",label:"Hub Room Id ",field:"hubRoomId",align:"left",style:"width: 100px",sortable:!0},{name:"hubCodeRoom",label:"Hub Room Code ",field:"hubCodeRoom",align:"left",style:"width: 100px",sortable:!0},{name:"room",label:"Room",field:"room",align:"left",style:"width: 200px",sortable:!0},{name:"floor",label:"Floor",field:"floor",align:"left",style:"width: 200px",sortable:!0},{name:"hubName",label:"Hub Name",field:"hubName",align:"left",style:"width: 200px",sortable:!0},{name:"recordStatus",label:"Status",field:"recordStatus",align:"left",sortable:!0},{name:"action",label:"Action",align:"center",style:"width: 100px"}],regionColumns:[{name:"id",label:"Region Id",field:"id",align:"left",style:"width: 100px",sortable:!0},{name:"regioName",label:"Region Name",field:"regioName",align:"left",style:"width: 200px",sortable:!0},{name:"action",label:"Action",align:"center",style:"width: 100px"}],pagination:{sortBy:"hubCodeRoom",descending:!1,page:1,rowsPerPage:10,rowsNumber:0},regionPagination:{sortBy:"region",descending:!1,rowsPerPage:0},searchVal:{hubName:"",area:""},showForm:!1,formData:{hubRoomId:"AUTO GENERATE",hubCodeRoom:"",hubName:"",floor:"",room:""}}},methods:{doInitPage:function(){var t=this;this.showLoading(),this.$axios.get("".concat("/","getHubRoomInitPage"),{params:{pageIndex:this.pagination.page-1,pageSize:this.pagination.rowsPerPage,sortBy:this.pagination.sortBy,descending:this.pagination.descending}}).then((function(o){t.$q.loading.hide(),t.doMainFillTableResult(o.data)})).catch((function(o){t.$q.loading.hide(),t.$q.notify({color:"negative",icon:"report_problem",message:o})}))},getHubRoomList:function(t){var o=this;this.showLoading(),this.$axios.get("".concat("/","getHubRoomList"),{params:t}).then((function(t){o.$q.loading.hide(),o.doMainFillTableResult(t.data)})).catch((function(t){o.$q.loading.hide(),o.$q.notify({color:"negative",icon:"report_problem",message:t})}))},doMainFillTableResult:function(t){this.dataList=t.content,this.pagination.rowsNumber=t.totalElements,this.pagination.rowsPerPage=t.pageable.pageSize,this.pagination.page=t.number+1},doMainEquipmentChangePage:function(t){var o=t.pagination,e=o.page,a=o.rowsPerPage,i=o.sortBy,n=o.descending,s={pageIndex:e-1,pageSize:a,sortBy:i,descending:n,hubName:this.searchVal.hubName};this.getHubRoomList(s)},doSearchByFilter:function(){var t={pageIndex:this.pagination.page-1,pageSize:this.pagination.rowsPerPage,sortBy:this.pagination.sortBy,descending:this.pagination.descending,hubName:this.searchVal.hubName};this.getHubRoomList(t)},doOpenForm:function(t){void 0!==t?(this.formData=JSON.parse(JSON.stringify(t.row)),this.vDisable=!0):(this.clear(),this.vDisable=!1),this.showForm=!0},doSave:function(){var t=this;this.showLoading(),"AUTO GENERATE"===this.formData.hubRoomId&&(this.formData.hubRoomId=""),this.$axios.post("".concat("/","saveHubRoom"),this.formData).then((function(o){t.$q.loading.hide(),t.$q.notify({color:"positive",icon:"info",message:"Record successfully saved"}),t.showForm=!1,t.doRefresh()})).catch((function(o){t.$q.loading.hide(),t.$q.notify({color:"negative",icon:"report_problem",message:o}),t.showForm=!1,t.doRefresh()}))},doToggleStatus:function(t){t.row.recordStatus="I"===t.row.recordStatus?"A":"I",this.formData=t.row,this.doSave()},getRegion:function(){var t=this;this.formData.areaName=this.formData.areaName.value;var o=this.listOfAreaForRegion.filter((function(o){return o.areaName.indexOf(t.formData.areaName)>-1}))[0].region;if(null!==o){var e=JSON.parse(o);this.filteredRegionList=e.map((function(t){return{label:t.region.toUpperCase(),value:t.region.toUpperCase()}}))}else this.filteredRegionList=[],this.formData.region=""},doRegion:function(){this.formData.regionName=this.formData.regionName.value},doAttachFile:function(t){var o=this,e=new FileReader;this.uploadButton=!0,e.onload=function(e){o.fileAttach.fileName=t.name,o.fileAttach.file64=e.target.result},e.readAsDataURL(t)},uploadField:function(t){var o=this;this.showLoading(),this.$axios.post("".concat("/","uploadHubRoom"),this.fileAttach).then((function(t){o.modalUploadExcel=!1,o.$q.loading.hide(),o.doRefresh()})).catch((function(t){o.$q.loading.hide(),o.$q.notify({color:"negative",icon:"report_problem",message:t})}))},downloadExcel:function(t){var o=this;this.showLoading(),this.$axios.get("".concat("/","hubRoomExcelDownload"),{responseType:"arraybuffer",params:{searchVal:this.searchVal}}).then((function(t){o.$q.loading.hide();var e=window.URL.createObjectURL(new Blob([t.data]),{type:""}),a=document.createElement("a");a.href=e,a.style="display: none",a.download="master_hub_room.xlsx",document.body.appendChild(a),a.click()})).catch((function(t){o.$q.loading.hide(),o.notify({color:"negative",icon:"report_problem",message:t})}))},doRefresh:function(){this.clear(),this.doInitPage()},clear:function(){this.formData={hubRoomId:"AUTO GENERATE",hubCodeRoom:"",hubName:"",floor:"",room:""},this.vDisable=!1}},beforeMount:function(){this.doInitPage()}},r=s,l=(e("cdef"),e("2877")),c=Object(l["a"])(r,a,i,!1,null,null,null);o["default"]=c.exports},"343b":function(t,o,e){},"3a5f":function(t,o,e){"use strict";var a=e("8380");o["a"]={methods:{showLoading:function(){this.$q.loading.show({spinner:a["a"],spinnerColor:"orange-10",spinnerSize:140,backgroundColor:"purple",messageColor:"black"})},showCheckingLoading:function(){this.$q.loading.show({spinner:a["a"],message:"Checking Excel Data...",spinnerColor:"orange-10",spinnerSize:60,backgroundColor:"purple",messageColor:"white",messageSize:60})},showUploadLoading:function(){this.$q.loading.show({spinner:a["a"],message:"Uploading Excel Data...",spinnerColor:"orange-10",spinnerSize:60,backgroundColor:"purple",messageColor:"white",messageSize:60})}}}},cdef:function(t,o,e){"use strict";var a=e("343b"),i=e.n(a);i.a}}]);