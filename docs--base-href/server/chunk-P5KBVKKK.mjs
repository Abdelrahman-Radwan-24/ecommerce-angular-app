import './polyfills.server.mjs';
import{a as e}from"./chunk-CBYSDMSX.mjs";import{Ic as n,Q as o,W as i,_a as a}from"./chunk-Q4WC6RBB.mjs";var b=(()=>{class r{constructor(){this._HttpClient=i(n),this.cartNumber=a(0)}addProductToCart(t){return this._HttpClient.post(`${e.baseUrl}/api/v1/cart`,{productId:t},{observe:"response"})}getProductsCart(){return this._HttpClient.get(`${e.baseUrl}/api/v1/cart`,{observe:"response"})}removeSpecificCartItem(t){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart/${t}`,{observe:"response"})}updateProductCart(t,s){return this._HttpClient.put(`${e.baseUrl}/api/v1/cart/${t}`,{count:s},{observe:"response"})}clearUserCart(){return this._HttpClient.delete(`${e.baseUrl}/api/v1/cart`,{observe:"response"})}static{this.\u0275fac=function(s){return new(s||r)}}static{this.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{b as a};
