import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getKey() {
    return this.http.get(`https://quantumkeygen.azurewebsites.net/api/generatesha256`,{responseType: 'text'});
  }
}
