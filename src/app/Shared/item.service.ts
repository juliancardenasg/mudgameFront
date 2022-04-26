import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../model/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Item[]>{
    
    return this.http.get<Item[]>("http://localhost:8090/item/all");

  }
  findById(id: number): Observable<Item>{
    return this.http.get<Item>("http://localhost:8090/item/"+ id +"/get");
  }
}