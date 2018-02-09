import 'whatwg-fetch';
export default class RestApi {

    constructor(){

    }

    static instance = null ;

    static getInstance(){
        if(RestApi.instance){
            return RestApi.instance;
        }
        RestApi.instance = new RestApi();
        return RestApi.instance;
    }

    GetToken(){
        return this.loggedInToken;
    }

    setLoginToken(token){
        this.loggedInToken = token;
    }

    Get(endpointUrl,searchRestrictions){

        var queryRestrictions = '';

        for(let key in searchRestrictions) {
            if (searchRestrictions[key]) {
                queryRestrictions = queryRestrictions+ key+'='+searchRestrictions[key] + '&';
            }
        }
        let path = endpointUrl +'?'+ queryRestrictions;
        let header = this.GetHeader();
        return new Promise(function(resolve,reject){
            fetch(path,{
                method:'GET',
                headers: header,
                body:null
            }
          ).then(function(response){
              response.json().then((responseJson)=>{
                  if(response.ok){
                      resolve(responseJson);
                  }else{
                      reject(responseJson);
                  }
              }).catch((error)=>{
                  reject(error);
              });
          }).catch((error)=>{
              reject(error);
          });
        });

    }

    Post(endpointUrl,options){
        let header = this.GetHeader();
        return new Promise(function(resolve,reject){
            fetch(endpointUrl,{
                method:'POST',
                headers: header,
                body:options
            }).then(function(response){
                response.json().then((responseJson)=>{
                    if(response.ok){
                        resolve(responseJson);
                    }else{
                        reject(responseJson);
                    }
                }).catch((error)=>{
                    if(response.ok)
                    {
                        resolve(response);
                    }else{
                        reject(error);
                    }
                });
            }).catch((error)=>{
                reject(error);
            });
        });
    }


    GetHeader(){
        if(this.loggedInToken != null ){
            return {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.GetToken()
            };

        }else{
            return {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

        }
    }


}
