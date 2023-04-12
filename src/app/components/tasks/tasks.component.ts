import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]): void => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe((): void => {
      this.tasks = this.tasks.filter((task) => task.id !== task.id);
    });
    window.location.reload()
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
    window.location.reload()
  }
}

