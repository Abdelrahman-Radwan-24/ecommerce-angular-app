import{a as r}from"./chunk-NI4CGMN2.js";import{Q as i,V as o,rc as n}from"./chunk-4CAZKJUL.js";var l=(()=>{class t{constructor(e){this._HttpClient=e}getAllCategories(){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories`,{observe:"response"})}getSpecificCatrgory(e){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories/${e}`,{observe:"response"})}static{this.\u0275fac=function(s){return new(s||t)(o(n))}}static{this.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{l as a};
