import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './_components/components.module';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingReducer } from './_store/reducers/loading.reducers';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      loading: LoadingReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
