webpackJsonp([46],{z89q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),i=a.n(r),o=a("yt7g"),s=function(e,t,a){""===t?a(new Error("请输入退款金额")):/^(([1-9][0-9]*)|([0]\.[1-9]{1})|([0]\.[1-9][0-9]{1})|([0]\.[0-9][1-9]{1})|([1-9][0-9]*\.\d{0,2}))$/.test(t)?a():a(new Error("请输入正确的退款金额"))},l=a("KpZF"),n=a("S49b"),m={data:function(){var e=this,t=new Date;return{optionsScene:l.c,optionsState:[{valueState:"1",labelState:"已支付"},{valueState:"3",labelState:"已支付（有退款）"},{valueState:"5",labelState:"未知"}],optionsStore:[],pickerOptions1:{disabledDate:function(e){new Date;return e.getTime()>Date.now()||e.getTime()<Date.now()-3024e6}},pickerOptions2:{disabledDate:function(t){var a=Date.parse(new Date(o.f.format(new Date(e.filters.startTime),"yyyy-MM-dd hh:mm:ss")));if(t.getTime()<a||t.getTime()>Date.now())return!0}},loading:!1,filters:{startTime:new Date(t.getFullYear(),t.getMonth(),t.getDate()),endTime:new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59),play:"",state:"",parag:""},whole:{sumAmt:"",countRow:""},total:0,page:1,users:[],listLoading:!1,advancedOptions:!1,editFormVisible:!1,editLoading:!1,editForm:{},refundFormVisible:!1,refundLoading:!1,refundForm:{},refundFormRules:{amount:[{required:!0,validator:s,trigger:"blur"},{max:10,message:"请输入正确的退款金额",trigger:"blur"}]}}},methods:{formatPay2:function(e,t){return 1==e.status?"已支付":3==e.status?"已支付（有退款）":"未知"},formatPay1:function(e){return o.h(e)},format_payWay:function(e,t){return o.h(e.payWay)},format_payTime:function(e){return o.f.format(new Date(e),"yyyy-MM-dd hh:mm:ss")},format_amount:function(e,t){return o.i(e.goodsPrice,2,".",",")},clickShop:function(){var e=this;Object(n._48)().then(function(t){var a=(t.status,t.data);e.optionsStore=a.storeList})},remoteShop:function(e){var t=this;""!==e?(this.loading=!0,setTimeout(function(){t.loading=!1,Object(n._48)({sname:e}).then(function(e){var a=(e.status,e.data);t.optionsStore=a.storeList})},200)):this.optionsStore=[]},Print:function(){var e=this;Object(n._50)({orderId:this.editForm.orderId}).then(function(t){var a=t.status,r=t.message;200===a&&e.$message({message:r,type:"success"})})},handleCurrentChange:function(e){this.page=e,this.getList()},getList:function(){var e=this;this.listLoading=!0;var t={pageNum:this.page,payWay:this.filters.play,status:this.filters.state,storeId:String(this.filters.parag),startTime:this.filters.startTime,endTime:this.filters.endTime};t.startTime=t.startTime&&""!=t.startTime?String(Date.parse(o.f.format(new Date(t.startTime),"yyyy/MM/dd hh:mm:ss"))):"",t.endTime=t.endTime&&""!=t.endTime?String(Date.parse(o.f.format(new Date(t.endTime),"yyyy/MM/dd hh:mm:ss"))):"",Object(n.Q)(t).then(function(t){t.data,t.message;200==t.status&&(e.total=t.data.totalCount,e.whole.countRow=t.data.countRow,e.whole.sumAmt=t.data.sumAmt,e.whole.memAmt=t.data.memAmt,e.whole.memCount=t.data.memCount,e.users=t.data.summaryCopyList),e.listLoading=!1})},getUsers:function(){this.page=1,this.getList()},handleRefund:function(e,t){this.refundFormVisible=!0,this.refundForm=i()({},t)},refundSubmit:function(){var e=this;this.$refs.refundForm.validate(function(t){t&&e.$confirm("是否确定退款？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={authCode:e.refundForm.orderId,amount:e.refundForm.amount,desc:e.refundForm.desc};Object(n._4)(t).then(function(t){var a=t.status,r=t.message;200===a&&(e.getUsers(),e.$message({type:"success",message:r}))}),e.refundFormVisible=!1}).catch(function(){e.refundFormVisible=!1,e.$message({type:"info",message:"已取消退款"})})})},handleDetail:function(e,t){var a=this;this.editFormVisible=!0,Object(n._29)({id:t.id}).then(function(e){200===e.status&&(a.editForm=e.data.order)})},resetForm:function(e){this.$refs[e].resetFields()}},mounted:function(){var e=this;this.getUsers(),Object(n._0)().then(function(t){var a=t.status;t.message;200==a&&(e.optionsStore=t.data.storeList)})}},u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-row",[a("el-form",{attrs:{inline:!0,model:e.whole}},[a("el-tag",{staticStyle:{margin:"10px 10px 20px 0"},attrs:{type:"primary"}},[e._v("交易总金额（元）："+e._s(e.whole.sumAmt)+"元")]),e._v(" "),a("el-tag",{staticStyle:{margin:"10px 10px 20px 0"},attrs:{type:"primary"}},[e._v("交易总笔数（笔）："+e._s(e.whole.countRow)+"笔")]),e._v(" "),a("el-tag",{staticStyle:{margin:"10px 10px 20px 0"},attrs:{type:"primary"}},[e._v("会员卡消费总金额（元）："+e._s(e.whole.memAmt)+"元")]),e._v(" "),a("el-tag",{attrs:{type:"primary"}},[e._v("会员卡消费总笔数（笔）："+e._s(e.whole.memCount)+"笔")])],1)],1),e._v(" "),a("el-form",{ref:"filters",attrs:{inline:!0,model:e.filters}},[a("el-row",[a("el-form-item",{attrs:{prop:"startTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择开始日期","picker-options":e.pickerOptions1,clearable:!1,editable:!1},model:{value:e.filters.startTime,callback:function(t){e.$set(e.filters,"startTime",t)},expression:"filters.startTime"}})],1),e._v(" "),a("el-form-item",[e._v("至")]),e._v(" "),a("el-form-item",{attrs:{prop:"endTime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择结束日期","picker-options":e.pickerOptions2,clearable:!1,editable:!1},model:{value:e.filters.endTime,callback:function(t){e.$set(e.filters,"endTime",t)},expression:"filters.endTime"}})],1)],1),e._v(" "),a("el-row",[a("el-form-item",{attrs:{prop:"parag"}},[a("el-select",{attrs:{placeholder:"门店名称",multiple:!1,filterable:"",remote:"","remote-method":e.remoteShop,loading:e.loading,clearable:""},on:{"visible-change":e.clickShop},model:{value:e.filters.parag,callback:function(t){e.$set(e.filters,"parag",t)},expression:"filters.parag"}},e._l(e.optionsStore,function(e){return a("el-option",{key:e.id,attrs:{value:e.id,label:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{prop:"play"}},[a("el-select",{attrs:{clearable:"",placeholder:"支付方式"},model:{value:e.filters.play,callback:function(t){e.$set(e.filters,"play",t)},expression:"filters.play"}},e._l(e.optionsScene,function(e){return a("el-option",{key:e.valueScene,attrs:{label:e.labelScene,value:e.valueScene}})}))],1),e._v(" "),a("el-form-item",{attrs:{prop:"state"}},[a("el-select",{attrs:{clearable:"",placeholder:"支付状态"},model:{value:e.filters.state,callback:function(t){e.$set(e.filters,"state",t)},expression:"filters.state"}},e._l(e.optionsState,function(e){return a("el-option",{key:e.valueState,attrs:{label:e.labelState,value:e.valueState}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",size:"medium",round:""},on:{click:e.getUsers}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"medium",round:""},on:{click:function(t){e.resetForm("filters")}}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",[a("el-alert",{attrs:{title:"可查询最近30天的交易",type:"warning",center:"","close-text":"知道了","show-icon":""}})],1)],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}]},[a("el-table",{attrs:{data:e.users,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"payTime",label:"付款时间","min-width":"165"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderId",label:"订单号","min-width":"285"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsPrice",label:"交易金额",width:"120",formatter:e.format_amount}}),e._v(" "),a("el-table-column",{attrs:{prop:"payWay",label:"支付方式",width:"120",formatter:e.format_payWay}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"交易状态",width:"150",formatter:e.formatPay2}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeName",label:"收款门店",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.handleDetail(t.$index,t.row)}}},[e._v("订单详情")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleRefund(t.$index,t.row)}}},[e._v("退款")])]}}])})],1)],1),e._v(" "),a("el-row",[a("el-pagination",{staticStyle:{"text-align":"center",background:"#fff",padding:"15px"},attrs:{layout:"prev, pager, next","current-page":e.page,"page-size":20,total:e.total,background:""},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"交易详情",visible:e.editFormVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"editForm",staticClass:"table-expand",attrs:{model:e.editForm,"label-width":"140px","label-position":"left"}},[a("el-form-item",{attrs:{label:"订单号："}},[a("span",[e._v(e._s(e.editForm.orderId))])]),e._v(" "),a("el-form-item",{attrs:{label:"第三方订单号："}},[a("span",[e._v(e._s(e.editForm.transactionId))])]),e._v(" "),a("el-form-item",{attrs:{label:"交易金额（元）："}},[a("span",[e._v(e._s(e.editForm.goodsPrice))])]),e._v(" "),a("el-form-item",{attrs:{label:"付款时间："}},[a("span",[e._v(e._s(e.format_payTime(e.editForm.payTime)))])]),e._v(" "),a("el-form-item",{attrs:{label:"交易状态："}},[a("span",[e._v(e._s("1"===e.editForm.status?"已支付":"3"===e.editForm.status?"已支付（有退款）":"未知"))])]),e._v(" "),a("el-form-item",{attrs:{label:"退款金额（元）："}},[a("span",[e._v(e._s(e.editForm.refundAmount))])]),e._v(" "),a("el-form-item",{attrs:{label:"收款门店："}},[a("span",[e._v(e._s(e.editForm.storeName))])]),e._v(" "),a("el-form-item",{attrs:{label:"款台："}},[a("span",[e._v(e._s(e.editForm.username))])]),e._v(" "),a("el-form-item",{attrs:{label:"支付方式："}},[a("span",[e._v(e._s(e.formatPay1(e.editForm.payWay)))])]),e._v(" "),a("el-form-item",{attrs:{label:"备注："}},[a("span",[e._v(e._s(e.editForm.goodsDesc))])]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"45%"},attrs:{type:"primary"},on:{click:e.Print}},[e._v("补发打印")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"退款",visible:e.refundFormVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.refundFormVisible=t}}},[a("el-form",{ref:"refundForm",attrs:{model:e.refundForm,rules:e.refundFormRules}},[a("el-form-item",{attrs:{label:"订单号："}},[a("span",[e._v(e._s(e.refundForm.orderId))])]),e._v(" "),a("el-form-item",{attrs:{label:"第三方订单号："}},[a("span",[e._v(e._s(e.refundForm.transactionId))])]),e._v(" "),a("el-form-item",{attrs:{label:"退款金额",prop:"amount"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入退款金额"},model:{value:e.refundForm.amount,callback:function(t){e.$set(e.refundForm,"amount",t)},expression:"refundForm.amount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.refundForm.desc,callback:function(t){e.$set(e.refundForm,"desc",t)},expression:"refundForm.desc"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.refundFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.refundLoading},nativeOn:{click:function(t){return e.refundSubmit(t)}}},[e._v("提交")])],1)],1)],1)},d=[],c={render:u,staticRenderFns:d},f=c,p=a("VU/8"),v=p(m,f,!1,null,null,null);t.default=v.exports}});