import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
// import * as photos from '../assets/gallery.json';
import * as photos from '../assets/photos.json';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photosgallery';
  photos: any=[];

  constructor(private appService: AppService){}

  ngOnInit(){

    // this.appService.getPhotos().then((data) => {
    //   this.photos = data;
    // });

    this.photos = photos.links;
    console.log("fotos de la galerya",this.photos);

  }

}
