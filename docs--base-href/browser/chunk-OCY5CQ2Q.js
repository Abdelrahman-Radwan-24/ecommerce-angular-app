import{a as i}from"./chunk-NI4CGMN2.js";import{Q as s,W as r,Wa as o,rc as n}from"./chunk-4CAZKJUL.js";var m=(()=>{class t{constructor(){this._HttpClient=r(n),this.countWishlist=o([])}addProductToWishlist(e){return this._HttpClient.post(`${i.baseUrl}/api/v1/wishlist`,{productId:e},{observe:"response"})}getLoggedUserWishlist(){return this._HttpClient.get(`${i.baseUrl}/api/v1/wishlist`,{observe:"response"})}RemoveProductFromWishlist(e){return this._HttpClient.delete(`${i.baseUrl}/api/v1/wishlist/${e}`,{observe:"response"})}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{m as a};
