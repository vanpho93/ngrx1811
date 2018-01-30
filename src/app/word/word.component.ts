import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from '../types';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})

export class WordComponent {
  @Input() wordInfo: Word;
  constructor(private store: Store<any>) { }
  remove() {
    this.store.dispatch({ type: 'REMOVE_WORD', _id: this.wordInfo._id });
  }
}
