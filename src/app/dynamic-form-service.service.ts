import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { DynamicForm } from './dynamic-form/DynamicForm';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DynamicFormServiceService {

  constructor(private http: HttpClient) { }
  /* private dynamicForm = new BehaviorSubject<DynamicForm>(new DynamicForm());// setting the default value for subject  which is reqruied on subscription
  form = this.dynamicForm.asObservable();

  setDynamicForm(dynamicForm: DynamicForm) {
    this.dynamicForm.next(dynamicForm); // setting the  value by using next , it will update the value
  } */

  submitForm(dynamicFormData : DynamicForm){
    console.log("Dynamic form data in post servce:: "+JSON.stringify(dynamicFormData));
    var formData = JSON.stringify(dynamicFormData);
 
    return this.http.post<DynamicForm>(`${environment.apiUrl}/dynamicForm`,
     {dynamicFormData});
  }
}
