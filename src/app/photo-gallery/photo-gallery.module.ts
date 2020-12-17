import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoGalleryPage } from './photo-gallery.page';
import { PhotoGalleryPageRoutingModule } from './photo-gallery-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PhotoGalleryPageRoutingModule
  ],
  declarations: [PhotoGalleryPage]
})
export class PhotoGalleryPageModule {}
