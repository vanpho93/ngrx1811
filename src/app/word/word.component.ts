import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Word, FilterMode } from '../types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})

export class WordComponent {
  @Input() wordInfo: Word;
  filterMode: Observable<FilterMode>;
  constructor(private store: Store<any>) {
    this.filterMode = this.store.pipe(select('filterMode'));
  }
  remove() {
    this.store.dispatch({ type: 'REMOVE_WORD', _id: this.wordInfo._id });
  }
}
