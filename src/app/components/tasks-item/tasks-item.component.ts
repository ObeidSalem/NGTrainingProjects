import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {
    // console.log('Task', this.task)
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
