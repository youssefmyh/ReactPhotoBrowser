
import globals from '../SDKConstant';
import RestApi from '../RestApi';
import PhotoResponse from '../models/PhotoResponse';

export default class PhotoService{

    static instance = null;

    static getInstance(){

        if(PhotoService.instance != null){

            return PhotoService.instance;
        }

        PhotoService.instance = new PhotoService();

        return PhotoService.instance;
    }

    constructor(){
      //  console.log('from PhotoService');

    }

    GetPhotosList(){
        return new Promise(function(PhotoPage,_reject){
            var endpointUrl = globals.PHOTOS_URL;
            var body = {};
            RestApi.getInstance().Get(endpointUrl,body)
            .then(function(response){

                var response = new PhotoResponse(response);
                PhotoPage(response);

            },function(error){
                _reject(error);
            });
        });

    }


}
