import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Friend } from './friend';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url:string = "http://localhost:3000/friends"

  constructor(private http: HttpClient) { }

  addFriend(friend:Friend): Observable<object>{
    return this.http.post(`${this.url}/add`, friend)
  }

  getFriends(): Observable<object>{
    return this.http.get(`${this.url}/all`)
  }

  deleteFriend(id:string): Observable<object>{
    return this.http.delete(`${this.url}/${id}`)
  }

  updateFriend(friend:Friend, id:string): Observable<object>{
    return this.http.put(`${this.url}/${id}`, friend)
  }
}

