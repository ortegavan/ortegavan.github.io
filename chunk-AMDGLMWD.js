import{E as a,a as p}from"./chunk-5FKX4UOG.js";import{R as i,X as r}from"./chunk-NMSGTUAE.js";var s=class t{httpClient=r(p);apiBaseUrl=a.apiBaseUrl;get(){return this.httpClient.get(`${this.apiBaseUrl}/api/v1/recipes`)}getById(e){return this.httpClient.get(`${this.apiBaseUrl}/api/v1/recipes/${e}`)}search(e){return this.httpClient.get(`${this.apiBaseUrl}/api/v1/recipes`,{params:{search:e}})}static \u0275fac=function(c){return new(c||t)};static \u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})};export{s as a};
