import { Component } from '@angular/core';
import { AppState } from './_store/app.state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  constructor(private store: Store<AppState>) {
    store.subscribe(state => this.loading = state.loading)
  }
}
