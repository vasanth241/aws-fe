import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageListComponent } from './image-list/image-list.component';

const routes: Routes = [
  {
    path: 'image-upload', component: ImageUploadComponent
  },
  {
    path: 'images', component: ImageListComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'images'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
