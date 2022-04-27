// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Monster } from '../model/monster';

// @Injectable({
//   providedIn: 'root'
// })
// export class MonsterService {

//   constructor(
//     private http: HttpClient
//   ) { }

//   findAll(): Observable<Monster[]>{
    
//     return this.http.get<Monster[]>("http://localhost:8090/monster/all");

//   }

//   findById(id: number): Observable<Monster>{
//     return this.http.get<Monster>("http://localhost:8090/monster/"+ id +"/get");
//   }

// }
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Monster } from '../model/monster';



@Injectable({

providedIn: 'root'

})

export class MonsterService {



private monsterDataLoad = new BehaviorSubject<Monster>( new Monster(-1,"-- NONE --","",0,0,0,0,"",""))

monsterAux = this.monsterDataLoad.asObservable()



sendMonster(monster: Monster){

this.monsterDataLoad.next(monster);

}



constructor(private http: HttpClient) {}



findAll(): Observable<Monster[]>{

return this.http.get<Monster[]>("http://localhost:8080/monster/all");

}
findById(id: number):Observable<Monster>{



  return this.http.get<Monster>("http://localhost:8080/monster/"+id+"/get");
  
  
  
  }
  
  
  
  editById(id: number): Observable<Monster>{
  
  return this.http.get<Monster>("http://localhost:8080/monster/"+id+"/edit");
  
  }
  
  
  
  save(monster: Monster): Observable<Monster>{
  
  
  
  return this.http.post<Monster>("http://localhost:8080/monster/save",monster);
  
  
  
  }
  
  
  
  delete(id: number): Observable<number> {
  
  
  
  return this.http.get<number>("http://localhost:8080/monster/"+id+"/delete")
  
  
  
  }
  
  
  
  }