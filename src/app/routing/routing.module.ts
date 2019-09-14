import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { LoginComponent } from '../login/login.component';
import { FormComponent } from '../form/form.component';
import { QuestionPanelComponent } from '../question-panel/question-panel.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'dynamicForm', component: DynamicFormComponent },
  { path:'questionPanel', component: QuestionPanelComponent },
  // otherwise redirect to home
  { path: '', redirectTo: '', pathMatch:'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
