import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private title = new BehaviorSubject<string>('');// setting the default value for subject  which is reqruied on subscription
  formTitle = this.title.asObservable();
  
  private desc  =new BehaviorSubject<string>('');
  formDesc = this.desc.asObservable();
  constructor() { }

  setFormTitle(title: string) {
    this.title.next(title); // setting the  value by using next , it will update the value
  }

   setFormDesc(formDesc: string) {
    this.desc.next(formDesc);
  }
}
