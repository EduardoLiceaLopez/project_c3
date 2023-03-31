import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../interfaces';

interface GraphqlResponse<T> {
  message: string;
  token: string;
  data: T;
  errors?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'http://localhost:3000/graphql';

  constructor(private http: HttpClient) { }

  public getAll<T>(query: string, variables?: any): Observable<GraphqlResponse<T>> {
    const body = { query: query, variables: variables };
    return this.http.post<GraphqlResponse<T>>(this.apiUrl, body);
  }

  public getById<T>(url: string, params: any): Observable<GraphqlResponse<T>> {
    return this.http.get<GraphqlResponse<T>>(url, { params });
}

  public add(mutation: string): Observable<GraphqlResponse<any>> {
    return this.http.post<GraphqlResponse<any>>(this.apiUrl, { query: mutation });
  }

  public login<T>(url: string, params: any): Observable<GraphqlResponse<T>> {
    return this.http.post<GraphqlResponse<T>>(url, { query: params.query, variables: params.variables });
  }  

  public delete<T>(mutation: string, variables: any): Observable<GraphqlResponse<T>> {
    const body = { query: mutation, variables: variables };
    return this.http.post<GraphqlResponse<T>>(this.apiUrl, body);
  }
}
