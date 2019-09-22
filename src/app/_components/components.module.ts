import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading/loading.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class ComponentsModule { }
