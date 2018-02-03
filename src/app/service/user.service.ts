import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const SERVER_URL = 'http://localhost:3000';

@Injectable()

export class UserService {
    constructor(private http: Http) {}

    signIn(formSignInValue) {
        const body = JSON.stringify(formSignInValue);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(`${SERVER_URL}/user/signin`, body, { headers })
        .toPromise()
        .then(res => res.json());
    }
}
