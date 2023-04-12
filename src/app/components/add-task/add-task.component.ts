import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  task!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;
  
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }
  
  ngOnInit(): void {}

  onSubmit(): void {
    if(!this.task) {
      alert('Please enter a task')
      return
    }

    const newTask = {
      task: this.task,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask)  

    this.task = "";
    this.day = "";
    this.reminder = false;
  }


}
