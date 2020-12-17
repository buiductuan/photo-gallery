import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'photo-gallery.page.html',
  styleUrls: ['photo-gallery.page.scss']
})
export class PhotoGalleryPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    // load image save to storage
    this.photoService.loadSaved();
  }

  addPhotoGallery() {
    this.photoService.addNewToGallery();
  }

}
