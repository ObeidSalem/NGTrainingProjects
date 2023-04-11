import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const urlWithId = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(urlWithId)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const urlWithId = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(urlWithId, task, httpOptions)
  }
}
