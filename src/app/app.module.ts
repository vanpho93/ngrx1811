import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter';
import { wordsReducer } from './ngrx/words';
import { WordFormComponent } from './word-form/word-form.component';
import { WordComponent } from './word/word.component';

@NgModule({
  declarations: [AppComponent, WordFormComponent, WordComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ count: counterReducer, words: wordsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

/*
b1. Dinh nghia vung nho dung reducer function
b2. Tao ra vung nho tu reducer function
b3. Lay du lieu tu store
b4. Thay doi du lieu cua store
*/
