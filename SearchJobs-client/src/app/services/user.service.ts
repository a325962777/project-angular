import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(name: string, password: string): Observable<User> {
    return this.http.get<User>(`https://localhost:7114/User?userName=${name}&password=${password}`)

  }
  updateCV(user: User) {
    return this.http.put<User>(`https://localhost:7114/User`,user)
  }
}