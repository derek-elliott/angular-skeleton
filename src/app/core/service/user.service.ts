import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env';
import { User } from '@app/schema/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient){}

    getAll() {
        return this.http.get<User[]>(`${environment.authUrl}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${environment.authUrl}/users/${id}`);
    }
}