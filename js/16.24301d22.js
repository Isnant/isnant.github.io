(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"2b14":function(e,a,t){},"3a5f":function(e,a,t){"use strict";var o=t("8380");a["a"]={methods:{showLoading:function(){this.$q.loading.show({spinner:o["a"],spinnerColor:"orange-10",spinnerSize:140,backgroundColor:"purple",messageColor:"black"})},showCheckingLoading:function(){this.$q.loading.show({spinner:o["a"],message:"Checking Excel Data...",spinnerColor:"orange-10",spinnerSize:60,backgroundColor:"purple",messageColor:"white",messageSize:60})},showUploadLoading:function(){this.$q.loading.show({spinner:o["a"],message:"Uploading Excel Data...",spinnerColor:"orange-10",spinnerSize:60,backgroundColor:"purple",messageColor:"white",messageSize:60})}}}},"654b":function(e,a,t){"use strict";var o=t("2b14"),i=t.n(o);i.a},e5fe:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",[t("font",{staticClass:"text-bold",attrs:{size:"1",color:"grey"}},[e._v("MASTER DATA "),t("q-icon",{attrs:{name:"double_arrow"}}),e._v(" MASTER POWER SUPPLY")],1),t("div",{staticStyle:{"margin-bottom":"30px","margin-top":"10px",width:"280px"},attrs:{align:"left"}},[t("font",{staticClass:"text-bold",staticStyle:{"margin-bottom":"10px"},attrs:{size:"5"}},[e._v("MASTER POWER SUPPLY")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-20",staticStyle:{width:"32%"}},[t("q-separator",{attrs:{color:"orange-10"}}),t("q-separator",{attrs:{color:"orange-10"}})],1),t("div",{staticClass:"col"},[t("q-separator",{attrs:{color:"purple-10"}}),t("q-separator",{attrs:{color:"purple-10"}})],1)])],1),t("q-card",[t("q-card-section",[t("q-expansion-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"SEARCH","header-class":"bg-indigo-2 text-indigo-10",icon:"search"}},[t("div",{staticClass:"row bg-orange-1",staticStyle:{padding:"10px",width:"100%"},attrs:{align:"left"}},[t("div",{staticClass:"col-15",staticStyle:{"margin-right":"10px",width:"22%"}},[t("q-select",{staticClass:"searchform",attrs:{"stack-label":"",label:"HUB NAME",rounded:"",outlined:"",color:"orange-8",options:e.hubCodeList},on:{input:function(a){return e.getValueSelect()}},model:{value:e.searchVal.hubCode,callback:function(a){e.$set(e.searchVal,"hubCode",a)},expression:"searchVal.hubCode"}})],1),t("div",{staticClass:"col-15",staticStyle:{"margin-right":"10px",width:"22%"}},[t("q-input",{staticClass:"text-uppercase; searchform",attrs:{"stack-label":"",rounded:"",outlined:"",label:"PS Name",oninput:"this.value = this.value.toUpperCase()",color:"orange-8"},model:{value:e.searchVal.psCode,callback:function(a){e.$set(e.searchVal,"psCode",a)},expression:"searchVal.psCode"}})],1),t("div",{staticClass:"col",staticStyle:{width:"5%"}},[t("q-btn",{attrs:{round:"",color:"indigo-10"},on:{click:function(a){return e.doSearchByFilter()}}},[t("q-icon",{attrs:{name:"search"}}),t("q-tooltip",[e._v("Search")])],1)],1)])]),t("q-table",{attrs:{data:e.dataList,columns:e.tableColumns,pagination:e.pagination,"table-header-class":"bg-indigo-2 text-indigo-10","rows-per-page-options":[10,20,50,100],"row-key":"id",dense:""},on:{"update:pagination":function(a){e.pagination=a},request:e.doMainEquipmentChangePage},scopedSlots:e._u([{key:"body-cell-action",fn:function(a){return t("q-td",{attrs:{align:"center"}},[t("q-btn-dropdown",{attrs:{rounded:"",size:"sm",color:"indigo-10"}},[t("q-list",[t("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[t("q-item-section",[t("q-btn",{attrs:{color:"indigo-6",round:"",size:"sm"},on:{click:function(t){return e.doOpenForm(a)}}},[t("q-icon",{attrs:{name:"fas fa-edit"}}),t("q-tooltip",[e._v("Detail")])],1)],1)],1)],1)],1)],1)}}])})],1)],1),t("q-page-sticky",{attrs:{position:"top-right",offset:[15,30]}},[t("q-btn",{attrs:{round:"",color:"orange-6","text-color":"white"},nativeOn:{click:function(a){return e.downloadExcel(a)}}},[t("q-icon",{attrs:{name:"fas fa-file-excel"}}),t("q-tooltip",[e._v("Download Excel")])],1)],1),t("q-dialog",{attrs:{persistent:""},model:{value:e.showForm,callback:function(a){e.showForm=a},expression:"showForm"}},[t("q-card",{staticClass:"bg-white"},[t("q-bar",{staticClass:"bg-indigo-10 text-white"},[t("strong",[e._v("Power Supply Detail")]),t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}})],1),t("q-card-section",[t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("q-input",{attrs:{readonly:"","stack-label":"",label:"PS Name"},model:{value:e.formData.equipmentName,callback:function(a){e.$set(e.formData,"equipmentName",a)},expression:"formData.equipmentName"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"IT Code"},model:{value:e.formData.itCode,callback:function(a){e.$set(e.formData,"itCode",a)},expression:"formData.itCode"}}),t("q-input",{staticStyle:{"max-height":"112px"},attrs:{readonly:"","stack-label":"",label:"Description",type:"textarea"},model:{value:e.formData.description,callback:function(a){e.$set(e.formData,"description",a)},expression:"formData.description"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Hub Code"},model:{value:e.formData.hubCode,callback:function(a){e.$set(e.formData,"hubCode",a)},expression:"formData.hubCode"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Homepassed"},model:{value:e.formData.homepassed,callback:function(a){e.$set(e.formData,"homepassed",a)},expression:"formData.homepassed"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Building Name"},model:{value:e.formData.buildingName,callback:function(a){e.$set(e.formData,"buildingName",a)},expression:"formData.buildingName"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Tower"},model:{value:e.formData.tower,callback:function(a){e.$set(e.formData,"tower",a)},expression:"formData.tower"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Floor"},model:{value:e.formData.floor,callback:function(a){e.$set(e.formData,"floor",a)},expression:"formData.floor"}})],1),t("div",{staticClass:"col",staticStyle:{"margin-left":"20px"}},[t("q-input",{attrs:{readonly:"","stack-label":"",label:"Complex Name"},model:{value:e.formData.complexName,callback:function(a){e.$set(e.formData,"complexName",a)},expression:"formData.complexName"}}),t("q-input",{staticStyle:{"max-height":"112px"},attrs:{readonly:"","stack-label":"",label:"Street Name",type:"textarea"},model:{value:e.formData.streetName,callback:function(a){e.$set(e.formData,"streetName",a)},expression:"formData.streetName"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Street Number"},model:{value:e.formData.streetNumber,callback:function(a){e.$set(e.formData,"streetNumber",a)},expression:"formData.streetNumber"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"District"},model:{value:e.formData.kelurahan,callback:function(a){e.$set(e.formData,"kelurahan",a)},expression:"formData.kelurahan"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Postal Code"},model:{value:e.formData.postalCode,callback:function(a){e.$set(e.formData,"postalCode",a)},expression:"formData.postalCode"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Direction"},model:{value:e.formData.direction,callback:function(a){e.$set(e.formData,"direction",a)},expression:"formData.direction"}}),t("q-input",{attrs:{readonly:"","stack-label":"",label:"Remarks"},model:{value:e.formData.remarks,callback:function(a){e.$set(e.formData,"remarks",a)},expression:"formData.remarks"}})],1)])])],1)],1)],1)},i=[],s=t("3a5f"),n={mixins:[s["a"]],data:function(){return{dataList:[],areaList:[],regionList:[],filteredRegionList:[],listOfRegion:[],listOfAreaForRegion:[],tableColumns:[{name:"equipmentName",label:"PS Name",field:"equipmentName",align:"left",style:"width: 100px",sortable:!0},{name:"description",label:"Description",field:"description",align:"left",style:"width: 200px",sortable:!0},{name:"itCode",label:"IT Code",field:"itCode",align:"left",style:"width: 200px",sortable:!0},{name:"psCode",label:"Power Supply Code",field:"psCode",align:"left",style:"width: 200px",sortable:!0},{name:"hubCode",label:"Hub Code",field:"hubCode",align:"left",style:"width: 200px",sortable:!0},{name:"nodeCode",label:"Node Code",field:"nodeCode",align:"left",style:"width: 200px",sortable:!0},{name:"action",label:"Action",align:"center"}],pagination:{sortBy:"id",descending:!1,page:1,rowsPerPage:10,rowsNumber:0},regionPagination:{sortBy:"region",descending:!1,rowsPerPage:0},searchVal:{hubCode:"All",psCode:""},showForm:!1,formData:{pid:"",fidRegion:"",buildingType:"",buildingName:"",itCode:"",area:"",region:"",city:"",locationName:"",complexName:"",streetName:"",streetNumber:"",postalCode:"",phone:"",fax:""}}},methods:{doInitPage:function(){var e=this;this.showLoading(),this.$axios.get("".concat("/","getPowerSupplyInitPage"),{params:{pageIndex:this.pagination.page-1,pageSize:this.pagination.rowsPerPage,sortBy:this.pagination.sortBy,descending:this.pagination.descending,hubCode:this.searchVal.hubCode,psCode:this.searchVal.psCode}}).then((function(a){e.$q.loading.hide(),e.doMainFillTableResult(a.data.listOfNode),e.hubCodeList=a.data.listOfHub})).catch((function(a){e.$q.loading.hide(),e.$q.notify({color:"negative",icon:"report_problem",message:a})}))},getAmplifierList:function(e){var a=this;this.showLoading(),this.$axios.get("".concat("/","getPowerSupplyList"),{params:e}).then((function(e){a.$q.loading.hide(),a.doMainFillTableResult(e.data)})).catch((function(e){a.$q.loading.hide(),a.$q.notify({color:"negative",icon:"report_problem",message:e})}))},doMainFillTableResult:function(e){this.dataList=e.content,this.pagination.rowsNumber=e.totalElements,this.pagination.rowsPerPage=e.pageable.pageSize,this.pagination.page=e.number+1},doMainEquipmentChangePage:function(e){var a=e.pagination,t=a.page,o=a.rowsPerPage,i=a.sortBy,s=a.descending,n={pageIndex:t-1,pageSize:o,sortBy:i,descending:s,hubCode:this.searchVal.hubCode,psCode:this.searchVal.psCode};this.getAmplifierList(n)},doSearchByFilter:function(){var e={pageIndex:this.pagination.page-1,pageSize:this.pagination.rowsPerPage,sortBy:this.pagination.sortBy,descending:this.pagination.descending,hubCode:this.searchVal.hubCode,psCode:this.searchVal.psCode};this.getAmplifierList(e)},getValueSelect:function(){this.searchVal.hubCode=this.searchVal.hubCode.value},doOpenForm:function(e){this.formData=JSON.parse(JSON.stringify(e.row)),this.showForm=!0},downloadExcel:function(e){var a=this;this.showLoading(),this.$axios.get("".concat("/","psExcelDownload"),{responseType:"arraybuffer",params:{hubCode:this.searchVal.hubCode,psCode:this.searchVal.psCode}}).then((function(e){a.$q.loading.hide();var t=window.URL.createObjectURL(new Blob([e.data]),{type:""}),o=document.createElement("a");o.href=t,o.style="display: none",o.download="ps_excel_download.xlsx",document.body.appendChild(o),o.click()})).catch((function(e){a.$q.loading.hide(),a.notify({color:"negative",icon:"report_problem",message:e})}))}},beforeMount:function(){this.doInitPage()}},l=n,r=(t("654b"),t("2877")),c=Object(r["a"])(l,o,i,!1,null,null,null);a["default"]=c.exports}}]);