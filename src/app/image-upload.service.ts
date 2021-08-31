import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post('http://aws-lb-63120323.us-east-1.elb.amazonaws.com/api/v1/upload', imageForm);
  }

  getImages() {
    return this.http.get('http://aws-lb-63120323.us-east-1.elb.amazonaws.com/api/v1/list');
  }
}
