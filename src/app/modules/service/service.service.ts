import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService 
{
  URL : string = environment.api;
  constructor(private httpClient:HttpClient) { }

  getUserData() : Observable<any>{
    return this.httpClient.get(`${this.URL}/`).pipe(
      map(({ results }: any) => {
        return results; //data
      })
    )
  }
}
