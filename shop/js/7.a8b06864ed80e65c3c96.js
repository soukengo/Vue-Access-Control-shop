webpackJsonp([7],{"+4zN":function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.grid-content[data-v-340790fc] {\n  min-height: 36px;\n  background: #fff;\n  border: 1px solid #DCDFE6;\n  padding: 15px;\n  height: 613px;\n}\n.grid-content .grid_content_left_top[data-v-340790fc] {\n    margin-bottom: 10px;\n    border-bottom: 1px solid #DCDFE6;\n    height: 100px;\n}\n.grid-content .grid_content_left_top div[data-v-340790fc] {\n      height: 80px;\n      line-height: 80px;\n}\n.grid-content .grid_content_left_top i[data-v-340790fc] {\n      font-size: 36px;\n      color: #C0C4CC;\n}\n.grid-content .grid_content_left_top img[data-v-340790fc] {\n      width: 80px;\n}\n.grid-content .grid_content_left_main[data-v-340790fc] {\n    margin: 35px 0;\n}\n.grid-content .grid_content_left_main div[data-v-340790fc] {\n      height: 60px;\n      text-align: center;\n}\n.grid-content .grid_content_left_main div span[data-v-340790fc] {\n        color: #909399;\n}\n.grid-content .grid_content_left_main .grid_line[data-v-340790fc] {\n      border-left: solid 1px #DCDFE6;\n}\n.grid-content .grid_content_right_top p[data-v-340790fc] {\n    color: #909399;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.grid-content .grid_content_right_bottom a[data-v-340790fc] {\n    color: #333;\n}\n.grid-content .grid_content_right_bottom h3[data-v-340790fc] {\n    border-bottom: 1px solid #DCDFE6;\n    padding-bottom: 15px;\n}\n.grid-content .grid_content_right_bottom h3 i[data-v-340790fc] {\n      width: 10px;\n      height: 20px;\n      display: block;\n      background-color: #409EFF;\n      float: left;\n      margin: 2px 10px 0 0;\n}\n.grid-content .grid_content_right_bottom div[data-v-340790fc] {\n    line-height: 2.8;\n    font-size: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: 1px #DCDFE6 dashed;\n}\n.grid-content .grid_content_right_bottom .grid_content_right_bottom_gengduo[data-v-340790fc] {\n    border: none;\n    text-align: right;\n}\n.element_footer[data-v-340790fc] {\n  font-size: 14px;\n  text-align: center;\n  line-height: 60px;\n}\n",""])},AIdZ:function(t,n,e){t.exports=e.p+"shop/img/weixiner.3710c2a.jpg"},BB8f:function(t,n,e){"use strict";function i(t){e("mh/7")}Object.defineProperty(n,"__esModule",{value:!0});var o=(e("gyMJ"),e("Av7u"),e("yt7g")),a=e("S49b"),r=e("bGai"),c={components:{LineChart:r.c,EleHeader:r.a},data:function(){return{noticeList:[],lineChartData:{},lineChartSummaryData:{}}},computed:{activeIndex:function(){return this.$store.state.perMission.activeIndex}},methods:{getUsers:function(){var t=this,n={pageNum:"1",numPerPage:"7"};Object(a.K)(n).then(function(n){t.noticeList=n.data.noticeList})},format_amount:function(t){return o.i(t,2,".",",")},lineCharIndex:function(){var t=this,n=Date.now(),e={startTime:o.c(n-6048e5,"yyyy/MM/dd"),endTime:o.c(n-864e5,"yyyy/MM/dd")};Object(a._3)(e).then(function(n){t.lineChartSummaryData=n.data;var e=n.data.amtList;t.lineChartData={expectedData:e}})},logout:function(){this.$emit("logout")},login:function(t){this.$emit("login",t)}},mounted:function(){this.lineCharIndex(),this.getUsers()}},d=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("el-container",{staticStyle:{height:"100%"}},[i("el-header",{staticStyle:{background:"#fff",height:"auto"}},[i("EleHeader",{on:{login:t.login,logout:t.logout}})],1),t._v(" "),i("el-main",[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:18}},[i("div",{staticClass:"grid-content"},[i("div",{staticClass:"grid_content_left_top"},[i("el-row",[i("el-col",{attrs:{span:20}},[i("div",[i("i",{staticClass:"iconfont icon-tianjia"})])]),t._v(" "),i("el-col",{attrs:{span:4}},[i("el-popover",{ref:"popover",attrs:{placement:"bottom",width:"200",trigger:"hover"}},[i("div",[i("img",{attrs:{src:e("AIdZ"),alt:"二维码",width:"100%"}}),t._v(" "),i("p",{staticStyle:{"text-align":"center"}},[t._v("扫描二维码加入微信群\n                        "),i("br"),t._v("及时关注微信支付通知")])])]),t._v(" "),i("div",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}]},[i("img",{attrs:{src:e("AIdZ"),alt:"二维码"}})])],1)],1)],1),t._v(" "),i("el-alert",{attrs:{title:"本页面数据仅供经营状况参考，不代表账单信息，请勿用作对账",type:"warning",closable:!1,"show-icon":""}}),t._v(" "),i("div",{staticClass:"grid_content_left_main"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("div",[i("span",[t._v("最近一周销售金额(元)")]),t._v(" "),i("h2",[t._v(t._s(t.format_amount(t.lineChartSummaryData.sumAmt)))])])]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid_line"},[i("span",[t._v("最近一周销售笔数(笔)")]),t._v(" "),i("h2",[t._v(t._s(t.format_amount(t.lineChartSummaryData.sumTotal)))])])])],1)],1),t._v(" "),i("div",{staticClass:"grid_content_left_bottom"},[i("LineChart",{attrs:{"chart-data":t.lineChartData}})],1)],1)]),t._v(" "),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content"},[i("div",{staticClass:"grid_content_right_bottom"},[i("h3",[i("i"),t._v("平台公告")]),t._v(" "),t._l(t.noticeList,function(n){return i("div",{key:n.id},[i("router-link",{attrs:{to:{path:"/noticeDetails",query:{id:n.id}},target:"_blank"}},[i("span",[t._v(t._s(n.title))])])],1)}),t._v(" "),i("div",{staticClass:"grid_content_right_bottom_gengduo"},[i("router-link",{attrs:{to:{path:"/noticeList"},target:"_blank"}},[t._v("\n                  更多\n                ")])],1)],2)])])],1)],1),t._v(" "),i("el-footer",{staticClass:"element_footer"},[t._v("版权所有：西安万鼎网络科技有限公司 | ICP备 陕17002918号")])],1)],1)},s=[],l={render:d,staticRenderFns:s},_=l,g=e("VU/8"),p=i,v=g(c,_,!1,p,"data-v-340790fc",null);n.default=v.exports},"mh/7":function(t,n,e){var i=e("+4zN");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("1db665c2",i,!0,{})}});