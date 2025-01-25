import './polyfills.server.mjs';
import{a}from"./chunk-CBYSDMSX.mjs";import{k as u}from"./chunk-MIFLSWE4.mjs";import{Ic as l,Q as c,W as i}from"./chunk-Q4WC6RBB.mjs";var s=class extends Error{};s.prototype.name="InvalidTokenError";function f(t){return decodeURIComponent(atob(t).replace(/(.)/g,(r,e)=>{let o=e.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}function h(t){let r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(r)}catch{return atob(r)}}function d(t,r){if(typeof t!="string")throw new s("Invalid token specified: must be a string");r||(r={});let e=r.header===!0?0:1,o=t.split(".")[e];if(typeof o!="string")throw new s(`Invalid token specified: missing part #${e+1}`);let p;try{p=h(o)}catch(n){throw new s(`Invalid token specified: invalid base64 for part #${e+1} (${n.message})`)}try{return JSON.parse(p)}catch(n){throw new s(`Invalid token specified: invalid json for part #${e+1} (${n.message})`)}}var y=(()=>{class t{constructor(){this.userData={},this._HttpClient=i(l),this._Router=i(u)}setRegisterForm(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/signup`,e,{observe:"response"})}setLoginForm(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/signin`,e,{observe:"response"})}setUserData(){localStorage.getItem("userToken")!==null&&localStorage.getItem("userToken")!==void 0&&(this.userData=d(localStorage.getItem("userToken")))}logOut(){localStorage.clear(),this.userData={},this._Router.navigate(["/login"])}forgotPassword(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/forgotPasswords`,e,{observe:"response"})}VerifyResetCode(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/verifyResetCode`,e,{observe:"response"})}resetNewPassword(e){return this._HttpClient.put(`${a.baseUrl}/api/v1/auth/resetPassword`,e,{observe:"response"})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{y as a};
