import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from '../types';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
  txtEn = '';
  txtVn = '';
  isMemorized = false;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }
  add() {
    const { txtEn, txtVn, isMemorized } = this;
    const word: Word = {
      en: txtEn,
      vn: txtVn,
      isMemorized,
      _id: Math.random() + ''
    };
    this.store.dispatch({ type: 'ADD_WORD', word });
    // alert({ txtEn, txtVn, isMemorized });
  }
}
