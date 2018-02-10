//
//	Photo
//
//	Create by Youssef on 9/2/2018
//	Copyright © 2018. All rights reserved.

export default class Photo {


    GetAlbumId(){
        return this._albumId;
    }
    GetId (){
        return this._id;
    }
    GetCaption (){
        return this.caption;
    }
    Getphoto() {
        return this.photo;
    }
    GetThumb() {
        return this.thumb;
    }


	/**
	 * Instantiate the instance using the passed dictionary values to set the properties values
	 */
    constructor(data){

        if(data == null){
            return;
        }

        this._albumId = data.albumId;
        this._id =   data.id;
        this.caption = data.title;
        this.photo = data.url;
        this.thumb = data.url;
        this.selected = false;
    }


}
