//
//	Photo
//
//	Create by Youssef on 9/2/2018
//	Copyright © 2018. All rights reserved.

export default class  Photo{


    GetAlbumId(){
        return this._albumId;
    }
    GetId (){
        return this._id;
    }
    GetTitle (){
        return this._title;
    }
    GetUrl() {
        return this._url;
    }
    GetThumbnailUrl() {
        return this._thumbnailUrl;
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
        this._title = data.title;
        this._url = data.url;
        this._thumbnailUrl = data.thumbnailUrl;
    }


}
