import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class ComponentsModule { }
