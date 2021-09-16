import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageListComponent } from './image-list/image-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AppComponent, ImageUploadComponent, ImageListComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
