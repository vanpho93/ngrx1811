import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Word } from './types';
import { WordService } from './word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WordService]
})
export class AppComponent {
  count: Observable<number>;
  words: Observable<Word[]>;

  constructor(private store: Store<any>, private wordService: WordService) {
    this.count = this.store.pipe(select('count'));
    this.words = this.store.pipe(select('words'));
    this.wordService.getAllWords();
  }

  increase() { this.store.dispatch({ type: 'INCREASE' }); }
  descrease() { this.store.dispatch({ type: 'DESCREASE' }); }
  reset() { this.store.dispatch({ type: 'RESET' }); }
}
