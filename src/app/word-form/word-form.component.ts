import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from '../types';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
  txtEn = '';
  txtVn = '';
  isMemorized = false;
  constructor(private store: Store<any>, private wordService: WordService) { }

  ngOnInit() {
  }
  add() {
    const { txtEn, txtVn } = this;
    this.wordService.addWord(txtEn, txtVn);
    this.txtEn = '';
    this.txtVn = '';
  }
}
