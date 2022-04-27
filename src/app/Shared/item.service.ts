// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Item } from '../model/item';


// @Injectable({
//   providedIn: 'root'
// })
// export class ItemService {

//   constructor(
//     private http: HttpClient
//   ) { }

//   findAll(): Observable<Item[]>{
    
//     return this.http.get<Item[]>("http://localhost:8090/item/all");

//   }
//   findById(id: number): Observable<Item>{
//     return this.http.get<Item>("http://localhost:8090/item/"+ id +"/get");
//   }
// }
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Item } from '../model/item';




@Injectable({

providedIn: 'root'

})

export class ItemService {



private itemDataLoad = new BehaviorSubject<Item>(new Item(-1,"","",0,0,"",""))

itemAux = this.itemDataLoad.asObservable()



sendMonster(monster: Item){

this.itemDataLoad.next(monster);

}



constructor(private http: HttpClient) {}



findAll(): Observable<Item[]>{

return this.http.get<Item[]>("http://localhost:8080/item/all");



}

findById(id: number):Observable<Item>{



  return this.http.get<Item>("http://localhost:8080/item/"+id+"/get");
  
  
  
  }
  
  
  
  editById(id: number): Observable<Item>{
  
  return this.http.get<Item>("http://localhost:8080/item/"+id+"/edit");
  
  }
  
  
  
  save(item: Item): Observable<Item>{
  
  
  
  return this.http.post<Item>("http://localhost:8080/item/save",item);
  
  
  
  }
  
  
  
  delete(id: number): Observable<number> {
  
  
  
  return this.http.get<number>("http://localhost:8080/item/"+id+"/delete")
  
  
  
  }
  
  }