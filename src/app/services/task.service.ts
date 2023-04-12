import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Task } from '../Task';
// import {TASKS} from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:3000/api/v1/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    )
  }

  deleteTask(task: Task): Observable<Task> {
    const urlWithId = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(urlWithId).pipe(
      catchError(this.handleError)
    )
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const urlWithId = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(urlWithId, task, httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions).pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
}
