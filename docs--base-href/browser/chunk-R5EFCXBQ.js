import{a as _}from"./chunk-DNJGUD76.js";import"./chunk-NI4CGMN2.js";import{e as b}from"./chunk-ZPOAEXIQ.js";import{c as D,d as S}from"./chunk-XBV2T4CO.js";import{Ab as C,Bb as v,Ga as d,Hb as y,La as n,Nb as h,Ob as x,W as r,Z as c,ab as m,cb as p,gb as g,kb as s,lb as o,mb as u,sb as f,zb as l}from"./chunk-4CAZKJUL.js";import"./chunk-CWTPBX7D.js";function M(e,T){if(e&1&&(s(0,"section",0)(1,"h1"),l(2),h(3,"translate"),o(),s(4,"div",1)(5,"div",2)(6,"div"),u(7,"img",3),o()(),s(8,"div",2)(9,"div")(10,"h1",4),l(11),o()()()()()),e&2){let t=f();n(2),v("",x(3,4,"DetailsCategory.Details Category")," :"),n(5),p("src",t.detailsCategory.image,d)("alt",t.detailsCategory.name),n(4),C(t.detailsCategory.name)}}var O=(()=>{class e{constructor(){this._ActivatedRoute=r(b),this._CategoriesService=r(_),this.detailsCategory=null}ngOnInit(){this.detailsParams=this._ActivatedRoute.paramMap.subscribe({next:t=>{let i=t.get("id");this.details=this._CategoriesService.getSpecificCatrgory(i).subscribe({next:a=>{a.status==200&&(this.detailsCategory=a.body.data)}})}})}ngOnDestroy(){this.details?.unsubscribe(),this.detailsParams?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=c({type:e,selectors:[["app-detailscategories"]],standalone:!0,features:[y],decls:1,vars:1,consts:[[1,"mt-5"],[1,"row","align-items-center","flex-column"],[1,"col-md-6"],[1,"w-100",3,"src","alt"],[1,"text-main","text-center"]],template:function(i,a){i&1&&m(0,M,12,6,"section",0),i&2&&g(0,a.detailsCategory?0:-1)},dependencies:[S,D]})}}return e})();export{O as DetailscategoriesComponent};
