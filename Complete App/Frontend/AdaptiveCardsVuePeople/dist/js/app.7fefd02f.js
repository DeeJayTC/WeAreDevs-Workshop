(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},n={app:0},i=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("85ec"),n=a.n(o);n.a},"35c4":function(e,t,a){"use strict";var o=a("bfa3"),n=a.n(o);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[e._v("Adaptive Cards Demo")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExample02"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[e._v("Users")])],1),a("li",{staticClass:"nav-item"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[e._v("Add User")])],1)]),e._m(1)])],1),a("router-view",{staticStyle:{"margin-top":"15px"}}),a("b-modal",{attrs:{id:"modal-1",title:"Create Person","cancel-disabled":!0,size:"lg","ok-disabled":!0},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[a("div")]},proxy:!0}])},[a("create-user")],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form-inline my-2 my-md-0"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}})])}],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("adaptive-cards",{attrs:{card:e.card,data:e.person,useTemplating:!0},on:{onActionClicked:e.onCardAction}})},s=[],l=(a("b0c0"),a("96cf"),a("1da1")),c=a("88ff"),p={name:"people",props:{person:{type:Object,default:function(){return{displayName:"",jobTitle:"",image:"",email:""}}},mode:{type:String,default:"create"}},computed:{card:function(){return c}},methods:{onCardAction:function(e,t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"create"==a.mode?(o={displayName:t.name,jobTitle:t.job,mail:t.email,officeLocation:t.office,businessPhones:[t.phone],image:t.image},a.$store.state.people.people.push(o)):a.$store.commit("people/updatePerson",{id:t.personId,displayName:t.name,jobTitle:t.job,mail:t.email,officeLocation:t.office,businessPhones:[t.phone],image:t.image}),a.$bvModal.hide("modal-1"),a.$bvModal.hide("modal-2");case 3:case"end":return e.stop()}}),e)})))()}}},d=p,u=a("2877"),m=Object(u["a"])(d,r,s,!1,null,null,null),f=m.exports,b={name:"App",components:{createUser:f},data:function(){return{}},methods:{closeModal:function(){this.$bvModal.hide("modal-1"),this.$bvModal.hide("modal-2")}}},h=b,g=(a("034f"),Object(u["a"])(h,n,i,!1,null,null,null)),v=g.exports,x=a("8a2a"),y=a.n(x),P=a("5f5b"),j=a("b1e0"),M=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-row",{staticStyle:{padding:"25px"}},[a("h4",[e._v("Example People")]),a("b-card-group",{attrs:{deck:""}},e._l(e.people,(function(t){return a("div",{key:t.id},[a("b-card",{staticClass:"text-center",staticStyle:{"min-height":"340px","min-weight":"400px","margin-top":"15px","margin-right":"10px"},scopedSlots:e._u([{key:"footer",fn:function(){return[a("b-button",{staticClass:"noStyle",staticStyle:{"margin-left":"260px"},on:{click:function(a){return e.editPerson(t)}}},[a("i",{staticClass:"fa fa-pencil",on:{click:function(a){return e.editPerson(t)}}})])]},proxy:!0}],null,!0)},[a("adaptive-cards",{attrs:{card:e.card,data:t,useTemplating:!0}})],1)],1)})),0)],1),a("b-modal",{attrs:{id:"modal-2",title:"Create Person","cancel-disabled":!0,size:"lg","ok-disabled":!0},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[a("div")]},proxy:!0}])},[a("create-user",{attrs:{mode:"edit",person:e.currentPerson}})],1)],1)},S=[],w=a("5530"),C=a("b9a7"),k=a("2f62"),N={name:"people",components:{createUser:f},data:function(){return{currentPerson:null}},computed:Object(w["a"])({},Object(k["b"])("people",["people"]),{card:function(){return C}}),methods:{editPerson:function(e){this.currentPerson=e,this.$bvModal.show("modal-2")},closeModal:function(){this.$bvModal.hide("modal-1"),this.$bvModal.hide("modal-2")}}},A=N,B=(a("35c4"),Object(u["a"])(A,T,S,!1,null,null,null)),O=B.exports;o["default"].use(M["a"]);var _=[{path:"/",name:"home",component:O},{path:"*",redirect:"/"}],$=new M["a"]({mode:"history",routes:_}),L=$,E=(a("7db0"),a("780c")),I={people:E.people,me:E.me},U={updatePerson:function(e,t){var a=e.people.find((function(e){return e.id==t.id}));a&&(a.displayName=t.displayName,a.jobTitle=t.jobTitle,a.mail=t.mail,a.officeLocation=t.officeLocation,a.businessPhones=[t.businessPhones],a.image=""!=t.image?t.image:a.image)}},D={setAccount:function(e,t){var a=e.commit;a("setAccount",t)},updatePerson:function(e,t){var a=e.commit;a("updatePerson",t)}},W={getPeople:function(e){return e.people}},J={state:I,mutations:U,actions:D,getters:W,namespaced:!0},z={people:J};o["default"].use(k["a"]);var V=new k["a"].Store({modules:z}),H=V;a("f9e3"),a("2dd8");o["default"].use(P["a"]),o["default"].use(j["a"]),o["default"].use(y.a),o["default"].config.productionTip=!1,new o["default"]({router:L,store:H,render:function(e){return e(v)}}).$mount("#app")},"780c":function(e){e.exports=JSON.parse('{"me":{"@odata.context":"https://graph.microsoft.com/v1.0/$metadata#users/$entity","businessPhones":["+1 412 555 0109"],"displayName":"Megan Bowen","givenName":"Megan","jobTitle":"Auditor","mail":"MeganB@M365x214355.onmicrosoft.com","mobilePhone":null,"officeLocation":"12/1110","preferredLanguage":"en-US","surname":"Bowen","userPrincipalName":"MeganB@M365x214355.onmicrosoft.com","id":"48d31887-5fad-4d73-a9f5-3c356e68a038"},"people":[{"businessPhones":["+1 732 555 0102"],"image":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg","displayName":"Ben Walters","givenName":"Ben","jobTitle":"VP Sales","mail":"BenW@M365x214355.onmicrosoft.com","mobilePhone":null,"officeLocation":"19/3123","preferredLanguage":"en-US","surname":"Walters","userPrincipalName":"BenW@M365x214355.onmicrosoft.com","id":"f5289423-7233-4d60-831a-fe107a8551cc"},{"businessPhones":["+1 262 555 0106"],"displayName":"Allan Deyoung","givenName":"Allan","jobTitle":"Corporate Security Officer","image":"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg","mail":"AllanD@M365x214355.onmicrosoft.com","mobilePhone":null,"officeLocation":"24/1106","preferredLanguage":"en-US","surname":"Deyoung","userPrincipalName":"AllanD@M365x214355.onmicrosoft.com","id":"c03e6eaa-b6ab-46d7-905b-73ec7ea1f755"},{"businessPhones":["+1 858 555 0110"],"displayName":"Alex Wilber","givenName":"Alex","jobTitle":"Marketing Assistant","image":"https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg","mail":"AlexW@M365x214355.onmicrosoft.com","mobilePhone":null,"officeLocation":"131/1104","preferredLanguage":"en-US","surname":"Wilber","userPrincipalName":"AlexW@M365x214355.onmicrosoft.com","id":"4782e723-f4f4-4af3-a76e-25e3bab0d896"},{"businessPhones":["+1 425 555 0109"],"displayName":"Adele Vance","givenName":"Adele","jobTitle":"Product Marketing Manager","image":"https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg","mail":"AdeleV@M365x214355.onmicrosoft.com","mobilePhone":null,"officeLocation":"18/2111","preferredLanguage":"en-US","surname":"Vance","userPrincipalName":"AdeleV@M365x214355.onmicrosoft.com","id":"87d349ed-44d7-43e1-9a83-5f2406dee5bd"},{"businessPhones":["8006427676"],"displayName":"MOD Administrator","givenName":"MOD","jobTitle":"System Account","image":"https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg","mail":"admin@M365x214355.onmicrosoft.com","mobilePhone":"5555555555","officeLocation":null,"preferredLanguage":"en-US","surname":"Administrator","userPrincipalName":"admin@M365x214355.onmicrosoft.com","id":"5bde3e51-d13b-4db1-9948-fe4b109d11a7"}]}')},"85ec":function(e,t,a){},"88ff":function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","version":"1.2","body":[{"type":"ColumnSet","columns":[{"width":"stretch","type":"Column","items":[{"text":"Basic Data","type":"TextBlock","size":"Medium","weight":"Bolder"},{"type":"TextBlock","text":"Name"},{"type":"Input.Text","placeholder":"Person full name","value":"{$root.displayName}","id":"name"},{"type":"TextBlock","text":"Job Title"},{"type":"Input.Text","placeholder":"Persons\'s Job Title","value":"{$root.jobTitle}","id":"job"}]},{"width":"stretch","type":"Column","items":[{"text":"Contact Details","type":"TextBlock","weight":"Bolder","size":"Medium"},{"text":"Email","type":"TextBlock"},{"placeholder":"*@*.com","type":"Input.Text","value":"{$root.mail}","id":"email"},{"text":"Business Phone","type":"TextBlock"},{"placeholder":"+1 223 546","value":"{$root.businessPhones[0]}","type":"Input.Text","id":"phone"}]}]},{"text":"Office","type":"TextBlock"},{"placeholder":"Building Number","type":"Input.Text","value":"{$root.officeLocation}","id":"office"},{"type":"TextBlock","text":"Profile Image"},{"placeholder":"Placeholder text","type":"Input.Text","id":"image"},{"type":"ActionSet","actions":[{"title":"Save","type":"Action.Submit","id":"submit","style":"positive","data":{"personId":"{$root.id}"}},{"title":"Cancel","type":"Action.Submit","id":"cancel","style":"negative"}]}],"$schema":"http://adaptivecards.io/schemas/adaptive-card.json"}')},b9a7:function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","body":[{"type":"ColumnSet","columns":[{"type":"Column","items":[{"type":"Image","url":"{image}","size":"Medium","width":"85px","height":"85px"}],"width":"85px","minHeight":"85px"},{"type":"Column","items":[{"type":"TextBlock","weight":"Bolder","text":"{displayName}","wrap":true,"size":"Large"},{"type":"TextBlock","spacing":"None","text":"{jobTitle}","isSubtle":true,"wrap":true}],"width":"stretch","minHeight":"85px","verticalContentAlignment":"Center"}]},{"type":"TextBlock","text":"{mail}","wrap":true},{"type":"FactSet","facts":[{"title":"Office Location","value":"{officeLocation}"},{"title":"Mobile","value":"{mobilePhone}"},{"title":"BusinessPhone","value":"{businessPhones[0]}"}]}],"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","version":"1.2"}')},bfa3:function(e,t,a){}});
//# sourceMappingURL=app.7fefd02f.js.map