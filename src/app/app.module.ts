import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { EventComponent } from './event/event.component';
import { StructualComponent } from './structual/structual.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { IntaractionComponent } from './intaraction/intaraction.component';
import { PipesComponent } from './pipes/pipes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    EventComponent,
    StructualComponent,
    NavigationComponent,
    HomeComponent,
    FormComponent,
    IntaractionComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
