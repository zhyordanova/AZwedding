import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { ImageUpload } from 'src/app/models/image-upload.model';
import { ImageUploadService } from './service/image-upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  selectedImages?: FileList;
  currentImageUpload?: ImageUpload;
  percentage = 0;
  fileName = 'Изберете снимка';
  message = '';
  imageUploads$!: any[];
  imagesUrl!: any[];
  previews: any[] = [];

  constructor(private uploadService: ImageUploadService) { }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: '5'
    },
    {
      breakpoint: '768px',
      numVisible: '3'
    },
    {
      breakpoint: '560px',
      numVisible: '1'
    }
  ];

  ngOnInit(): void {
    this.uploadService.getFiles().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(imageUploads => {
      this.imageUploads$ = imageUploads;
    });
  }

  // firebase.database().ref('image-upload/').once('value').then((snapshot) {
  // snapshot.forEach((imageSnapshot) {
  //   var image = imageSnapshot.val();
  //   console.log(image.url);
  // })

  selectImage(event: any) {
    this.selectedImages = event.target.files;
    if (this.selectedImages) {
      this.fileName = this.selectedImages[0].name;
      this.previews.push(this.selectedImages);
    } else {
      this.fileName = 'Изберете снимка';
    }
  }

  upload() {
    if (this.selectedImages) {
      const image: File | null = this.selectedImages.item(0);
      this.selectedImages = undefined;
      if (image) {
        this.currentImageUpload = new ImageUpload(image);
        this.uploadService.pushFileToStorage(this.currentImageUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
            this.percentage = 0;
            this.message = `Не мога да кача снимка: ${image.name}!`;
          }
        );
      }
    }
  }
}
