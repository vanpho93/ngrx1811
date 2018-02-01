import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter';
import { wordsReducer } from './ngrx/words';
import { filterModeReducer } from './ngrx/filterMode';
import { WordFormComponent } from './word-form/word-form.component';
import { WordComponent } from './word/word.component';
import { WordFilterComponent } from './word-filter/word-filter.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [AppComponent, WordFormComponent, WordComponent, WordFilterComponent, SignUpComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot({ count: counterReducer, words: wordsReducer, filterMode: filterModeReducer })
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
