import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'event', component: EventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
