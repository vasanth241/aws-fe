import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: any
  dataSource: any = []
  displayedColumns: string[] = ['position', 'Key', 'modifieddate', 'size', 'action'];

  
  constructor(private imageUploadService: ImageUploadService) {}

  ngOnInit() {
    this.imageUploadService.getImages().subscribe(res => {
      this.images = res
      let incrementor = 1
      this.dataSource = new MatTableDataSource();
      this.images.forEach(element => {
        this.dataSource.data.push({
          'position': incrementor,
          'key': element.Key,
          'modifieddate':  element.LastModified,
          'size': (element.Size / (1024*1024)).toFixed(2),
          'url':  'https://vasi-aws-training.s3.amazonaws.com/'+element.Key
        })

        incrementor++
      });
      console.log(this.dataSource)
    });
  }

}
