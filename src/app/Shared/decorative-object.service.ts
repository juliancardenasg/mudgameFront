// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DecorativeObjectService {

//   constructor() { }
// }
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Decorativeobject } from '../model/decorativeobject';



@Injectable({

providedIn: 'root'

})

export class DecorativeObjectService {



private decorativeObjectLoad = new BehaviorSubject<Decorativeobject>(new Decorativeobject("", -1))



decorativeObjectAux = this.decorativeObjectLoad.asObservable()



sendItem(decoItem: Decorativeobject){

this.decorativeObjectLoad.next(decoItem);

}



constructor(private http: HttpClient) { }



findAll(): Observable<Decorativeobject[]>{

return this.http.get<Decorativeobject[]>("http://localhost:8080/decorativeobject/list");



}

findById(id: number):Observable<Decorativeobject>{



  return this.http.get<Decorativeobject>("http://localhost:8080/decorativeobject/"+id+"/get");
  
  
  
  }
  
  
  
  save(item: Decorativeobject): Observable<Decorativeobject>{
  
  
  
  return this.http.post<Decorativeobject>("http://localhost:8080/decorativeobject/save",item);
  
  
  
  }
  
  
  
  delete(id: number): Observable<number> {
  
  
  
  return this.http.get<number>("http://localhost:8080/decorativeobject/"+id+"/delete")
  

  
  }
  
  }