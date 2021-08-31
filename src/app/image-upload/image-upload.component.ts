import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  imageObj: File;
  imageUrl: string;
  isUploading: boolean = false

  constructor(private imageUploadService: ImageUploadService) {}

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }

  onImageUpload() {
    this.isUploading = true
    const imageForm = new FormData();
    imageForm.append('image', this.imageObj);
    this.imageUploadService.imageUpload(imageForm).subscribe(res => {
      this.isUploading = false
      this.imageUrl = res['image'];
    });
  }

}
