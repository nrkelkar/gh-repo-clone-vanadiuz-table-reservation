webpackJsonp([1],{0:function(t,e){},E3hY:function(t,e){},HYRg:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 4!==t.view?a("div",{ref:"tremReservation",staticClass:"trem-reservation",style:[t.canvasLoaded?{height:t.envelopeHeight}:{}],attrs:{id:"reservation"}},[a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.view&&!0===t.canvasLoaded,expression:"(view === 0) && (canvasLoaded === true)"}],ref:"reservationOne",staticClass:"reservation1"},[a("div",{staticClass:"envelope",style:[t.canvasLoaded?{height:t.envelopeHeight}:""]},[a("h2",[t._v(t._s(t.calendarTimeInitData.translation.header))]),t._v(" "),a("div",{staticClass:"people-form"},[a("div",{staticClass:"form-element",attrs:{id:"dateinput"}},[a("flat-pickr",{attrs:{config:t.dateConfig,placeholder:t.date,"input-class":"input"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),a("span",{staticClass:"trem-icon tremtr-icon-uniF10A",attrs:{"aria-hidden":"true"}})],1),t._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[a("carousel",{directives:[{name:"show",rawName:"v-show",value:""!==t.date,expression:"(date !== '')"}],attrs:{navigationEnabled:!0,paginationEnabled:!1,perPage:4,navigationNextLabel:t.caruselNavNext,navigationPrevLabel:t.caruselNavPrev}},t._l(t.arrayOfWorkingTimes,function(e,n){return a("slide",{key:e},[a("div",{attrs:{index:n},on:{click:function(e){t.selectedTime(e)}}},[t._v(t._s(e))])])}))],1),t._v(" "),a("canvas",{staticClass:"context-menu-one",attrs:{id:"cc",width:"1000px",height:"1000px"}}),t._v(" "),a("a",{staticClass:"c0ffee-button",on:{click:t.book}},[t._v(t._s(t.calendarTimeInitData.translation.bookTableButton))])],1)])])]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[1===t.view?a("div",{ref:"reservationTwo",staticClass:"reservation2"},[a("div",{ref:"reservation2envelope",staticClass:"envelope"},[a("h3",[t._v(t._s(t.calendarTimeInitData.translation.header))]),t._v(" "),a("div",{staticClass:"info-form"},[a("div",{staticClass:"form-element table"},[a("h4",[t._v(t._s(t.calendarTimeInitData.translation.table))]),t._v(" "),a("h4",[t._v("№ "+t._s(t.table)+" ")])]),t._v(" "),a("div",{staticClass:"form-element guests"},[a("h4",[t._v(t._s(t.calendarTimeInitData.translation.for))]),t._v(" "),a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.persons,expression:"persons"}],attrs:{type:"number",max:t.maxPersons,min:"1"},domProps:{value:t.persons},on:{input:function(e){e.target.composing||(t.persons=e.target.value)}}}),t._v(" "),a("h4",[t._v(t._s(t.calendarTimeInitData.translation.people))])])]),t._v(" "),a("div",{staticClass:"form-element date"},[a("h4",[t._v(t._s(t.calendarTimeInitData.translation.on))]),t._v(" "),a("h4",[t._v(t._s(t.dateForClient))])]),t._v(" "),a("div",{staticClass:"form-element from"},[a("h4",[t._v(t._s(t.calendarTimeInitData.translation.from))]),t._v(" "),a("h4",[t._v(t._s(t.timeStart))])]),t._v(" "),a("div",{staticClass:"form-element cafe"},[a("h4",[t._v(t._s(t.calendarTimeInitData.translation.in))]),t._v(" "),a("h4",[t._v(t._s(t.cafeName))])]),t._v(" "),a("a",{staticClass:"c0ffee-button",attrs:{id:"change"},on:{click:t.change}},[t._v(t._s(t.calendarTimeInitData.translation.changeButton))])]),t._v(" "),a("div",{staticClass:"input-form"},[a("div",{staticClass:"input-element name"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",attrs:{placeholder:t.calendarTimeInitData.translation.name,type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""===this.name,expression:"(this.name === '')"}],staticClass:"trem-icon tremtr-icon-uniF101"}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=this.name,expression:"(this.name != '')"}],staticClass:"trem-icon tremtr-icon-uniF101",staticStyle:{color:"green"}})]),t._v(" "),a("div",{staticClass:"input-element email"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],class:{input:!0,"is-danger":t.errors.has("email")},attrs:{name:"email",type:"email",placeholder:t.calendarTimeInitData.translation.email},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"trem-icon tremtr-icon-uniF10B",staticStyle:{color:"red"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.errors.has("email")&&""!=this.email,expression:"!errors.has('email') && (this.email != '')"}],staticClass:"trem-icon tremtr-icon-uniF10B",staticStyle:{color:"green"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.errors.has("email")&&""===this.email,expression:"!errors.has('email') && (this.email === '')"}],staticClass:"trem-icon tremtr-icon-uniF10B"})]),t._v(" "),a("div",{staticClass:"input-element phone"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{rules:{regex:/^[0-9 ()+-]+$/}},expression:"{ rules: { regex: /^[0-9 ()+-]+$/} }"}],class:{input:!0,"is-danger":t.errors.has("phone")},attrs:{name:"phone",type:"text",placeholder:t.calendarTimeInitData.translation.phone},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("phone"),expression:"errors.has('phone')"}],staticClass:"trem-icon tremtr-icon-uniF105",staticStyle:{color:"red"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.errors.has("phone")&&""!=this.phone,expression:"!errors.has('phone') && (this.phone != '')"}],staticClass:"trem-icon tremtr-icon-uniF105",staticStyle:{color:"green"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.errors.has("phone")&&""===this.phone,expression:"!errors.has('phone') && (this.phone === '')"}],staticClass:"trem-icon tremtr-icon-uniF105"})]),t._v(" "),a("div",{staticClass:"input-element message"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"message",attrs:{rows:"5",placeholder:t.calendarTimeInitData.translation.message,type:"text",wrap:"hard"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!==this.message,expression:"this.message !== ''"}],staticClass:"trem-icon tremtr-icon-uniF109",staticStyle:{color:"green"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""===this.message,expression:"this.message === ''"}],staticClass:"trem-icon tremtr-icon-uniF109"})]),t._v(" "),a("a",{staticClass:"c0ffee-button",attrs:{id:"confirm"},on:{click:t.confirm}},[t._v(t._s(t.calendarTimeInitData.translation.confirmButton))])])])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"in-out"}},[2===t.view?a("div",{staticClass:"reservation3"},[a("div",{staticClass:"confirmation"},[a("h3",[t._v(t._s(t.firstName))]),t._v(" "),a("hr")])]):t._e()])],1):t._e()},i=[],s={render:n,staticRenderFns:i};e.a=s},K4gw:function(t,e){},M7N6:function(t,e){},M93x:function(t,e,a){"use strict";function n(t){a("E3hY"),a("M7N6")}var i=a("xJD8"),s=a("HYRg"),r=a("VU/8"),o=n,m=r(i.a,s.a,!1,o,"data-v-b895349c",null);e.a=m.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i=a("M93x"),s=a("8+8L"),r=a("IZMb"),o=a.n(r),m=a("sUu7");n.a.use(m.a),n.a.use(o.a),n.a.use(s.a),n.a.config.productionTip=!1,new n.a({el:"#reservation",template:"<App/>",components:{App:i.a}})},ZjmE:function(t,e){},uslO:function(t,e,a){function n(t){return a(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="uslO"},xJD8:function(t,e,a){"use strict";var n=a("fZjL"),i=a.n(n),s=a("BO1k"),r=a.n(s),o=a("PJh5"),m=a.n(o),l=a("B+20"),c=a.n(l),d=a("K4gw"),h=(a.n(d),a("ZjmE")),v=(a.n(h),a("bA43")),u=a.n(v),f=a("/kJX");a.n(f);e.a={name:"reservation",components:{flatPickr:c.a,moment:m.a,Carousel:f.Carousel,Slide:f.Slide},props:{getView:{default:0}},data:function(){return{date:"",dateConfig:"",persons:"",maxPersons:"",timeStart:"",timeEnd:"",openHoursStart:"",openHoursEnd:"",table:"",name:"",cafeName:"",message:"",email:"",phone:"",userSurname:"",view:0,canvas:"",width:0,canvasInitData:"",reservations:"",disabledTables:[""],toast:"",calendarTimeInitData:tremtr_data,weekDays1:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],weekDays0:["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],trueTimeFormat:"",trueDateFormat:"",dbDateFormatForMoment:"YYYY/MM/DD",dbTimeFormatForMoment:"HH:mm",canvasLoaded:!1,windowWidth:0,windowHeight:0,peopleFormHeight:367,reservationOne:[],reservationTwo:[],arrayOfWorkingTimes:[" "],caruselNavNext:"👉",caruselNavPrev:"👈",clickedTimes:[],zoomStartScale:0,panning:!1,draglastX:0,draglastY:0,dragCurrentX:0,dragCurrentY:0,canvasMinZoom:0,canvasMaxZoom:0,canvasZoomedWidth:0,canvasZoomedHeight:0,canvasImageWidth:0,canvasImageHeight:0,canvasAllowedXPan:0,canvasAllowedYPan:0,canvasLastPinchScale:0,pausePanning:!1,afterMindnight:!1,disabledDatesFormatted:[],disabledDaysOfWeek:[]}},beforeMount:function(){this.width=window.innerWidth,this.trueTimeFormat=this.pickadateToFlatPickrFormat(this.calendarTimeInitData.time_format),this.trueDateFormat=this.pickadateToFlatPickrFormat(this.calendarTimeInitData.date_format),this.makeDateConfig()},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight)}),this.getWindowWidth(),this.getWindowHeight(),m.a.locale(this.calendarTimeInitData.translation.calendar),this.initCanvas(),document.getElementById("reservation").style.setProperty("--button-color",this.calendarTimeInitData.mainColor)},computed:{dateForClient:function(){return 1===this.openHoursStart._i.substr(0,this.openHoursStart._i.indexOf(":")).length&&(this.openHoursStart._i="0"+this.openHoursStart._i),m()(this.timeStart,this.momentTimeFormat).format(this.dbTimeFormatForMoment)<this.openHoursStart._i?(this.afterMindnight=!0,m()(this.date,this.momentDateFormat).add(1,"day").format(this.momentDateFormat)):(this.afterMindnight=!1,this.date)},fillActive:function(){return"rgba("+this.calendarTimeInitData.fillActive+",0.4)"},activeStroke:function(){return"rgba("+this.calendarTimeInitData.fillActive+"0)"},fillHover:function(){return"rgba("+this.calendarTimeInitData.fillActive+",0.9)"},fillBooked:function(){return"rgba("+this.calendarTimeInitData.fillBooked+",0.4)"},bookedFrame:function(){return"rgba("+this.calendarTimeInitData.fillBooked+",1)"},envelopeHeight:function(){if(null!==this.canvas)return(this.canvas.height+this.peopleFormHeight).toString()+"px"},momentTimeFormat:function(){if(this.trueTimeFormat)return this.flatPickrToMomentTimeFormat(this.trueTimeFormat)},momentDateFormat:function(){if(this.trueDateFormat)return this.flatPickrToMomentDateFormat(this.trueDateFormat)},viewC:function(){return this.getView},isDissableDate:function(){return""===this.date},isDissableStartTime:function(){return""===this.timeStart||""===this.date},dayOfWeek:function(){var t=m()(this.date,this.momentDateFormat).locale("en").format("dddd").toLowerCase();return m.a.locale(this.calendarTimeInitData.translation.calendar),t},selectable:function(){""!==this.canvas&&""!==this.date&&""!==this.timeEnd&&""!==this.timeStart&&this.makeTablesSelectable()},firstName:function(){if(""!==this.name)return this.name.indexOf(" ")>=0?this.name.substr(0,this.name.indexOf(" "))+", "+this.calendarTimeInitData.translation.thanksAtTheEnd:this.name+", "+this.calendarTimeInitData.translation.thanksAtTheEnd}},watch:{date:function(t){if(this.arrayOfWorkingTimes=[],this.clickedTimes.map(function(t){return t.className-=" carusel-active-item"}),this.clickedTimes=[],this.isDissableDate)this.timeStart="",this.openHoursStart="",this.openHoursEnd="",this.arrayOfWorkingTimes=[],this.makeTablesSelectable();else{this.timeStart="",this.timeEnd="";var e="",a="",n=!0,s=!1,o=void 0;try{for(var l,c=r()(this.calendarTimeInitData.schedule_open);!(n=(l=c.next()).done);n=!0){var d=l.value,h=i()(d.weekdays),v=!0,u=!1,f=void 0;try{for(var p,g=r()(h);!(v=(p=g.next()).done);v=!0){p.value===this.dayOfWeek&&(e=d.time.end,a=d.time.start)}}catch(t){u=!0,f=t}finally{try{!v&&g.return&&g.return()}finally{if(u)throw f}}}}catch(t){s=!0,o=t}finally{try{!n&&c.return&&c.return()}finally{if(s)throw o}}var b=!0,w=!1,y=void 0;try{for(var _,T=r()(this.calendarTimeInitData.schedule_closed);!(b=(_=T.next()).done);b=!0){var j=_.value;m.a.locale(this.calendarTimeInitData.translation.calendar),j.date===m()(this.date,this.momentDateFormat).format(this.dbDateFormatForMoment)&&(a=j.time.start,e=j.time.end)}}catch(t){w=!0,y=t}finally{try{!b&&T.return&&T.return()}finally{if(w)throw y}}this.openHoursStart=a,this.openHoursEnd=e;var D=m()(this.date,this.momentDateFormat);if(this.openHoursStart=m()(a,this.dbTimeFormatForMoment).set({date:D.date(),month:D.month(),year:D.year()}),this.openHoursEnd=m()(e,this.dbTimeFormatForMoment).set({date:D.date(),month:D.month(),year:D.year()}),m()(e,this.dbTimeFormatForMoment).diff(m()(a,this.dbTimeFormatForMoment))<0&&this.openHoursEnd.add(1,"d"),m.a.locale(this.calendarTimeInitData.translation.calendar),m()().date()===m()(this.date,this.momentDateFormat).date()){var F=this.openHoursStart;if(m()().diff(F)){F=m()();var k=Number(this.calendarTimeInitData.late_reservations);F.add(k,"m");var x=Number(F.minutes())%Number(this.calendarTimeInitData.time_interval);F.add(Number(this.calendarTimeInitData.time_interval)-x,"m"),F.diff(this.openHoursEnd)>0&&(this.date=""),this.openHoursStart.set({hour:F.hour(),minute:F.minute()})}}if(this.openHoursStart&&this.openHoursEnd){var I=this.openHoursStart,C=this.openHoursEnd.add(Number(-this.calendarTimeInitData.reservation_duration),"m");this.arrayOfWorkingTimes=[];for(var H=0;I.diff(C)<=0;)this.arrayOfWorkingTimes.push(I.format(this.momentTimeFormat)),I.add(Number(this.calendarTimeInitData.time_interval),"m"),H++;I.add(-H*Number(this.calendarTimeInitData.time_interval),"m")}}},timeStart:function(t){""!==t?(this.timeEnd=m()(t,this.momentTimeFormat).add(Number(this.calendarTimeInitData.reservation_duration),"m").format(this.momentTimeFormat),this.renewDisabledTables()):this.timeEnd=""},timeEnd:function(t){this.makeTablesSelectable()}},methods:{selectedTime:function(t){this.clickedTimes.map(function(t){return t.className-=" carusel-active-item"}),this.clickedTimes=[],this.clickedTimes.push(t.target),this.timeStart=t.target.innerHTML,t.target.className+=" carusel-active-item"},makeDateConfig:function(){var t=this,e=[];m.a.locale(this.calendarTimeInitData.translation.calendar);var a=!0,n=!1,s=void 0;try{for(var o,l=r()(this.calendarTimeInitData.schedule_closed);!(a=(o=l.next()).done);a=!0){var c=o.value;void 0===c.time&&e.push(m()(c.date,this.dbDateFormatForMoment))}}catch(t){n=!0,s=t}finally{try{!a&&l.return&&l.return()}finally{if(n)throw s}}var d=!0,h=!1,v=void 0;try{for(var f,p=r()(e);!(d=(f=p.next()).done);d=!0){var g=f.value;this.disabledDatesFormatted.push(g.format(this.momentDateFormat))}}catch(t){h=!0,v=t}finally{try{!d&&p.return&&p.return()}finally{if(h)throw v}}var b="";"en"!==this.calendarTimeInitData.translation.calendar?(b=u.a[this.calendarTimeInitData.translation.calendar],b.firstDayOfWeek=this.calendarTimeInitData.week_start):b={firstDayOfWeek:this.calendarTimeInitData.week_start};var w=!0,y=!1,_=void 0;try{for(var T,j=r()(this.calendarTimeInitData.schedule_open);!(w=(T=j.next()).done);w=!0){var D=T.value,F=i()(D.weekdays);if("0"===this.calendarTimeInitData.week_start){var k=!0,x=!1,I=void 0;try{for(var C,H=r()(this.weekDays0);!(k=(C=H.next()).done);k=!0){var M=C.value;F.includes(M)&&this.disabledDaysOfWeek.push(this.weekDays0.indexOf(M))}}catch(t){x=!0,I=t}finally{try{!k&&H.return&&H.return()}finally{if(x)throw I}}}if("1"===this.calendarTimeInitData.week_start){var S=!0,N=!1,P=void 0;try{for(var O,W=r()(this.weekDays1);!(S=(O=W.next()).done);S=!0){var E=O.value;F.includes(E)&&this.disabledDaysOfWeek.push(this.weekDays0.indexOf(E))}}catch(t){N=!0,P=t}finally{try{!S&&W.return&&W.return()}finally{if(N)throw P}}}}}catch(t){y=!0,_=t}finally{try{!w&&j.return&&j.return()}finally{if(y)throw _}}this.dateConfig={defaultDate:null,disableMobile:!0,dateFormat:this.trueDateFormat,locale:b,minDate:"today",maxDate:(new Date).fp_incr(Number(this.calendarTimeInitData.early_reservations)),disable:[function(e){var a=!0;return"0"!==t.calendarTimeInitData.schedule_closed&&(a=!Boolean(t.calendarTimeInitData.schedule_closed.filter(function(a){return m()(e).format(t.dbDateFormatForMoment)===a.date&&void 0!==a.time}).length)),(!t.disabledDaysOfWeek.includes(e.getDay())||t.disabledDatesFormatted.includes(m()(e).format(t.momentDateFormat)))&&a}]}},computeWokingtimes:function(){this.windowWidth=document.getElementById("reservation").parentNode.parentElement.clientWidth},getWindowWidth:function(t){this.windowWidth=document.getElementById("reservation").parentNode.parentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},flatPickrToMomentTimeFormat:function(t){var e=t;return e=e.replace("K","A"),e=e.replace("H","HH"),e=e.replace("i","mm")},flatPickrToMomentDateFormat:function(t){var e=t;return null!==e.match(/d/g)?e=e.replace("d","DD"):null!==e.match(/D/g)?e=e.replace("D","ddd"):null!==e.match(/l/g)?e=e.replace("l","dddd"):null!==e.match(/j/g)&&(e=e.replace("j","D")),null!==e.match(/m/g)?e=e.replace("m","MM"):null!==e.match(/n/g)?e=e.replace("n","M"):null!==e.match(/M/g)?e=e.replace("M","MMM"):null!==e.match(/F/g)&&(e=e.replace("F","MMMM")),e=e.replace("Y","YYYY")},pickadateToFlatPickrFormat:function(t){var e=t;return null!==e.match(/dddd/g)?e=e.replace("dddd","l"):null!==e.match(/ddd/g)?e=e.replace("ddd","D"):null!==e.match(/dd/g)?e=e.replace("dd","d"):null!==e.match(/d/g)&&(e=e.replace("d","j")),null!==e.match(/mmmm/g)?e=e.replace("mmmm","F"):null!==e.match(/mmm/g)?e=e.replace("mmm","M"):null!==e.match(/mm/g)?e=e.replace("mm","m"):null!==e.match(/m/g)&&(e=e.replace("m","n")),e=e.replace("yyyy","Y"),e=e.replace("HH","H"),e=e.replace("A","K")},flatPickrToPickadateFormat:function(t){var e=t;return null!==e.match(/l/g)?e=e.replace("l","dddd"):null!==e.match(/D/g)?e=e.replace("D","ddd"):null!==e.match(/d/g)?e=e.replace("d","dd"):null!==e.match(/j/g)&&(e=e.replace("j","d")),null!==e.match(/F/g)?e=e.replace("F","mmmm"):null!==e.match(/M/g)?e=e.replace("M","mmm"):null!==e.match(/m/g)?e=e.replace("m","mm"):null!==e.match(/n/g)&&(e=e.replace("n","m")),e=e.replace("Y","yyyy"),e=e.replace("H","HH"),e=e.replace("K","A")},book:function(){if(""!=this.date&&""!=this.timeStart&&""!=this.timeFinish&&""!=this.table){var t=document.getElementById("reservation"),e=t.offsetHeight;this.$refs.reservationOne.style.display="none",this.view=1,setTimeout(function(){this.$refs.tremReservation.style.height=(this.$refs.reservation2envelope.clientHeight+30).toString()+"px"}.bind(this),500),1.5*this.windowHeight<e&&window.scrollTo(0,t.offsetTop)}else this.$toasted.show(this.calendarTimeInitData.translation.bookTableButtonWarning,{theme:"primary",position:"top-center",duration:3e3,className:"toast",containerClass:"toast-container"})},confirm:function(){var t=this;if(""===this.name||""===this.mail||""===this.phone||this.errors.has("email")||this.errors.has("phone"))this.$toasted.show(this.calendarTimeInitData.translation.confirmButtonWarning,{theme:"primary",position:"top-center",duration:3e3,className:"toast",containerClass:"toast-container"});else{m.a.locale(this.calendarTimeInitData.translation.calendar);var e=null;e=this.afterMindnight?m()(this.dateForClient,this.momentDateFormat).format(this.dbDateFormatForMoment):m()(this.date,this.momentDateFormat).format(this.dbDateFormatForMoment),this.$http.post(this.calendarTimeInitData.url,{action:"tremtr_reservation",nonce:this.calendarTimeInitData.nonce,tremtr_reservation_date:e,tremtr_reservation_time_begin:m()(this.timeStart,this.momentTimeFormat).format(this.dbTimeFormatForMoment),tremtr_reservation_time_end:m()(this.timeEnd,this.momentTimeFormat).format(this.dbTimeFormatForMoment),tremtr_reservation_table:this.table,tremtr_reservation_name:this.name,tremtr_reservation_persons:this.persons,tremtr_reservation_email:this.email,tremtr_reservation_phone:this.phone,tremtr_reservation_message:this.message},{emulateJSON:!0}).then(function(e){!0===JSON.parse(e.bodyText).success?(t.view=2,setTimeout(function(){this.$refs.tremReservation.style.height="300px"}.bind(t),500),setTimeout(function(){this.hideReservation()}.bind(t),3e3)):(t.$toasted.show(t.calendarTimeInitData.translation.rejected,{theme:"primary",position:"top-center",duration:7e3,className:"toast",containerClass:"toast-container"}),t.$http.get(t.calendarTimeInitData.endpoint_reservation).then(function(e){t.reservations=e.body;var a=!0,n=!1,i=void 0;try{for(var s,o=r()(t.reservations);!(a=(s=o.next()).done);a=!0){var l=s.value;l.tremtr_reservation_date=m()(l.tremtr_reservation_date,t.dbDateFormatForMoment).format(t.momentDateFormat),l.tremtr_reservation_time_begin=m()(l.tremtr_reservation_time_begin,t.dbTimeFormatForMoment).format(t.momentTimeFormat),l.tremtr_reservation_time_end=m()(l.tremtr_reservation_time_end,t.dbTimeFormatForMoment).format(t.momentTimeFormat)}}catch(t){n=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}},function(t){}))},function(t){})}},change:function(){this.$refs.reservationTwo.style.display="none",this.view=0,setTimeout(function(){this.$refs.tremReservation.style.height=this.envelopeHeight}.bind(this),500)},changeDate:function(){this.date=""},hideReservation:function(){this.view=4},switchReservation:function(){this.view<4?(this.view=4,this.activeButton.active=!1):(this.view=0,this.activeButton.active=!0)},initCanvasObject:function(t){t.lockMovementX=!0,t.lockMovementY=!0,t.lockScalingX=!0,t.lockScalingY=!0,t.lockUniScaling=!0,t.lockRotation=!0,t.hasControls=!1,t.hoverCursor="pointer",t.hasBorders=!1,t.opacity=0,t.selectable=!1,t.evented=!1},initCanvas:function(){var t=this,e=this.fillActive,a=this.fillHover;this.fillBooked;this.$http.get(this.calendarTimeInitData.endpoint_cafe).then(function(n){t.canvasInitData=n.body[0].tremtr_content,t.cafeName=n.body[0].title.rendered,t.canvas=new fabric.Canvas("cc",{selection:!1,controlsAboveOverlay:!0,centeredScaling:!0,allowTouchScrolling:!0}),t.canvas.loadFromJSON(t.canvasInitData,function(){var n=JSON.parse(t.canvasInitData);if(null==n.backgroundImage)t.canvas.setHeight(300),t.canvas.setWidth(200),t.$toasted.show("ADD IMAGE!",{theme:"bubble",position:"top-center",duration:3e4,className:"toast",containerClass:"toast-container"}),t.canvas.renderAll();else{var i=t.windowWidth;i>n.backgroundImage.width&&(i=n.backgroundImage.width);var s=.9*i/(n.backgroundImage.width*n.backgroundImage.scaleX);t.canvas.setZoom(s),t.canvas.renderAll();var r=n.backgroundImage.height*n.backgroundImage.scaleY*s,o=n.backgroundImage.width*n.backgroundImage.scaleX*s;t.canvas.setHeight(r),t.canvas.setWidth(o),t.canvas.renderAll(),r<200&&(t.canvas.zoomToPoint({x:o/2,y:r/2},2.5*s),t.canvas.setHeight(400)),t.canvasImageWidth=o/s,t.canvasImageHeight=r/s,t.canvasAllowedXPan=o/s,t.canvasAllowedYPan=r/s,t.canvasMinZoom=t.canvas.getZoom(),t.canvasMaxZoom=2*t.canvas.getZoom(),t.canvasZoomedWidth=t.canvasImageWidth,t.canvasZoomedHeight=t.canvasImageHeight}for(var m=0;m<t.canvas.getObjects().length;m+=3){t.canvas.item(m).id=t.canvas.item(m+1).text,t.canvas.item(m+1).id=t.canvas.item(m+1).text,t.canvas.item(m+2).id=t.canvas.item(m+1).text,t.initCanvasObject(t.canvas.item(m)),t.initCanvasObject(t.canvas.item(m+1)),t.initCanvasObject(t.canvas.item(m+2));var l=[t.canvas.item(m+1).text,t.canvas.item(m+2).text];t.canvas.item(m).name=l,t.canvas.item(m).set({fill:e,strokeWidth:0,opacity:1}),t.canvas.item(m+1).set({opacity:1,left:t.canvas.item(m).left+10,top:t.canvas.item(m).top+10,fontSize:20,fontWeight:"bold"}),t.canvas.item(m+2).set({text:""}),t.canvas.renderAll()}var c=t,d=!1;t.canvas.on("mouse:over",function(t){null!=t.target&&(t.target.fill===e&&"rect"===t.target.type&&t.target.set({fill:a}),t.target.canvas.renderAll())}),t.canvas.on("mouse:out",function(t){null!=t.target&&(t.target.fill===a&&"rect"===t.target.type&&1!=c.canvas.item(c.canvas.getObjects().indexOf(t.target)+2).opacity&&t.target.set({fill:e}),t.target.canvas.renderAll())}),c.canvas.observe("mouse:down",function(t){if(""!==c.date&&""!==c.timeEnd&&""!==c.timeStart||d||(c.$toasted.show(c.calendarTimeInitData.translation.canvasClickWarning,{theme:"primary",position:"top-center",duration:2e3,className:"toast",containerClass:"toast-container"}),d=!d,setTimeout(function(){d=!d},5e3)),null!=t.target){for(var n=0;n<c.canvas.getObjects().length;n++)c.canvas.item(n).fill===a&&(c.canvas.item(n).set({fill:e}),c.canvas.item(n+2).set({opacity:0}));if("rect"===t.target.type){c.canvas.getObjects().indexOf(t.target);t.target.set({fill:a}),c.canvas.item(c.canvas.getObjects().indexOf(t.target)+2).set({opacity:1}),c.table=t.target.name[0],c.persons=t.target.name[1],c.maxPersons=t.target.name[1]}if("text"===t.target.type){var i=c.canvas.getObjects().indexOf(t.target);c.canvas.item(i-1).set({fill:a}),c.table=c.canvas.item(i-1).name[0],c.persons=c.canvas.item(i-1).name[1],c.maxPersons=c.canvas.item(i-1).name[1]}c.canvas.renderAll()}}),t.canvas.on({"touch:gesture":function(e){if(e.e.touches&&2==e.e.touches.length){t.pausePanning=!0;var a=new fabric.Point(t.canvas.getCenter().left,t.canvas.getCenter().top);"start"==e.self.state&&(t.zoomStartScale=t.canvas.getZoom());var n=t.zoomStartScale*e.self.scale;if(n<t.canvasMaxZoom&&n>t.canvasMinZoom&&(t.canvas.zoomToPoint(a,n),t.canvasZoomedWidth=t.canvas.getZoom()*t.canvasImageWidth/t.canvasMinZoom,t.canvasZoomedHeight=t.canvas.getZoom()*t.canvasImageHeight/t.canvasMinZoom,t.canvasAllowedXPan=t.canvasZoomedWidth-t.canvas.getWidth(),t.canvasAllowedYPan=t.canvasZoomedHeight-t.canvas.getHeight()),t.pausePanning=!1,"function"==typeof e.e.stopPropagation)return e.e.stopPropagation(),e.e.preventDefault(),!1}},"object:selected":function(e){t.pausePanning=!0},"selection:cleared":function(e){t.pausePanning=!1},"touch:drag":function(e){if(0==t.pausePanning&&null!=e.e.touches){t.dragCurrentX=e.e.touches[0].pageX,t.dragCurrentY=e.e.touches[0].pageY;var a=t.dragCurrentX-t.draglastX,n=t.dragCurrentY-t.draglastY;Math.abs(t.dragCurrentX-t.draglastX)<=50&&Math.abs(t.dragCurrentY-t.draglastY)<=50&&(Math.abs(t.canvas.viewportTransform[4])<=t.canvasAllowedXPan&&Math.abs(t.canvas.viewportTransform[5])<=t.canvasAllowedYPan?t.canvas.relativePan({x:a,y:n}):Math.abs(t.canvas.viewportTransform[4])>t.canvasAllowedXPan?t.canvas.viewportTransform[4]>0?t.canvas.viewportTransform[4]=t.canvasAllowedXPan:t.canvas.viewportTransform[4]=-t.canvasAllowedXPan:t.canvas.viewportTransform[5]>0?t.canvas.viewportTransform[5]=t.canvasAllowedYPan:t.canvas.viewportTransform[5]=-t.canvasAllowedYPan),t.draglastX=t.dragCurrentX,t.draglastY=t.dragCurrentY}if("function"==typeof e.e.stopPropagation)return e.e.stopPropagation(),e.e.preventDefault(),!1}}),t.canvasLoaded=!0})},function(t){}),this.$http.get(this.calendarTimeInitData.endpoint_reservation).then(function(e){t.reservations=e.body;var a=!0,n=!1,i=void 0;try{for(var s,o=r()(t.reservations);!(a=(s=o.next()).done);a=!0){var l=s.value;l.tremtr_reservation_date=m()(l.tremtr_reservation_date,t.dbDateFormatForMoment).format(t.momentDateFormat),l.tremtr_reservation_time_begin=m()(l.tremtr_reservation_time_begin,t.dbTimeFormatForMoment).format(t.momentTimeFormat),l.tremtr_reservation_time_end=m()(l.tremtr_reservation_time_end,t.dbTimeFormatForMoment).format(t.momentTimeFormat)}}catch(t){n=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(n)throw i}}},function(t){})},renewDisabledTables:function(){var t=this;if(this.disabledTables=[],""!==this.timeStart&&""!=this.timeEnd){var e="";e=this.openHoursStart.format(this.momentDateFormat)===this.openHoursEnd.format(this.momentDateFormat)?this.reservations.filter(function(e){return e.tremtr_reservation_date.toLowerCase()===t.date.toLowerCase()&&e.tremtr_reservation_time_begin>=t.openHoursStart.format(t.momentTimeFormat)}):this.reservations.filter(function(e){return e.tremtr_reservation_date.toLowerCase()===m()(t.date,t.momentDateFormat).add(1,"day").format(t.momentDateFormat).toLowerCase()&&e.tremtr_reservation_time_end<=t.openHoursEnd.format(t.momentTimeFormat)||e.tremtr_reservation_date.toLowerCase()===t.date.toLowerCase()&&e.tremtr_reservation_time_begin>=t.openHoursStart.format(t.momentTimeFormat)});var a=m()(this.dateForClient,this.momentDateFormat),n=m()(this.timeStart,this.momentTimeFormat).set({date:a.date(),month:a.month(),year:a.year()}),i=m()(this.timeEnd,this.momentTimeFormat).set({date:a.date(),month:a.month(),year:a.year()});this.timeStart>this.timeEnd&&i.add(1,"d");var s=!0,o=!1,l=void 0;try{for(var c,d=r()(e);!(s=(c=d.next()).done);s=!0){var h=c.value,v=m()(h.tremtr_reservation_date,this.momentDateFormat),u=m()(h.tremtr_reservation_time_begin,this.momentTimeFormat).set({date:v.date(),month:v.month(),year:v.year()}),f=m()(h.tremtr_reservation_time_end,this.momentTimeFormat).set({date:v.date(),month:v.month(),year:v.year()});u.format(this.momentTimeFormat)>f.format(this.momentTimeFormat)&&f.add(1,"d"),(n.diff(u)>=0&&f.diff(i)>=0||u.diff(n)>=0&&i.diff(u)>0||f.diff(n)>0&&i.diff(f)>=0)&&this.disabledTables.push(h.tremtr_reservation_table)}}catch(t){o=!0,l=t}finally{try{!s&&d.return&&d.return()}finally{if(o)throw l}}}this.disableTable()},disableTable:function(){for(var t=0;t<this.canvas.getObjects().length;t+=3)this.disabledTables.includes(this.canvas.item(t).name[0])&&(this.canvas.item(t).set({fill:this.fillBooked,evented:!1}),this.canvas.item(t).name[0]===this.table&&(this.canvas.item(t).set({fill:this.fillBooked,evented:!1}),this.canvas.item(t+2).set({opacity:0}),this.table="")),this.disabledTables.includes(this.canvas.item(t).name[0])||this.canvas.item(t).fill===this.fillBooked&&this.canvas.item(t).set({fill:this.fillActive,evented:!0});this.canvas.renderAll()},makeTablesSelectable:function(){if(""!==this.canvas)if(""!==this.date&&""!==this.timeEnd&&""!==this.timeStart){for(var t=0;t<this.canvas.getObjects().length;t+=3)this.disabledTables.includes(this.canvas.item(t).name[0])||this.canvas.item(t).set({evented:!0});this.canvas.renderAll()}else{for(var e=0;e<this.canvas.getObjects().length;e+=3)this.canvas.item(e).set({evented:!1,fill:this.fillActive}),this.canvas.item(e+2).set({opacity:0}),this.table="";this.canvas.renderAll()}}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)}}}},["NHnr"]);
//# sourceMappingURL=app.9f738923d3907e85525d.js.map