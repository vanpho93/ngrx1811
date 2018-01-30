import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FilterMode } from '../types';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})
export class WordFilterComponent implements OnInit {
  filterMode: Observable<FilterMode>;
  constructor(private store: Store<any>) {
    this.filterMode = this.store.pipe(select('filterMode'));
  }

  ngOnInit() {
  }

  changeMode(mode: FilterMode) {
    this.store.dispatch({ type: 'CHANGE_MODE', mode });
  }

}
