import { Component, OnInit } from '@angular/core';
import {Form} from './Form';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new Form();
  constructor(
    private router: Router,
    private _commonService: CommonService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Form title"+ this.form.formDesc);
    console.log("Form title"+ this.form.formTitle);
    this.router.navigate(['/dynamicForm']);
    /* sessionStorage.setItem('formTitle', JSON.stringify(this.form.formTitle));
    sessionStorage.setItem('formDesc', JSON.stringify(this.form.formDesc)); */
    this._commonService.setFormDesc(this.form.formDesc);
    this._commonService.setFormTitle(this.form.formTitle);
  }

}
