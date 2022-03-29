/*! For license information please see 788.88f55587.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcustom_threads=self.webpackChunkcustom_threads||[]).push([[788],{5648:function(e,n,r){r.d(n,{Z:function(){return E}});var t,i,o,a,c,s=r(885),l=r(2791),u=r(6030),d=r(501),h=r(6871),m=r(4700),p=r(168),v=r(5751),f=v.ZP.aside(t||(t=(0,p.Z)(["\n  position: absolute;\n  top: 80%;\n  z-index: 10;\n  max-width: 40vw;\n  height: auto;\n  background: ",";\n"])),(function(e){return e.theme.colors.mainBg})),g=r(184),x=function(e){var n=e.children;return(0,g.jsx)(f,{children:n})},b=function(e){var n=e.children;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(x,{children:n})})},j=l.memo(b),y=function(e){var n=(0,u.I0)(),r="string"===typeof e,t=(0,l.useState)(""),i=(0,s.Z)(t,2),o=i[0],a=i[1],c=(0,u.v9)((function(e){return e.data.activeFilters})),d=(0,u.v9)((function(e){return e.data.activePrice})),h=r?c.includes(e):d===e;(0,l.useEffect)((function(){a(r?h:d)}),[e,h,d,r]);var p=(0,l.useCallback)((function(){r&&!h&&n(m.J.addFilter(e)),r&&h&&n(m.J.removeFilter(e))}),[n,e,h,r]),v=(0,l.useCallback)((function(r){"number"===typeof e&&(a(+r.target.value),n(m.J.setFilterPrice(+r.target.value)))}),[n,e]);return r?[o,p]:[o,v]},k=r(5338),w=r(7055),N=v.ZP.form(i||(i=(0,p.Z)(["\n  position: absolute;\n  z-index: 20;\n  padding: 1.25rem;\n  margin-top: 3vh;\n  left: -2vw;\n  gap: 3rem;\n  padding: 3rem;\n  border-radius: 1.25rem;\n  ",";\n  background: rgba(",", 0.95);\n\n  & > h3 {\n    font-weight: 500;\n  }\n  & > div {\n    width: 100%;\n    position: relative;\n    ","\n  }\n  label {\n    ","\n  }\n  .price > label {\n    font-size: 2rem;\n  }\n  .selected-price {\n    font-size: 2rem;\n    font-weight: 500;\n  }\n"])),(0,k.Zv)("center","flex-start","column"),(function(e){return e.theme.colors.cardBgRGB}),(0,k.Zv)("space-between","center","row"),w.yI),C=r(5681),B=r(9126),Z=v.ZP.div(o||(o=(0,p.Z)(["\n  padding: "," ",";\n  gap: ",";\n\n  input[type='checkbox'] {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n  }\n  .checkbox {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 3rem;\n    width: 3rem;\n    border: 1px solid ",";\n    background: ",";\n    transition: all 50ms linear;\n    svg {\n      ",";\n    }\n  }\n  @media (hover: hover) {\n    .checkbox:hover {\n      background: rgba(",", 0.75);\n      border: none;\n    }\n  }\n  .checkbox--active {\n    background: rgba(",", 0.95);\n    svg {\n      color: ",";\n    }\n  }\n"])),(function(e){return e.p||"1.25rem"}),(0,k.Zv)("center","flex-start","column"),(function(e){return e.gap||"2rem"}),(function(e){return e.theme.colors.davysGrayCta}),(function(e){return e.theme.colors.mainBg}),k.Xe,(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.mainBg})),P=function(e){var n=e.children,r=e.value,t=e.onValueChange;return(0,g.jsxs)(Z,{onClick:t,children:[(0,g.jsx)("label",{children:n}),(0,g.jsx)("input",{type:"checkbox"}),(0,g.jsx)("span",{className:"checkbox ".concat(r?"checkbox--active":""),"aria-hidden":"true",children:r&&(0,g.jsx)(B.oFd,{})})]})},R=l.memo(P),I=(0,v.iv)(a||(a=(0,p.Z)(["\n  & {\n    -webkit-appearance: none;\n    width: 100%;\n    background: transparent;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n  &::-moz-range-thumb {\n    border: none;\n    border-radius: 0;\n  }\n"]))),S=v.ZP.input(c||(c=(0,p.Z)(["\n  ","\n\n  /* Chromium */\n  &::-webkit-slider-runnable-track {\n    background: rgba(",", 1);\n    height: 1rem;\n    border-radius: 0.5rem;\n  }\n  &::-webkit-progress-value {\n    background: rgba(",", 1);\n  }\n\n  &::-webkit-slider-thumb {\n    appearance: none;\n    margin-top: -0.85rem;\n    background-color: ",";\n    height: 3rem;\n    width: 1rem;\n    border-radius: 0.5rem;\n    outline: 1px solid ",";\n    border: 1px solid ",";\n  }\n  &:focus::-webkit-slider-thumb,\n  &:hover::-webkit-slider-thumb {\n    outline: 1.5px solid ",";\n  }\n\n  /* FF */\n  &::-moz-range-track {\n    background: rgba(",", 0.45);\n    height: 1rem;\n    border-radius: 0.5rem;\n  }\n  &::-moz-range-progress {\n    background: rgba(",", 1);\n    height: 1rem;\n  }\n  &::-moz-range-thumb {\n    background-color: ",";\n    height: 2rem;\n    width: 1rem;\n    border-radius: 0.5rem;\n    outline: 1px solid ",";\n  }\n  &:focus::-moz-range-thumb,\n  &:hover::-moz-range-thumb {\n    outline: 1.5px solid ",";\n    /* IE */\n    &::-ms-fill-lower {\n      background: rgba(",", 0.45);\n    }\n    &::-ms-fill-upper {\n      background: rgba(",", 1);\n    }\n  }\n"])),I,(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.mainBg}),(function(e){return e.theme.colors.ctaEerieBlack}),(function(e){return e.theme.colors.ctaEerieBlack}),(function(e){return e.theme.colors.ctaEerieBlack}),(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.mainBg}),(function(e){return e.theme.colors.ctaEerieBlack}),(function(e){return e.theme.colors.ctaEerieBlack}),(function(e){return e.theme.colors.activeNavRGB}),(function(e){return e.theme.colors.activeNavRGB})),z=r(1764),F=function(){var e=(0,u.I0)(),n=y("men's clothing"),r=(0,s.Z)(n,2),t=r[0],i=r[1],o=y("women's clothing"),a=(0,s.Z)(o,2),c=a[0],l=a[1],d=y("jewelery"),h=(0,s.Z)(d,2),p=h[0],v=h[1],f=y("electronics"),x=(0,s.Z)(f,2),b=x[0],j=x[1],k=y(1e3),w=(0,s.Z)(k,2),B=w[0],Z=w[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(N,{onSubmit:function(n){n.preventDefault();var r=(0,z.zi)({status:t,id:"men's clothing"},{status:c,id:"women's clothing"},{status:p,id:"jewelery"},{status:b,id:"electronics"});e(m.J.filterByCategory({filters:r,price:B}))},children:[(0,g.jsx)("h3",{children:"By Category"}),(0,g.jsx)(R,{value:t,onValueChange:i,children:"Men"}),(0,g.jsx)(R,{value:c,onValueChange:l,children:"Women"}),(0,g.jsx)(R,{value:p,onValueChange:v,children:"Jewelry"}),(0,g.jsx)(R,{value:b,onValueChange:j,children:"Electronics"}),(0,g.jsx)("h3",{children:"By Price"}),(0,g.jsxs)("div",{className:"price",children:[(0,g.jsx)("label",{children:"Price:"}),(0,g.jsxs)("p",{className:"selected-price",children:["$ ",B]})]}),(0,g.jsx)(S,{onChange:Z,type:"range",min:"100",max:"1000",step:"100",value:B}),(0,g.jsx)(C.dI,{type:"submit",p:"1.25rem 4rem",alignSelf:"center",children:"Search"})]})})},V=r(1172),M=r(8820),L={justify:"space-between",align:"center",dir:"row"},A={justify:"flex-end",align:"center",dir:"row"},E=function(){var e=(0,l.useState)(!1),n=(0,s.Z)(e,2),r=n[0],t=n[1],i=(0,d.lr)(),o=(0,s.Z)(i,2),a=o[0],c=o[1],p=(0,h.TH)(),v=(0,u.I0)(),f=(0,u.v9)((function(e){return e.data.filtered})),x=new URLSearchParams(p.search).get("sort"),b="asc"===x,y=p.pathname.replace("/",""),k="home"===y,w=f.length<19,N=x&&(b?(0,g.jsx)(M.w4J,{}):(0,g.jsx)(M.N9e,{})),Z=x?"Sort":"Sort by price";return(0,l.useEffect)((function(){x&&v(m.J.sortByPrice({sort:a.get("sort"),slice:"home"===y?"filtered":"products"}))}),[x,v,y,a]),(0,g.jsxs)(V.yY,{sticky:k,flexSettings:k?L:A,children:[k&&(0,g.jsxs)(V.Zb,{p:"1rem",customMargin:"0%",className:"filters",children:[(0,g.jsxs)(C.nf,{onClick:function(){t((function(e){return!e}))},className:"".concat(w?"active":""),title:"Filter by category & price",children:[(0,g.jsx)("span",{className:"icon",children:(0,g.jsx)(B.ssz,{})}),(0,g.jsx)("span",{className:"text",children:w?"Filters are active":"Filters"})]}),w&&(0,g.jsx)(C.nf,{onClick:function(){v(m.J.resetFilters()),t(!1)},children:(0,g.jsx)("span",{className:"text",children:"Reset Filters"})})]}),r&&(0,g.jsx)(j,{children:(0,g.jsx)(F,{})}),(0,g.jsx)(V.Zb,{sticky:!0,p:"1rem",customMargin:"0%",children:(0,g.jsxs)(C.nf,{onClick:function(){c("?sort=".concat(b?"desc":"asc"))},title:x&&"Sort by ".concat(b?"descending":"ascending"," price"),children:[(0,g.jsx)("span",{className:"text",children:Z}),(0,g.jsx)("span",{className:"icon smallIcon",children:N})]})})]})}},9398:function(e,n,r){var t=r(9842),i=r(5681),o=r(8820),a=r(6375),c=r(184);n.Z=function(e){var n=e.product,r=e.onAddItem,s=e.onGoBack,l=e.isDetails,u=e.asElement;if(!n)return(0,c.jsx)("p",{});var d=n.price.toFixed(2),h=(0,c.jsxs)(i.Fg,{to:"/product-details/product-".concat(n.id),children:[(0,c.jsx)("span",{children:"See more"}),(0,c.jsx)("span",{className:"smallIcon",children:(0,c.jsx)(o.Zju,{})})]}),m=(0,c.jsxs)(i.nf,{onClick:s,as:"a",title:"Go back",children:[(0,c.jsx)("span",{className:"icon smallIcon",children:(0,c.jsx)(o.kyg,{})}),(0,c.jsx)("span",{className:"text",children:"Take me back"})]}),p=(0,c.jsxs)("div",{className:"details",children:[(0,c.jsx)(a.i,{className:"rating",initialValue:n.rating.rate,fullStyle:{height:"auto"},emptyStyle:{height:"auto"},style:{width:"auto",height:"auto"},size:14,allowHalfIcon:!0,tooltipArray:["".concat(n.rating.count," votes")],showTooltip:!1,readonly:!0}),(0,c.jsxs)("p",{className:"price",children:["$",d]})]}),v=l?(0,c.jsx)("h2",{title:n.title,children:n.title}):(0,c.jsx)("div",{className:"product-desc",children:(0,c.jsx)("h3",{title:n.title,children:n.title})});return(0,c.jsxs)(t.q,{isDetails:l,as:u||"li",p:"1rem",children:[(0,c.jsx)("div",{className:"img-wrapper",children:(0,c.jsx)("img",{src:n.image,alt:"".concat(n.title," visual placeholder")})}),(0,c.jsxs)(t.K,{isDetails:l,className:"description",as:"article",children:[(0,c.jsxs)("div",{className:"info-wrapper",children:[v,l&&(0,c.jsx)("p",{className:"prod-desc",children:n.description}),l?p:(0,c.jsxs)("p",{className:"price",children:["$",d]})]}),(0,c.jsxs)("div",{className:"cta-wrapper",children:[(0,c.jsx)(i.dI,{ctaAltHover:!0,onClick:r.bind(null,n),title:"Add this item to your cart",children:"Add to Cart"}),!l&&h,l&&m]})]})]})}},7048:function(e,n,r){var t=r(6030),i=r(8815),o=r(9398),a=r(7237),c=r(184),s={cols:"1fr",rows:"auto",gap:"3rem"};n.Z=function(e){var n=e.products,r=(0,t.I0)(),l=function(e){var n=e.id,t=e.title,o=e.price,a=e.image;r(i.U.addItem({id:n,title:t,price:o,image:a}))};return(0,c.jsx)(a.PP,{className:"products",as:"ul",gridSettings:s,children:n.map((function(e){return(0,c.jsx)(o.Z,{product:e,onAddItem:l},e.id)}))})}},7165:function(e,n,r){var t=r(6030),i=r(184);n.Z=function(e){return function(n){var r=n.retrieveID,o=(0,t.v9)((function(e){return e.data.products})),a=(0,t.v9)((function(e){return e.data.filtered})),c=r?o.filter((function(e){return e.category===r})):a;return(0,i.jsx)(e,{products:c})}}},1588:function(e,n,r){var t=r(7237),i=r(1172),o=r(184);n.Z=function(e){var n=e.customClass,r=e.parentClass,a=e.content,c=e.alt,s=e.customBg,l=e.customClr,u=e.rowReverse,d="imgURL2"in a;return(0,o.jsx)(t.p1,{className:r,customBg:s,customClr:l,rowReverse:u,children:(0,o.jsxs)("article",{className:n,children:[d&&(0,o.jsx)(i.fe,{className:"img-cont2",children:(0,o.jsx)("img",{className:"extra-image",src:a.imgURL2,alt:c})}),(0,o.jsxs)("div",{className:"text-wrapper",children:[(0,o.jsx)("h2",{children:a.header}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:a.subheader1}),a.subheader2&&(0,o.jsx)("span",{children:a.subheader2})]})]}),(0,o.jsx)(i.fe,{className:"img-cont",children:(0,o.jsx)("img",{src:a.imgURL,alt:c})})]})})}},6375:function(e,n,r){var t=r(184),i=r(2791);var o=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(i),a=function(){return(a=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};function c(e,n,r){if(r||2===arguments.length)for(var t,i=0,o=n.length;i<o;i++)!t&&i in n||(t||(t=Array.prototype.slice.call(n,0,i)),t[i]=n[i]);return e.concat(t||n)}function s(e){var n=e.size,r=void 0===n?25:n,i=e.strokeColor,o=void 0===i?"none":i,c=e.storkeWidth,s=void 0===c?0:c,l=e.className,u=void 0===l?"star-svg":l,d=e.style;return t.jsx("svg",a({fill:"currentColor",width:r,height:r,viewBox:"0 0 24 24",className:u,style:a({},d)},{children:t.jsx("path",{fill:"currentColor",stroke:o,strokeMiterlimit:"10",strokeWidth:s,d:"M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"},void 0)}),void 0)}var l=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0};function u(e,n){switch(n.type){case"PointerMove":return a(a({},e),{hoverValue:n.payload});case"PointerLeave":return{defaultValue:e.defaultValue,hoverValue:null};case"MouseClick":return a(a({},e),{defaultValue:n.payload});default:return e}}n.i=function(e){var n,r,d=e.onClick,h=e.initialValue,m=void 0===h?0:h,p=e.ratingValue,v=void 0===p?0:p,f=e.iconsCount,g=void 0===f?5:f,x=e.size,b=void 0===x?40:x,j=e.readonly,y=void 0!==j&&j,k=e.fillColor,w=void 0===k?"#ffbc0b":k,N=e.fillColorArray,C=void 0===N?[]:N,B=e.emptyColor,Z=void 0===B?"#cccccc":B,P=e.fullIcon,R=void 0===P?null:P,I=e.emptyIcon,S=void 0===I?null:I,z=e.customIcons,F=void 0===z?[]:z,V=e.rtl,M=void 0!==V&&V,L=e.allowHalfIcon,A=void 0!==L&&L,E=e.allowHover,G=void 0===E||E,J=e.transition,T=void 0!==J&&J,D=e.className,H=void 0===D?"react-simple-star-rating":D,U=e.style,O=e.fullClassName,W=void 0===O?"filled-icons":O,$=e.emptyClassName,X=void 0===$?"empty-icons":$,Y=e.fullStyle,_=e.emptyStyle,q=e.showTooltip,K=void 0!==q&&q,Q=e.tooltipDefaultText,ee=void 0===Q?"Your Rate":Q,ne=e.tooltipArray,re=void 0===ne?[]:ne,te=e.tooltipClassName,ie=void 0===te?"react-simple-star-rating-tooltip":te,oe=e.tooltipStyle,ae=i.useReducer(u,{defaultValue:v,hoverValue:null}),ce=ae[0],se=ce.defaultValue,le=ce.hoverValue,ue=ae[1];o.default.useEffect((function(){return ue({type:"MouseClick",payload:v})}),[v]);var de=function(e){var n=e.clientX,r=e.currentTarget.children[0].getBoundingClientRect(),t=r.left,i=r.right,o=r.width,a=function(e,n,r){for(var t=100/e,i=r/e,o=100,a=0;a<e;a+=1)if(n<=i*a+i/4){o=0===a&&n<i/2?0:t*a;break}return o}(ve,M?i-n:n-t,o);a>0&&le!==a&&ue({type:"PointerMove",payload:a})},he=function(){le&&(ue({type:"MouseClick",payload:le}),d&&d(le))},me=i.useMemo((function(){return Math.round(m/g*100)}),[m,g]),pe=i.useMemo((function(){return G&&le&&le||se&&se||me}),[G,le,se,me]),ve=i.useMemo((function(){return A?2*g:g}),[A,g]),fe=i.useCallback((function(e){var n=1;return e&&(n=A?e/ve:e/2/10),Math.round(n-1)}),[A,ve]),ge=i.useCallback((function(e){return A?e/2/10:fe(e)+1}),[A,fe]),xe=function(e){return re.length>0?re[fe(e)]:ge(e)||0};return t.jsxs("span",a({style:{display:"inline-block",direction:"".concat(M?"rtl":"ltr"),touchAction:"none"}},{children:[t.jsxs("span",a({className:H,style:a({position:"relative",display:"inline-block",overflow:"hidden",whiteSpace:"nowrap",cursor:y?"":"pointer",verticalAlign:"middle",userSelect:"none"},U),onPointerMove:y?void 0:de,onPointerEnter:y?void 0:function(e){l()&&de(e)},onPointerLeave:y?void 0:function(){l()&&he(),ue({type:"PointerLeave"})},onClick:y?void 0:he,"aria-hidden":"true"},{children:[t.jsx("span",a({className:X,style:a({display:"inline-block",color:Z},_)},{children:c([],Array(g),!0).map((function(e,n){var r;return t.jsx(i.Fragment,{children:(null===(r=F[n])||void 0===r?void 0:r.icon)||S||t.jsx(s,{size:b},n)},n)}))}),void 0),t.jsx("span",a({className:W,style:a((n={position:"absolute",top:0},n[M?"right":"left"]=0,n.color=G&&le&&C[fe(le)]||se&&C[fe(se)]||w,n.overflow="hidden",n.whiteSpace="nowrap",n.display="inline-block",n.transition=T?"width .2s ease, color .2s ease":"",n.width="".concat(pe,"%"),n),Y),title:"".concat(le&&ge(le)||ge(me)," out of ").concat(g)},{children:c([],Array(g),!0).map((function(e,n){var r;return t.jsx(i.Fragment,{children:(null===(r=F[n])||void 0===r?void 0:r.icon)||R||t.jsx(s,{size:b},void 0)},n)}))}),void 0)]}),void 0),K&&t.jsx("span",a({className:ie,style:a((r={display:"inline-block",padding:"5px 15px",backgroundColor:"#333",color:"#fff"},r[M?"marginRight":"marginLeft"]=20,r.verticalAlign="middle",r.borderRadius=5,r),oe)},{children:le&&xe(le)||se&&xe(se)||me&&xe(me)||ee}),void 0)]}),void 0)}}}]);
//# sourceMappingURL=788.88f55587.chunk.js.map