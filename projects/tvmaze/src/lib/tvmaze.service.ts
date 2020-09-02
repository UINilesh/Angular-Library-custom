import { Injectable } from '@angular/core';
import { HttpClient }from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
private readonly apiRoot = "https://api.tvmaze.com";
  constructor(private http:HttpClient) { }

  getShow(id:number): Observable<any> {
      const url = `${this.apiRoot}/shows/${id}`;
       console.log(`${this.apiRoot}/shows/${id}`);
      return this.http.get<any>(url);
    
  }
}
