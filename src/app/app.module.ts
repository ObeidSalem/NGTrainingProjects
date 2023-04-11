import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksHeaderComponent } from './components/tasks.header/tasks.header.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    ButtonComponent,
    TasksHeaderComponent,
    TasksItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
