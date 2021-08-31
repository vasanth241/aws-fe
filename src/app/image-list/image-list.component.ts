import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: any

  constructor(private imageUploadService: ImageUploadService) {}

  ngOnInit() {
    this.imageUploadService.getImages().subscribe(res => {
      this.images = res
    });
  }

}
