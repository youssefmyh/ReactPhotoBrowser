//
//  PhotoService
//
//  Create by Youssef on 9/2/2018
//  Copyright © 2018. All rights reserved.

import PhotoService from '../RestSDK/services/PhotoService';
import photo from '../RestSDK/models/Photo';

export default class PhotoRepository{

  static instance = null ;

  static getInstance(){

      if(PhotoRepository.instance){

          return PhotoRepository.instance;
      }

      PhotoRepository.instance = new PhotoRepository();

      return PhotoRepository.instance;
  }

  constructor(){
  }


  getPhotosList(){

    return new Promise(function(PhotoPage,error){

      PhotoService.getInstance().GetPhotosList().then(function(photos){

        PhotoPage(photos);

      },function(reject){
          error(error);
      });
      });
  }


}
