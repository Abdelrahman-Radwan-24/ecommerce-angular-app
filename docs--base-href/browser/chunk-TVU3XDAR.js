import{a as s}from"./chunk-NI4CGMN2.js";import{Q as o,W as i,rc as n}from"./chunk-4CAZKJUL.js";var u=(()=>{class r{constructor(){this._HttpClient=i(n)}cashOrder(e,t){return this._HttpClient.post(`${s.baseUrl}/api/v1/orders/${e}`,{shippingAddress:t},{observe:"response"})}onlineOrder(e,t){return this._HttpClient.post(`${s.baseUrl}/api/v1/orders/checkout-session/${e}?url=${s.urlServer}`,{shippingAddress:t},{observe:"response"})}getUserOrders(e){return this._HttpClient.get(`${s.baseUrl}/api/v1/orders/user/${e}`,{observe:"response"})}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{u as a};
