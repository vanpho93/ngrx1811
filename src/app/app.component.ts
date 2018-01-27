import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Word } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: Observable<number>;
  words: Observable<Word[]>;

  constructor(private store: Store<any>) {
    this.count = this.store.pipe(select('count'));
    this.words = this.store.pipe(select('words'));
  }

  increase() { this.store.dispatch({ type: 'INCREASE' }); }
  descrease() { this.store.dispatch({ type: 'DESCREASE' }); }
  reset() { this.store.dispatch({ type: 'RESET' }); }
}
