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
        .then(res => res.json())
        .then(resJSON => {
            localStorage.setItem('token', resJSON.user.token);
            return resJSON;
        });
    }

    check() {
        const token = localStorage.getItem('token');
        if (!token) return Promise.reject(new Error('Invalid token'));
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('token', token);
        return this.http.post(`${SERVER_URL}/user/check`, null, { headers })
        .toPromise()
        .then(res => res.json())
        .then(resJSON => {
            localStorage.setItem('token', resJSON.user.token);
            console.log(resJSON);
            return resJSON;
        });
    }
}
