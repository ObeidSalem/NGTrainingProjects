import { Component, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task!: Task
  // @Input() text: string = this.task.text;
  // @Input() day: string = this.task.day;

  ngOnInit(): void {
    console.log('Task', this.task)
  }

}
