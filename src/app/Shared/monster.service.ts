import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monster } from '../model/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor(
    private http: HttpClient,
  ) { }

  findAll(): Observable<Monster[]>{
    
    return this.http.get<Monster[]>("http://localhost:8090/monster/list");

  }
}
