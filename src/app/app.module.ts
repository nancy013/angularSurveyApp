import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { RoutingModule} from './routing/routing.module';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { QuestionPanelComponent } from './question-panel/question-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonService} from './common.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    LoginComponent,
    FormComponent,
    QuestionPanelComponent
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  onSubmit() {
    
  }
}
