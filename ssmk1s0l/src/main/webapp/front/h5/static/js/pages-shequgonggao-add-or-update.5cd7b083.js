(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shequgonggao-add-or-update"],{"11c2":function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-5c13257d]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},3410:function(e,i,t){"use strict";var r={"xia-editor":t("064f").default,"w-picker":t("e2b1").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20230301/28586bd575de4721a42223a6e1d4b118.png) fixed",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("标题")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.biaoti,placeholder:"标题"},model:{value:e.ruleForm.biaoti,callback:function(i){e.$set(e.ruleForm,"biaoti",i)},expression:"ruleForm.biaoti"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("公告类型")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.gonggaoleixingIndex,range:e.gonggaoleixingOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.gonggaoleixingChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"120rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.ruleForm.gonggaoleixing?e.ruleForm.gonggaoleixing:"请选择公告类型"))])],1)],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.fengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("封面")]),e.ruleForm.fengmian?t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("发布时间")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:e.ruleForm.fabushijian},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.fabushijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"120rpx",fontSize:"28rpx",color:"#666"}},[e._v(e._s(e.ruleForm.fabushijian?e.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("简介")]),t("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"40rpx 40rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"none",fontSize:"28rpx"},attrs:{placeholder:"简介"},model:{value:e.ruleForm.jianjie,callback:function(i){e.$set(e.ruleForm,"jianjie",i)},expression:"ruleForm.jianjie"}})],1),t("v-uni-view",{style:{padding:"0px 0",margin:"0 0 0px",borderColor:"#ccc",borderWidth:"0 0 0px 0",background:"#fff",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"100%",padding:" 0 0 0 32rpx",lineHeight:"80rpx",fontSize:"30rpx",color:"#333",fontWeight:"500"}},[e._v("内容")]),t("xia-editor",{ref:"editor",style:{minHeight:"300rpx",padding:"0px 32rpx 24rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#f7d3ba",borderRadius:"0px",color:"#666",background:"#fff",borderWidth:"0 0 6rpx",width:"100%",borderStyle:"solid",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.neirongChange.apply(void 0,arguments)}},model:{value:e.ruleForm.neirong,callback:function(i){e.$set(e.ruleForm,"neirong",i)},expression:"ruleForm.neirong"}})],1),t("v-uni-view",{staticClass:"btn",style:{padding:"0",margin:"60rpx 0 0 0",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"2rpx 8rpx 8rpx #ddd",margin:"0 40rpx 0 0",borderColor:"#fb9a40",color:"#333",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(23deg, rgba(255,255,255,1) 0%, rgba(247,211,186,1) 100%)",borderWidth:"0px 6rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))},"3af4":function(e,i,t){var r=t("11c2");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("b10e2b0e",r,!0,{sourceMap:!1,shadowMode:!1})},"3c4d":function(e,i,t){"use strict";t.r(i);var r=t("3410"),n=t("c941");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("d059");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"5c13257d",null,!1,r["a"],o);i["default"]=u.exports},c941:function(e,i,t){"use strict";t.r(i);var r=t("f570"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},d059:function(e,i,t){"use strict";var r=t("3af4"),n=t.n(r);n.a},f570:function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),o=r(t("064f")),s=r(t("bd56")),u={data:function(){return{cross:"",ruleForm:{biaoti:"",gonggaoleixing:"",fengmian:"",jianjie:"",neirong:"",fabushijian:""},gonggaoleixingOptions:[],gonggaoleixingIndex:0,user:{},ro:{biaoti:!1,gonggaoleixing:!1,fengmian:!1,jianjie:!1,neirong:!1,fabushijian:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.option("gonggaoleixing","gonggaoleixing",{});case 8:if(r=e.sent,this.gonggaoleixingOptions=r.data,this.gonggaoleixingOptions.unshift("请选择公告类型"),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=19;break}return this.ruleForm.id=i.id,e.next=17,this.$api.info("shequgonggao",this.ruleForm.id);case 17:r=e.sent,this.ruleForm=r.data;case 19:if(this.cross=i.cross,!i.cross){e.next=59;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 23:if((e.t1=e.t0()).done){e.next=59;break}if(a=e.t1.value,"biaoti"!=a){e.next=29;break}return this.ruleForm.biaoti=n[a],this.ro.biaoti=!0,e.abrupt("continue",23);case 29:if("gonggaoleixing"!=a){e.next=33;break}return this.ruleForm.gonggaoleixing=n[a],this.ro.gonggaoleixing=!0,e.abrupt("continue",23);case 33:if("fengmian"!=a){e.next=37;break}return this.ruleForm.fengmian=n[a].split(",")[0],this.ro.fengmian=!0,e.abrupt("continue",23);case 37:if("jianjie"!=a){e.next=41;break}return this.ruleForm.jianjie=n[a],this.ro.jianjie=!0,e.abrupt("continue",23);case 41:if("neirong"!=a){e.next=45;break}return this.ruleForm.neirong=n[a],this.ro.neirong=!0,e.abrupt("continue",23);case 45:if("fabushijian"!=a){e.next=49;break}return this.ruleForm.fabushijian=n[a],this.ro.fabushijian=!0,e.abrupt("continue",23);case 49:if("clicktime"!=a){e.next=53;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,e.abrupt("continue",23);case 53:if("clicknum"!=a){e.next=57;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",23);case 57:e.next=23;break;case 59:this.styleChange(),this.$forceUpdate();case 61:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{neirongChange:function(e){this.ruleForm.neirong=e},styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},gonggaoleixingChange:function(e){this.gonggaoleixingIndex=e.target.value,this.ruleForm.gonggaoleixing=this.gonggaoleixingOptions[this.gonggaoleixingIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.fengmian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,r,n,a,o,s,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.biaoti){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.gonggaoleixing){e.next=6;break}return this.$utils.msg("公告类型不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=9;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 9:if(!this.cross){e.next=26;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=26;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=22;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=20,this.$api.update("".concat(u),i);case 20:e.next=26;break;case 22:t=Number(uni.getStorageSync("userid")),r=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 26:if(!r||!t){e.next=49;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=32,this.$api.list("shequgonggao",l);case 32:if(d=e.sent,!(d.data.total>=n)){e.next=39;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 39:if(!this.ruleForm.id){e.next=44;break}return e.next=42,this.$api.update("shequgonggao",this.ruleForm);case 42:e.next=46;break;case 44:return e.next=46,this.$api.add("shequgonggao",this.ruleForm);case 46:this.$utils.msgBack("提交成功");case 47:e.next=57;break;case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("shequgonggao",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("shequgonggao",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};i.default=u}}]);