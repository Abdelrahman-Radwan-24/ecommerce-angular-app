import './polyfills.server.mjs';
import{b as O,c as u,d as h}from"./chunk-JLIJJ3UE.mjs";import{Db as c,Dc as g,Eb as m,Fb as d,Lb as M,Pa as r,Q as f,Rb as l,Sb as p,Ua as C,W as s,_,ob as a,pb as n,qb as o,ta as P}from"./chunk-Q4WC6RBB.mjs";var b=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=_({type:t,selectors:[["app-footer"]],standalone:!0,features:[M],decls:37,vars:15,consts:[[1,"bg-main-light","py-5"],[1,"container"],[1,"m-0","h4"],[1,"text-muted","small"],["id","input",1,"d-flex","align-items-center","gap-3","text-nowrap"],["type","text","placeholder","Email...","dir","auto",1,"form-control"],[1,"btn-main","rounded-4"],[1,"pay-details","d-flex","justify-content-between","align-items-center"],[1,"amazon-pay","d-flex","align-items-center","gap-2"],[1,"h6","m-0"],["src","./assets/images/amazon-pay.png","width","30px","alt","amazon-pay"],["src","./assets/images/American-Express-Color.png","width","30px","alt","American-Express"],["src","./assets/images/paypal.png","width","30px","alt","paypal"],["src","./assets/images/mastercard.webp","width","30px","alt","mastercard"],[1,"apple","d-flex","align-items-center","gap-2"],["src","./assets/images/get-google-play.png","width","75px","alt","get-google-play"],["src","./assets/images/get-apple-store.png","width","75px","alt","get-apple-store"],[1,"nav-menu","d-flex","align-items-center","justify-content-center","gap-5"],[1,"fa-brands","fa-instagram","c-p","ms-3"],[1,"fa-brands","fa-facebook","c-p"],[1,"fa-brands","fa-tiktok","c-p"],[1,"fa-brands","fa-twitter","c-p"],[1,"fa-brands","fa-linkedin","c-p"],[1,"fa-brands","fa-youtube","c-p"]],template:function(i,y){i&1&&(a(0,"footer",0)(1,"div",1)(2,"h2",2),c(3),l(4,"translate"),n(),a(5,"p",3),c(6),l(7,"translate"),n(),a(8,"div",4),o(9,"input",5),a(10,"button",6),c(11),l(12,"translate"),n()(),o(13,"hr"),a(14,"div",7)(15,"div",8)(16,"h3",9),c(17),l(18,"translate"),n(),o(19,"img",10)(20,"img",11)(21,"img",12)(22,"img",13),n(),a(23,"div",14)(24,"h3",9),c(25),l(26,"translate"),n(),o(27,"img",15)(28,"img",16),n()(),o(29,"hr"),a(30,"div",17),o(31,"i",18)(32,"i",19)(33,"i",20)(34,"i",21)(35,"i",22)(36,"i",23),n()()()),i&2&&(r(3),m(p(4,5,"footer.Get The FreshCart App")),r(3),d(" ",p(7,7,"footer.We Will Send You a Link, Open it on Your Phone to download the app")," "),r(5),d(" ",p(12,9,"footer.Share App Link")," "),r(6),m(p(18,11,"footer.Payment partners")),r(8),d(" ",p(26,13,"footer.Get Deliveries with FreshCart")," "))},dependencies:[h,u],styles:[".form-control[_ngcontent-%COMP%]:focus{box-shadow:5px 5px var(--main-color);border-color:var(--main-color)}[_ngcontent-%COMP%]::placeholder{color:var(--main-color)}.nav-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:color .5s}.nav-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--main-color)}@media (max-width: 500px){.nav-menu[_ngcontent-%COMP%]{gap:15px!important}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #input[_ngcontent-%COMP%]{flex-wrap:wrap}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pay-details[_ngcontent-%COMP%]{display:flex;flex-direction:column}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pay-details[_ngcontent-%COMP%]   .amazon-pay[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pay-details[_ngcontent-%COMP%]   .amazon-pay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;text-align:center}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pay-details[_ngcontent-%COMP%]   .apple[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pay-details[_ngcontent-%COMP%]   .apple[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;text-align:center}}@media (min-width: 500px) and (max-width: 775px){footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{width:100%}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #input[_ngcontent-%COMP%]{flex-wrap:wrap}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .pay-details[_ngcontent-%COMP%]{display:flex;flex-direction:column}}"]})}}return t})();var L=(()=>{class t{constructor(){this._TranslateService=s(O),this._PLATFORM_ID=s(P),this._RendererFactory2=s(C).createRenderer(null,null),g(this._PLATFORM_ID)&&(this._TranslateService.setDefaultLang("en"),this.setLang())}setLang(){let e=localStorage.getItem("lang");e!=null&&this._TranslateService.use(e),e==="en"?(this._RendererFactory2.setAttribute(document.documentElement,"dir","ltr"),this._RendererFactory2.setAttribute(document.documentElement,"lang","en")):e==="ar"&&(this._RendererFactory2.setAttribute(document.documentElement,"dir","rtl"),this._RendererFactory2.setAttribute(document.documentElement,"lang","ar"))}changeLang(e){g(this._PLATFORM_ID)&&(localStorage.setItem("lang",e),this.setLang())}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{L as a,b};
