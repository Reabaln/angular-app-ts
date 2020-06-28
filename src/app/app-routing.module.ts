import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';


const routes: Routes = [
  {path: 'new', component: NewSurveyComponent},
  {path: 'list', component: ListSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewSurveyComponent, ListSurveyComponent]
