(function(t){function e(e){for(var a,r,o=e[0],d=e[1],c=e[2],l=0,p=[];l<o.length;l++)r=o[l],n[r]&&p.push(n[r][0]),n[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var d=s[r];0!==n[d]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1383eeaa"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=r(t),i=function(e){d.onerror=d.onload=null,clearTimeout(c);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,s[1](r)}n[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:d})},12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"145d":function(t,e,s){},"3c0a":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},c2fb:function(t,e,s){t.exports=s.p+"img/logo_transparent.b8beff53.png"},c39b:function(t,e,s){"use strict";var a=s("3c0a"),n=s.n(a);n.a},cb43:function(t,e,s){},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:s("c2fb"),width:"200px"}})])])],1),a("router-view")],1)},i=[],r=(s("5c0b"),s("2877")),o={},d=Object(r["a"])(o,n,i,!1,null,null,null),c=d.exports,l=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t.isLoading?s("div",{staticClass:"loader"},[s("i",{staticClass:"glyphicon glyphicon-play whiteText",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"ripple pinkBg"}),s("span",{staticClass:"ripple pinkBg"}),s("span",{staticClass:"ripple pinkBg"})]):t._e(),s("div",{staticClass:"dev-u-padding-default--x2"},[s("div",{staticClass:"dev-grid-wrapper__article--column--1 dev-u-padding-default"},[s("article",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterRes,expression:"filterRes"}],staticStyle:{"text-align":"center"},attrs:{type:"text",placeholder:"Filter Petition by keyword"},domProps:{value:t.filterRes},on:{input:[function(e){e.target.composing||(t.filterRes=e.target.value)},function(e){return e.preventDefault(),t.filterPets(e)}]}})])]),s("div",{staticClass:"dev-grid-wrapper__article--column--2 dev-u-padding-default"},t._l(this.filterPets,function(e,a){return s("article",{key:a},[s("div",{staticClass:"dev-card-base dev-u-padding-default dev-flex-column"},[s("div",{staticClass:"dev-card-base__header dev-u-padding-default"},[s("h4",[t._v(t._s(e.attributes.action))])]),s("div",{staticClass:"dev-card-base__body dev-u-padding-default",staticStyle:{height:"100%"}},[s("text-highlight",{attrs:{queries:t.filterRes}},[t._v(t._s(e.attributes.background))])],1),s("div",{staticClass:"dev-card-base__footer dev-u-padding-default"},[s("div",{staticClass:"dev-grid-wrapper__article--column--2 dev-flex"},[s("article",[s("router-link",{staticClass:"dev-flex",attrs:{to:{name:"petition",params:{stream:t.getStream(e.links.self)}}}},[s("button",{staticClass:"dev-btn",staticStyle:{"align-items":"center"}},[t._v("Petition Real Time Stats")])])],1),s("article",{staticStyle:{"align-items":"center"}},[s("h3",{staticClass:"counter"},[t._v(t._s(e.attributes.signature_count.toLocaleString()))])])])])])])}),0)])])},p=[],f=(s("28a5"),s("96cf"),s("3b8d")),b=s("d225"),h=s("b0b4"),m=s("308d"),v=s("6bb5"),g=s("4e2b"),j=s("9ab4"),y=s("60a3"),_=s("db82"),w=s.n(_),k=s("e286"),C=s("b50c"),S=s("c1df");y["b"].use(s("2ead"),{moment:S}),y["b"].component("tween-num",s("aaf7"));var x=function(t){function e(){var t;return Object(b["a"])(this,e),t=Object(m["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.filterRes="",t.isLoading=!1,t.timeCounter=Date(),t.stats=[{count:0,time:0}],t.newPetsAdded=0,t.isActive=!1,t.petionData=[],t.spIndicatorStyles1=!1,t.testStat=[310,220,530,140,250,600,170,280,590],t.spLineStyles1={stroke:"#54a5ff"},t.columnsMP=[{label:"Mp",field:"mp"},{label:"Name",field:"name"},{label:"Count",field:"signature_count",type:"number"}],t.columnsSIG=[{label:"Code",field:"code"},{label:"Name",field:"name"},{label:"Count",field:"signature_count",type:"number"}],t.rows=[],t.countryCountRows=[],t}return Object(g["a"])(e,t),Object(h["a"])(e,[{key:"onChildChanged",value:function(t,e){this.isActive=!0,this.newPetsAdded=t-e,this.stats.push({count:this.newPetsAdded,time:this.timeCounter}),this.stats=this.stats.filter(function(t){return t.count>0}),this.testStat.push(this.newPetsAdded),this.testStat=this.testStat.filter(function(t){return t>0}),this.stats.length>30&&(this.stats.shift(),this.testStat.shift())}},{key:"mounted",value:function(){this.getEarthQuakesPastHourAboveFourMag()}},{key:"getEarthQuakesPastHourAboveFourMag",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,this.timeCounter=Date(),e="https://petition.parliament.uk/petitions.json?state=all",t.next=5,w.a.get(e);case 5:s=t.sent,this.petionData=s.body.data,this.isActive=!1,this.isLoading=!1;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getStream",value:function(t){var e=t.split("/"),s=e[4].split(".");return s[0]}},{key:"petsUp",get:function(){return this.petionData}},{key:"timediff",get:function(){if(this.stats.length>0){var t=S(Date(),"dddd, MMMM Do YYYY, h:mm:ss a"),e=S(this.stats[0].time,"dddd, MMMM Do YYYY, h:mm:ss a"),s=S.duration(t.diff(e)).humanize();return s}}},{key:"filterPets",get:function(){var t=this,e=this.petionData;return this.filterRes&&(e=e.filter(function(e){return-1!==e.attributes.background.indexOf(t.filterRes)})),e}}]),e}(y["b"]);j["a"]([Object(y["c"])("petsUp.signature_count")],x.prototype,"onChildChanged",null),x=j["a"]([Object(y["a"])({components:{Sparkline:k["a"],TextHighlight:C["a"]}})],x);var M=x,P=M,A=(s("cfb1"),Object(r["a"])(P,u,p,!1,null,"2352b8e3",null)),O=A.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t.isLoading?s("div",{staticClass:"loader"},[s("i",{staticClass:"glyphicon glyphicon-play whiteText",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"ripple pinkBg"}),s("span",{staticClass:"ripple pinkBg"}),s("span",{staticClass:"ripple pinkBg"})]):t._e(),s("div",{staticClass:"wrap--cust"},[s("div",{staticClass:"card"},[s("h4",[t._v(t._s(this.petsUp.action)+" Petition Real-time stats")])])]),s("div",{staticClass:"wrap"},[s("div",{staticClass:"card"},[s("div",{staticClass:"wrap",staticStyle:{"padding-bottom":"16px"}},[s("span",[t._v("Scheduled Debate Date:"+t._s(this.petsUp.scheduled_debate_date))]),s("span",{staticClass:"active",staticStyle:{"text-align":"right"}},[t._v("Status:"+t._s(this.petsUp.state))])]),s("h1",{staticClass:"livecount",class:{active:t.isActive}},[s("tween-num",{attrs:{value:this.petsUp.signature_count,initial:0,duration:500,easing:"easeOutQuart",formatter:function(t){return t.toLocaleString("en",{minimumFractionDigits:0,maximumFractionDigits:0})}}}),s("span",{staticClass:"label"},[t._v(" signatures")])],1),this.newPetsAdded<0?s("p",{staticStyle:{color:"deeppink"}},[t._v("Awaiting")]):this.newPetsAdded>0?s("p",{staticStyle:{color:"deeppink","text-align":"center","font-size":"16px"}},[t._v("\n         "+t._s(this.newPetsAdded)+"\n         "),s("span",[t._v("Just added!")])]):t._e(),s("p",{staticStyle:{padding:"16px 0px"}},[t._v("Title: "+t._s(this.petsUp.background))]),s("div",{staticClass:"wrap--full",staticStyle:{"padding-bottom":"16px"}},[s("div",[s("h4",[t._v("Created on: ")]),s("p",[t._v(t._s(t._f("moment")(this.petsUp.created_at,"dddd, MMMM Do YYYY, h:mm:ss a")))])]),s("div",[s("h4",[t._v("Debate threshold reached: ")]),s("p",[t._v(t._s(t._f("moment")(this.petsUp.debate_threshold_reached_at,"dddd, MMMM Do YYYY, h:mm:ss a")))])]),s("div",[s("h4",[t._v("Response threshold reached ")]),s("p",[t._v(t._s(t._f("moment")(this.petsUp.response_threshold_reached_at,"dddd, MMMM Do YYYY, h:mm:ss a")))])])]),s("h4",[t._v("Creator: "+t._s(this.petsUp.creator_name))]),s("p",[s("a",{attrs:{href:this.urlPart+this.petitionId,target:"_blank"}},[t._v("Origin Petition URL ")])])]),s("div",{staticClass:"card",staticStyle:{"text-align":"center"}},[s("h4",[t._v("Signature Trends in the Last "+t._s(t.timediff))]),s("sparkline",{attrs:{indicatorStyles:t.spIndicatorStyles1}},[s("sparklineLine",{attrs:{data:t.testStat,limit:30,styles:t.spLineStyles1}})],1),s("div",{staticStyle:{height:"300px",border:"1px solid silver",overflow:"auto",display:"flex","align-items":"center"}},[0===this.stats.length?s("div",{staticStyle:{display:"flex","font-size":"22px","justify-content":"center","align-items":"center",width:"100%"}},[t._v(" Awaiting Trend Analysis")]):this.stats.length>0?s("ul",{staticStyle:{"justify-content":"center","align-items":"center",width:"100%"}},t._l(this.stats,function(e,a){return s("li",{key:a,class:{"possible--bot":e.count>1e3}},[t._v("\n           Another\n           "),s("span",{staticClass:"active"},[t._v(t._s(e.count))]),t._v(" added @\n           "),s("span",{staticClass:"alert"},[t._v(t._s(t._f("moment")(e.time,"dddd, MMMM Do YYYY, h:mm:ss a")))])])}),0):t._e()])],1)]),s("div",{staticClass:"wrap"},[s("vue-good-table",{attrs:{columns:t.columnsMP,rows:t.rows,"sort-options":{enabled:!0,initialSortBy:{field:"signature_count",type:"desc"}},"search-options":{enabled:!0},"pagination-options":{enabled:!0,mode:"records",perPage:5,position:"top",perPageDropdown:[5,10,20],dropdownAllowAll:!1,setCurrentPage:1,nextLabel:"next",prevLabel:"prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"}}}),s("vue-good-table",{attrs:{columns:t.columnsSIG,rows:t.countryCountRows,"sort-options":{enabled:!0,initialSortBy:{field:"signature_count",type:"desc"}},"search-options":{enabled:!0},"pagination-options":{enabled:!0,mode:"records",perPage:5,position:"top",perPageDropdown:[5,10,20],dropdownAllowAll:!1,setCurrentPage:1,nextLabel:"next",prevLabel:"prev",rowsPerPageLabel:"Rows per page",ofLabel:"of",pageLabel:"page",allLabel:"All"}}})],1),s("div",{staticClass:"wrap--full"},[s("div",{staticStyle:{"text-align":"center","padding-top":"32px"}},[s("vue-goodshare")],1)])])},Y=[],L=s("22e3"),z=s("c1df");y["b"].use(s("2ead"),{moment:z}),y["b"].component("tween-num",s("aaf7"));var R=function(t){function e(){var t;return Object(b["a"])(this,e),t=Object(m["a"])(this,Object(v["a"])(e).apply(this,arguments)),t.isLoading=!1,t.urlPart="https://petition.parliament.uk/petitions/",t.petitionId="",t.timeCounter=Date(),t.stats=[{count:0,time:0}],t.newPetsAdded=0,t.isActive=!1,t.petionData=[],t.spIndicatorStyles1=!1,t.testStat=[310,220,530,140,250,600,170,280,590],t.spLineStyles1={stroke:"#54a5ff"},t.columnsMP=[{label:"Mp",field:"mp"},{label:"Name",field:"name"},{label:"Count",field:"signature_count",type:"number"}],t.columnsSIG=[{label:"Code",field:"code"},{label:"Name",field:"name"},{label:"Count",field:"signature_count",type:"number"}],t.rows=[],t.countryCountRows=[],t}return Object(g["a"])(e,t),Object(h["a"])(e,[{key:"onChildChanged",value:function(t,e){this.isLoading=!1,this.isActive=!0,this.newPetsAdded=t-e,this.stats.push({count:this.newPetsAdded,time:this.timeCounter}),this.stats=this.stats.filter(function(t){return t.count>0}),this.testStat.push(this.newPetsAdded),this.testStat=this.testStat.filter(function(t){return t>0}),this.stats.length>30&&(this.stats.shift(),this.testStat.shift())}},{key:"created",value:function(){this.petitionId=this.$route.params.stream}},{key:"mounted",value:function(){var t=this;this.getEarthQuakesPastHourAboveFourMag(),setInterval(function(){t.getEarthQuakesPastHourAboveFourMag()},5e3)}},{key:"getEarthQuakesPastHourAboveFourMag",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){var e,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,this.timeCounter=Date(),e="https://petition.parliament.uk/petitions/"+this.petitionId+".json",t.next=5,w.a.get(e);case 5:s=t.sent,this.petionData=s.body.data.attributes,this.rows=s.body.data.attributes.signatures_by_constituency,this.countryCountRows=s.body.data.attributes.signatures_by_country,this.isActive=!1;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"petsUp",get:function(){return this.petionData}},{key:"timediff",get:function(){if(this.stats.length>0){var t=z(Date(),"dddd, MMMM Do YYYY, h:mm:ss a"),e=z(this.stats[0].time,"dddd, MMMM Do YYYY, h:mm:ss a"),s=z.duration(t.diff(e)).humanize();return s}}}]),e}(y["b"]);j["a"]([Object(y["c"])("petsUp.signature_count")],R.prototype,"onChildChanged",null),R=j["a"]([Object(y["a"])({components:{Sparkline:k["a"],VueGoodshare:L["a"]}})],R);var U=R,T=U,E=(s("c39b"),Object(r["a"])(T,D,Y,!1,null,"3ea8a19e",null)),I=E.exports;a["default"].use(l["a"]);var F=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/petition-real-time-stats/:stream",name:"petition",component:I},{path:"*",redirect:"/"}]}),B=s("2f62");a["default"].use(B["a"]);var N=new B["a"].Store({state:{},mutations:{},actions:{}}),G=s("fe82"),H=(s("bf40"),s("5363"),s("d1e7"),s("75f1")),Q=s.n(H);s("cb43"),s("dac4");a["default"].use(G["a"]),a["default"].use(s("2ead")),a["default"].config.productionTip=!1,a["default"].use(Q.a,{appName:"DevApp",appVersion:"1",trackingId:"UA-8197907-4",vueRouter:F}),new a["default"]({router:F,store:N,render:function(t){return t(c)}}).$mount("#app")},cfb1:function(t,e,s){"use strict";var a=s("145d"),n=s.n(a);n.a}});
//# sourceMappingURL=app.c0721e4a.js.map