import{a as Y}from"./chunk-LTPBVJZH.js";import{a as D,b as F,c as Q,d as z,f as G,h as j,i as U,j as J,l as W}from"./chunk-RF2HPMBN.js";import{l as A}from"./chunk-AJYFC62G.js";import{a as $}from"./chunk-R447UYUS.js";import"./chunk-NI4CGMN2.js";import{g as k,h as N}from"./chunk-ZPOAEXIQ.js";import{c as R,d as q}from"./chunk-XBV2T4CO.js";import{Ab as C,Bb as c,Hb as B,Kb as M,La as n,Nb as d,Ob as p,W as _,Z as T,ab as v,cb as h,gb as w,gc as V,ha as x,ia as E,kb as r,lb as l,mb as y,pb as O,rb as S,sb as b,wb as I,xb as P,yb as L,zb as m}from"./chunk-4CAZKJUL.js";import"./chunk-CWTPBX7D.js";var K=["eyeIcon"],X=["inputPassword"],H=(t,g)=>({"is-valid":t,"is-invalid":g});function Z(t,g){t&1&&(r(0,"p",20),m(1),d(2,"translate"),l()),t&2&&(n(),C(p(2,1,"login.Email Is Required")))}function ee(t,g){t&1&&(r(0,"p",20),m(1),d(2,"translate"),l()),t&2&&(n(),C(p(2,1,"login.Enter Valid Email")))}function te(t,g){if(t&1&&(r(0,"div",11),v(1,Z,3,3,"p",20)(2,ee,3,3),l()),t&2){let o,a=b();n(),w(1,(o=a.loginForm.get("email"))!=null&&o.getError("required")?1:(o=a.loginForm.get("email"))!=null&&o.getError("email")?2:-1)}}function ie(t,g){t&1&&(r(0,"p",20),m(1),d(2,"translate"),l()),t&2&&(n(),C(p(2,1,"login.Password Is Required")))}function ne(t,g){t&1&&(r(0,"p",20),m(1),d(2,"translate"),l()),t&2&&(n(),C(p(2,1,"login.Enter Valid Password")))}function oe(t,g){if(t&1&&(r(0,"div",11),v(1,ie,3,3,"p",20)(2,ne,3,3),l()),t&2){let o,a=b();n(),w(1,(o=a.loginForm.get("password"))!=null&&o.getError("required")?1:(o=a.loginForm.get("password"))!=null&&o.getError("pattern")?2:-1)}}var he=(()=>{class t{constructor(){this._FormBuilder=_(J),this._AuthService=_($),this._Router=_(k),this._ToastrService=_(A),this.loginForm=this._FormBuilder.group({email:[null,[F.required,F.email]],password:[null,[F.required,F.pattern(/^\w{6,}$/)]]})}submitForms(){this.loginForm.valid&&(this.loggedForms=this._AuthService.setLoginForm(this.loginForm.value).subscribe({next:o=>{o.status==200&&(Y.userInfo=o.body.user,localStorage.setItem("userInfo",JSON.stringify(o.body.user)),localStorage.setItem("userToken",o.body.token),this._AuthService.setUserData(),this._Router.navigate(["/home"])),this._ToastrService.success("welcome to Fresh Cart")}}))}ngOnDestroy(){this.loggedForms?.unsubscribe()}showPassword(){this.eyeIcon.nativeElement.classList.contains("fa-eye-slash")?(this.eyeIcon.nativeElement.classList.remove("fa-eye-slash"),this.eyeIcon.nativeElement.classList.add("fa-eye"),this.inputPassword.nativeElement.setAttribute("type","text")):(this.eyeIcon.nativeElement.classList.add("fa-eye-slash"),this.eyeIcon.nativeElement.classList.remove("fa-eye"),this.inputPassword.nativeElement.setAttribute("type","password"))}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=T({type:t,selectors:[["app-login"]],viewQuery:function(a,e){if(a&1&&(I(K,5),I(X,5)),a&2){let i;P(i=L())&&(e.eyeIcon=i.first),P(i=L())&&(e.inputPassword=i.first)}},standalone:!0,features:[B],decls:35,vars:30,consts:[["inputPassword",""],["eyeIcon",""],[1,"bg-main-light","shadow","p-5","mt-5","rounded-4"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-6"],["src","./assets/images/login.png","alt","login-logo rounded-4",1,"w-100","rounded-4"],[1,"text-main","fw-bold"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","email"],["formControlName","email","id","email","type","text","placeholder","Email","dir","auto",1,"form-control",3,"ngClass"],[1,"alert","alert-danger"],[1,"my-2","position-relative"],["for","password"],["formControlName","password","id","password","type","password","placeholder","*****","dir","auto",1,"form-control",3,"ngClass"],[1,"eyeIcon",3,"click"],[1,"fa-regular","fa-eye-slash"],[1,"d-flex","flex-wrap-reverse","align-items-center","justify-content-between"],["routerLink","/forgotpass",1,"link-primary"],["type","submit",1,"btn-main","my-2","rounded-4",3,"disabled"],[1,"m-0"]],template:function(a,e){if(a&1){let i=O();r(0,"section",2)(1,"div",3)(2,"div",4),y(3,"img",5),l(),r(4,"div",4)(5,"h1",6),m(6),d(7,"translate"),l(),r(8,"p"),m(9),d(10,"translate"),l(),r(11,"form",7),S("ngSubmit",function(){return x(i),E(e.submitForms())}),r(12,"div",8)(13,"label",9),m(14),d(15,"translate"),l(),y(16,"input",10),v(17,te,3,1,"div",11),l(),r(18,"div",12)(19,"label",13),m(20),d(21,"translate"),l(),y(22,"input",14,0),r(24,"span",15),S("click",function(){return x(i),E(e.showPassword())}),y(25,"i",16,1),l(),v(27,oe,3,1,"div",11),l(),r(28,"div",17)(29,"a",18),m(30),d(31,"translate"),l(),r(32,"button",19),m(33),d(34,"translate"),l()()()()()()}if(a&2){let i,u,s,f;n(6),c(" ",p(7,12,"login.Sign in to FreshCart")," "),n(3),c(" ",p(10,14,"login.Welcome back to FreshCart! Enter your email to get started.")," "),n(2),h("formGroup",e.loginForm),n(3),c(" ",p(15,16,"login.email")," :"),n(2),h("ngClass",M(24,H,!((i=e.loginForm.get("email"))!=null&&i.errors)&&(((i=e.loginForm.get("email"))==null?null:i.touched)||((i=e.loginForm.get("email"))==null?null:i.dirty)),((i=e.loginForm.get("email"))==null?null:i.errors)&&(((i=e.loginForm.get("email"))==null?null:i.touched)||((i=e.loginForm.get("email"))==null?null:i.dirty)))),n(),w(17,(u=e.loginForm.get("email"))!=null&&u.errors&&((u=e.loginForm.get("email"))!=null&&u.touched||(u=e.loginForm.get("email"))!=null&&u.dirty)?17:-1),n(3),c(" ",p(21,18,"login.password")," :"),n(2),h("ngClass",M(27,H,!((s=e.loginForm.get("password"))!=null&&s.errors)&&(((s=e.loginForm.get("password"))==null?null:s.touched)||((s=e.loginForm.get("password"))==null?null:s.dirty)),((s=e.loginForm.get("password"))==null?null:s.errors)&&(((s=e.loginForm.get("password"))==null?null:s.touched)||((s=e.loginForm.get("password"))==null?null:s.dirty)))),n(5),w(27,(f=e.loginForm.get("password"))!=null&&f.errors&&((f=e.loginForm.get("password"))!=null&&f.touched||(f=e.loginForm.get("password"))!=null&&f.dirty)?27:-1),n(3),c(" ",p(31,20,"login.Forgot Your Password ?")," "),n(2),h("disabled",e.loginForm.invalid),n(),c(" ",p(34,22,"auth.Sign In")," ")}},dependencies:[W,G,D,Q,z,j,U,V,N,q,R],styles:[".form-control[_ngcontent-%COMP%]:focus{box-shadow:5px 5px var(--main-color);border-color:var(--main-color)}[_ngcontent-%COMP%]::placeholder{color:var(--main-color)}.eyeIcon[_ngcontent-%COMP%]{position:absolute;top:50%;right:1.875rem;cursor:pointer}@media (max-width: 400px){h1[_ngcontent-%COMP%]{font-size:19px}p[_ngcontent-%COMP%]{font-size:10px!important}}@media (max-width: 767px){.row[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}p[_ngcontent-%COMP%]{font-size:.875rem}button[_ngcontent-%COMP%]{width:100%}}@media (min-width: 767px) and (max-width: 1025px){.row[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse}h1[_ngcontent-%COMP%]{font-size:1.875rem}p[_ngcontent-%COMP%]{font-size:.9375rem}button[_ngcontent-%COMP%]{width:100%}}"]})}}return t})();export{he as LoginComponent};
