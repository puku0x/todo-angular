import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private url: string
  ) {}

  findAll(offset?: number, limit?: number): Observable<Todo[]> {
    const url = `${this.url}/todos`;
    let params = new HttpParams();
    params = offset ? params.set('offset', `${offset}`) : params;
    params = limit ? params.set('limit', `${limit}`) : params;
    return this.http.get<Todo[]>(url, { params });
  }

  find(id: string): Observable<Todo> {
    const url = `${this.url}/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  create(todo: Partial<Todo>): Observable<Todo> {
    const url = `${this.url}/todos`;
    return this.http.post<Todo>(url, todo);
  }

  update(todo: Partial<Todo>): Observable<Todo> {
    const url = `${this.url}/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  remove(id: string): Observable<string> {
    const url = `${this.url}/todos/${id}`;
    return this.http.delete<void>(url).pipe(map(() => id));
  }
}
