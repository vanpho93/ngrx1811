import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Word } from './types';
import { Store } from '@ngrx/store';

const BASE_URL = 'http://localhost:3000';

@Injectable()

export class WordService {
    constructor(private http: Http, private store: Store<any>) {}

    getAllWords() {
        return this.http.get(`${BASE_URL}/word`)
        .toPromise()
        .then(res => res.json())
        .then(body => this.store.dispatch({ type: 'SET_WORDS', words: body.words }));
    }

    addWord(vn: string, en: string) {
        const body = JSON.stringify({ en, vn });
        const headers = new Headers({ 'Content-Type': 'application/json'});
        return this.http.post(`${BASE_URL}/word`, body, { headers })
        .toPromise()
        .then(res => res.json())
        .then(resJSON => {
            this.store.dispatch({ type: 'ADD_WORD', word: resJSON.word });
        });
    }

    removeWord(_id: string) {
        return this.http.delete(`${BASE_URL}/word/${_id}`)
        .toPromise()
        .then(res => res.json())
        .then(resJSON => {
            this.store.dispatch({ type: 'REMOVE_WORD', _id });
        });
    }
}
