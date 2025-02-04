import { Injectable } from "@angular/core";

@Injectable({
    providedIn	: 'root'
})

export class AppService{
    async getPhotos(){
        const response = await fetch('../assets/gallery.json');
        const data = await response.json();
        console.log(data);
        return data;
    }


}


