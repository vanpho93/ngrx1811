import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
  txtEn = '';
  txtVn = '';
  isMemorized = false;
  constructor() { }

  ngOnInit() {
  }
  add() {
    const { txtEn, txtVn, isMemorized } = this;
    alert({ txtEn, txtVn, isMemorized });
  }
}
