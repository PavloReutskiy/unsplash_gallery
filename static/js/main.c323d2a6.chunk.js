(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(28),c=n.n(a),s=n(9),l=(n(37),n(0)),i=(n(38),n(39),n(40),n(3)),r=n(8),o=n(4),u=(n(41),n(5)),j=n(7),b=n(29);var d=function(e){return function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",headers:new Headers(Object(b.a)({Authorization:"Client-ID ".concat("ueKRO8T9f2aQICXdUs0FbykZ1AzqPcozQX-I9zEoh58")},t&&{"Content-Type":"application/json; charset=UTF-8"}))};return t&&(n.body=JSON.stringify(t)),fetch("https://api.unsplash.com/"+e,n).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}(e)},h=(n(42),n(43),n(1)),m=function(e){var t=e.onHandleLiClick;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"banner__trend",children:"Trending:"}),Object(h.jsxs)("ul",{className:"banner__list",children:[Object(h.jsx)("li",{className:"banner__item",onClick:function(){return t("nature")},children:"nature,"}),Object(h.jsx)("li",{className:"banner__item",onClick:function(){return t("film")},children:"film,"}),Object(h.jsx)("li",{className:"banner__item",onClick:function(){return t("animals")},children:"animals,"}),Object(h.jsx)("li",{className:"banner__item",onClick:function(){return t("wallpapers")},children:"wallpapers,"}),Object(h.jsx)("li",{className:"banner__item",onClick:function(){return t("people")},children:"people"})]})]})},O=(n(45),function(e){var t=e.query,n=e.onHandleFormSubmit,a=e.onHandleQueryChange,c=e.onHandleReset,s=e.isResetButtonActive;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsx)("input",{type:"text",className:"input banner__search-field",placeholder:"Search high-resolution images",value:t,onChange:a}),Object(h.jsx)("span",{className:"banner__search-icon banner__search-icon--left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon banner__reset",children:s&&Object(h.jsx)("button",{type:"button",className:"delete","aria-label":"Clear search",onClick:c})}),Object(h.jsx)("span",{className:"banner__search-icon banner__search-icon--right",children:Object(h.jsx)("i",{className:"fa-sharp fa-solid fa-expand"})})]})}),f=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(!1),s=Object(o.a)(c,2),r=s[0],b=s[1],f=Object(l.useState)(""),p=Object(o.a)(f,2),x=p[0],v=p[1],_=Object(l.useState)(""),g=Object(o.a)(_,2),N=g[0],y=g[1],k=Object(i.o)();Object(l.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("/photos/random");case 3:t=e.sent,v(t.urls.full),y(t.user.name),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(h.jsx)("section",{className:"banner",style:{backgroundImage:"url(".concat(x,")")},children:Object(h.jsxs)("div",{className:"banner__content",children:[Object(h.jsxs)("div",{className:"inner-container",children:[Object(h.jsx)("h1",{className:"banner__title",children:"Unsplash"}),Object(h.jsxs)("p",{className:"banner__description",children:["The internet\u2019s source for visuals. ",Object(h.jsx)("br",{})," Powered by creators everywhere."]}),Object(h.jsx)("div",{className:"banner__search control has-icons-left has-icons-right",children:Object(h.jsx)(O,{query:n,onHandleFormSubmit:function(e){e.preventDefault(),k("/s/photos/".concat(n)),a(""),b(!1)},onHandleQueryChange:function(e){var t=e.target.value;a(t),b(!!t)},onHandleReset:function(){a(""),b(!1)},isResetButtonActive:r})}),Object(h.jsx)("div",{className:"banner__trend-container",children:Object(h.jsx)(m,{onHandleLiClick:function(e){k("/s/photos/".concat(e))}})})]}),Object(h.jsxs)("ul",{className:"banner__info",children:[Object(h.jsxs)("li",{className:"banner__info-element",children:["Photo by ",N]}),Object(h.jsx)("li",{className:"banner__info-element",children:"Read more about the Unsplash License"})]})]})})},p=(n(46),function(e){var t=e.photoId,n=e.onClick,a=e.previousPath,c=Object(l.useState)(null),s=Object(o.a)(c,2),r=s[0],u=s[1],j=Object(l.useState)(null),b=Object(o.a)(j,2),m=b[0],O=b[1],f=Object(i.o)();return Object(l.useEffect)((function(){var e;t&&(e=t,d("/photos/".concat(e))).then((function(e){u(e)}))}),[t]),Object(l.useEffect)((function(){var e,t;null!==r&&void 0!==r&&null!==(e=r.user)&&void 0!==e&&e.username&&(t=r.user.username,d("/users/".concat(t))).then((function(e){O(e)}))}),[r]),Object(h.jsxs)("div",{className:"modal-container",children:[Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-top",children:[Object(h.jsxs)("div",{className:"author-container",children:[Object(h.jsx)("div",{className:"author-photo",children:Object(h.jsx)("img",{src:null===m||void 0===m?void 0:m.profile_image.small,alt:null===m||void 0===m?void 0:m.name})}),Object(h.jsx)("div",{className:"author",children:null===r||void 0===r?void 0:r.user.name})]}),Object(h.jsxs)("div",{className:"action-buttons",children:[Object(h.jsx)("div",{className:"action-button",children:Object(h.jsx)("i",{className:"fa-sharp fa-solid fa-heart"})}),Object(h.jsx)("div",{className:"action-button",children:Object(h.jsx)("i",{className:"fa-sharp fa-solid fa-plus"})}),Object(h.jsx)("div",{className:"action-button",children:"Download"})]})]}),Object(h.jsx)("img",{className:"modal-photo",src:null===r||void 0===r?void 0:r.urls.small,alt:null===r||void 0===r?void 0:r.description}),Object(h.jsx)("div",{className:"tags",children:null===r||void 0===r?void 0:r.tags.map((function(e){return Object(h.jsx)("button",{className:"tag",onClick:function(){n(null),f("/s/photos/".concat(e.title))},children:e.title.charAt(0).toUpperCase()+e.title.slice(1)},e.title)}))})]}),Object(h.jsx)("button",{className:"modal-next",children:Object(h.jsx)("i",{className:"fa-solid fa-chevron-right fa-xl"})}),Object(h.jsx)("button",{className:"modal-prev",children:Object(h.jsx)("i",{className:"fa-solid fa-chevron-left fa-xl"})}),Object(h.jsx)("button",{className:"modal-close",onClick:function(){n(null),f(a||"/")},children:Object(h.jsx)("i",{className:"fa-duotone fa-xmark"})})]})}),x=(n(47),function(e){var t=e.onChangeColumns,n=e.columns;return Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsxs)("label",{className:"radio__lable",children:[Object(h.jsx)("input",{type:"radio",className:"radio__input",value:"3",checked:3===n,onChange:t}),"3 columns"]}),Object(h.jsxs)("label",{className:"radio__lable",children:[Object(h.jsx)("input",{type:"radio",className:"radio__input",value:"4",checked:4===n,onChange:t}),"4 columns"]})]})}),v=n(30),_=(n(48),n(31)),g=(n(49),function(e){var t=e.photo,n=e.onPhotoClick;return Object(h.jsx)("div",{className:"gallery__item-container",children:Object(h.jsxs)(s.b,{to:"/photos/".concat(t.id),onClick:function(){return n(t.id)},className:"gallery__item-link",children:[Object(h.jsx)("img",{src:t.urls.small,alt:t.description,className:"masonry-item"}),Object(h.jsxs)("div",{className:"overlay",children:[Object(h.jsx)("button",{className:"gallery__button gallery__button--1",children:Object(h.jsx)("i",{className:"fa-sharp fa-solid fa-heart"})}),Object(h.jsx)("button",{className:"gallery__button gallery__button--2",children:Object(h.jsx)("i",{className:"fa-sharp fa-solid fa-plus"})})]})]})})}),N=(n(50),function(){return Object(h.jsx)("div",{className:"Loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),y=function(e){var t=e.photos,n=e.columns,a=e.onFetchMoreData,c=e.onHandlePhotoClick;return Object(h.jsx)(v.a,{dataLength:t.length,next:a,hasMore:!0,loader:Object(h.jsx)(N,{}),children:Object(h.jsx)(_.a,{breakpointCols:{default:n,1200:3,991:2,767:1},className:"masonry-grid",columnClassName:"masonry-grid_column",children:t.map((function(e){return Object(h.jsx)(g,{photo:e,onPhotoClick:c},e.id)}))})})},k=function(){var e=Object(i.q)(),t=e.collectionName,n=e.id,a=e.query,c=Object(i.m)(),s=Object(l.useState)([]),u=Object(o.a)(s,2),j=u[0],b=u[1],m=Object(l.useState)(1),O=Object(o.a)(m,2),v=O[0],_=O[1],g=Object(l.useState)(3),N=Object(o.a)(g,2),k=N[0],C=N[1],S=Object(l.useState)(n||null),w=Object(o.a)(S,2),E=w[0],P=w[1],A=Object(l.useState)(""),H=Object(o.a)(A,2),F=H[0],T=H[1],q=function(e){e&&T(c.pathname),P(e)};Object(l.useEffect)((function(){"/"===c.pathname&&function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return d("/photos?page=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,"&per_page=").concat(e))}(v).then((function(e){e.length>0?b((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))})):_(1)}))}),[c,v]),Object(l.useEffect)((function(){c.pathname.includes("/t/")&&t&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return d("/topics/".concat(e,"/photos?page=").concat(t,"&per_page=").concat(n))}(t,v).then((function(e){b((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))}))}))}),[c,t,v]),Object(l.useEffect)((function(){c.pathname.includes("/s/photos/")&&a&&function(e){return d("/search/photos?query=".concat(e))}(a).then((function(e){b((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.results))}))}))}),[c,a]),Object(l.useEffect)((function(){b([])}),[c,t]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)("div",{className:"gallery-container",children:[Object(h.jsx)(x,{onChangeColumns:function(e){C(Number(e.target.value))},columns:k}),Object(h.jsx)("section",{className:"gallery",children:Object(h.jsx)(y,{photos:j,columns:k,onFetchMoreData:function(){setTimeout((function(){_(v+1)}),1500)},onHandlePhotoClick:q})}),E&&Object(h.jsx)(p,{photoId:E,onClick:q,previousPath:F})]})]})},C=function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})},S=n(27),w=n.n(S),E=(n(51),[{id:1,name:"Wallpapers",slug:"wallpapers"},{id:2,name:"3D Renders",slug:"3d-renders"},{id:3,name:"Nature",slug:"nature"},{id:4,name:"Textures & Patterns",slug:"textures-patterns"},{id:5,name:"Architecture & Interiors",slug:"architecture-interior"},{id:6,name:"Film",slug:"film"},{id:7,name:"Street Photography",slug:"street-photography"},{id:8,name:"Experimental",slug:"experimental"},{id:9,name:"Animals",slug:"animals"},{id:10,name:"Fashion & Beauty",slug:"fashion-beauty"},{id:11,name:"Business & Work",slug:"business-work"},{id:12,name:"Food & Drink",slug:"food-drink"},{id:13,name:"Travel",slug:"travel"},{id:14,name:"People",slug:"people"},{id:15,name:"Spirituality",slug:"spirituality"},{id:16,name:"Athletics",slug:"athletics"},{id:17,name:"Health & Wellness",slug:"health"},{id:18,name:"Current Events",slug:"current-events"},{id:19,name:"Arts & Culture",slug:"arts-culture"}]),P=function(){var e=Object(l.useRef)(null);return Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)(s.c,{to:"/",className:function(e){var t=e.isActive;return w()("nav__link",{"is-active":t})},children:"Editorial"}),Object(h.jsx)("div",{className:"nav__separator"}),Object(h.jsxs)("div",{className:"nav__list-container",children:[Object(h.jsx)("button",{className:"scroll-button scroll-button-left",onClick:function(){e.current&&e.current.scrollBy({left:-300,behavior:"smooth"})},children:"<"}),Object(h.jsx)("ul",{ref:e,className:"nav__list",children:E.map((function(e){return Object(h.jsx)("li",{className:"nav__item",children:Object(h.jsx)(s.c,{to:"/t/".concat(e.slug),className:function(e){var t=e.isActive;return w()("nav__link",{"is-active":t})},children:e.name})},e.id)}))}),Object(h.jsx)("button",{className:"scroll-button scroll-button-right",onClick:function(){e.current&&e.current.scrollBy({left:300,behavior:"smooth"})},children:">"})]})]})},A=(n(52),n(32)),H=n.p+"static/media/burger.a1c19df9.svg",F=n.p+"static/media/logo-black.250c700c.svg",T=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(!1),r=Object(o.a)(c,2),u=r[0],j=r[1],b=Object(A.useMediaQuery)({query:"(max-width: 767px)"}),d=Object(i.o)();return Object(h.jsxs)("div",{className:"header__top",children:[Object(h.jsx)(s.b,{className:"header__logo",to:"/",children:Object(h.jsx)("img",{src:F,alt:"logo"})}),Object(h.jsx)("div",{className:"header__search control has-icons-left has-icons-right",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d("/s/photos/".concat(n)),a(""),j(!1)},children:[Object(h.jsx)("input",{type:"text",className:"input header__search-field",placeholder:b?"Search image":"Search high-resolution images",value:n,onChange:function(e){var t=e.target.value;a(t),j(!!t)}}),Object(h.jsx)("span",{className:"header__search-icon header__search-icon--left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon reset",children:u&&Object(h.jsx)("button",{type:"button",className:"delete","aria-label":"Clear search",onClick:function(){a(""),j(!1)}})}),Object(h.jsx)("span",{className:"header__search-icon header__search-icon--right",children:Object(h.jsx)("i",{className:"fa-sharp fa-solid fa-expand"})})]})}),Object(h.jsxs)("div",{className:"header__action-links",children:[Object(h.jsx)(s.b,{className:"header__auth",to:"/",children:"Log in"}),Object(h.jsx)("button",{className:"header__submit",type:"button",children:"Submit a photo"})]}),Object(h.jsx)("button",{className:"burger-menu",children:Object(h.jsx)("img",{src:H,alt:"burger_menu"})})]})},q=(n(53),function(){return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(T,{}),Object(h.jsx)(P,{})]})}),D=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(q,{}),Object(h.jsx)("main",{className:"main",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{path:"/",element:Object(h.jsx)(k,{})}),Object(h.jsx)(i.b,{path:"/home",element:Object(h.jsx)(i.a,{to:"/",replace:!0})}),Object(h.jsx)(i.b,{path:"/t/:collectionName",element:Object(h.jsx)(k,{})}),Object(h.jsx)(i.b,{path:"/photos/:id",element:Object(h.jsx)(k,{})}),Object(h.jsx)(i.b,{path:"/s/photos/:query",element:Object(h.jsx)(k,{})}),Object(h.jsx)(i.b,{path:"*",element:Object(h.jsx)(C,{})})]})})]})};c.a.render(Object(h.jsx)(s.a,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.c323d2a6.chunk.js.map