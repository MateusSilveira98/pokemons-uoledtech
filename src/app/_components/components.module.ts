import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ]
})
export class ComponentsModule { }
