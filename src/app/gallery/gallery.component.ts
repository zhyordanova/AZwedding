import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
  imageUploads!: any[];
  imagesUrl!: any[];
  previews: any[] = [];
  form: FormGroup;

  constructor(
    private uploadService: ImageUploadService,
    private toastr: ToastrService
  ) {
    this.form = new FormGroup({ picture: new FormControl('', [Validators.required]) })

  }

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
        changes.map(c => {
          const image = {
            previewImageSrc: c.payload.val()?.url,
            thumbnailImageSrc: c.payload.val()?.url,
            alt: c.payload.val()?.name,
            title: c.payload.val()?.name
          };
          return image;
        })
      )
    ).subscribe(imageUploads => {
      this.imageUploads = imageUploads;
    });
  }

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
      console.log('selected images', this.selectedImages)
      const image: File | null = this.selectedImages.item(0);
      this.selectedImages = undefined;
      if (image) {
        this.currentImageUpload = new ImageUpload(image);
        this.uploadService.pushFileToStorage(this.currentImageUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            this.percentage = 0;
            this.toastr.error(error.message);
          }
        );
      }
    }
  }
}
