//
//  PhotoResponse
//
//  Create by Youssef on 9/2/2018
//  Copyright © 2018. All rights reserved.

import Photo from './Photo';

export default class  PhotoResponse{


    GetPhotos(){
        return this._photos;
    }

	/**
	 * Instantiate the instance using the passed dictionary values to set the properties values
	 */
    constructor(data){
        if(data == null){
            return;
        }

        this._content = data;
        this._photos = new Array(this._content.length);

        if(this._content != null && this._content.length > 0){

            for (var i = 0; i < this._content.length; i++) {

                this._photos.push(new Photo(this._content[i]));
            }

        }

    }


}
