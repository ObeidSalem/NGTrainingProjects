import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tasks-header',
  templateUrl: './tasks.header.component.html',
  styleUrls: ['./tasks.header.component.css']
})
export class TasksHeaderComponent implements OnInit {

  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }
  ngOnInit(): void {  }
  
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
