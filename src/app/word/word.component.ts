import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Word, FilterMode } from '../types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
  providers: [WordService]
})

export class WordComponent {
  @Input() wordInfo: Word;
  filterMode: Observable<FilterMode>;
  constructor(private store: Store<any>, private wordService: WordService) {
    this.filterMode = this.store.pipe(select('filterMode'));
  }
  remove() {
    this.wordService.removeWord(this.wordInfo._id);
  }

  getShouldShowWord(filterMode: FilterMode): boolean {
    if (filterMode === 'SHOW_ALL') return true;
    if (filterMode === 'SHOW_MEMORIZED') return this.wordInfo.isMemorized;
    return !this.wordInfo.isMemorized;
  }

  get shouldShow(): Observable<boolean> {
    return this.filterMode.map(mode => {
      if (mode === 'SHOW_ALL') return true;
      if (mode === 'SHOW_MEMORIZED') return this.wordInfo.isMemorized;
      return !this.wordInfo.isMemorized;
    });
  }
}
