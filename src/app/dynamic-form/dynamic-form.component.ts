import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { TextForm } from '../question-panel/TextForm';
import { DynamicForm } from './DynamicForm';
import { Question } from './Question';
import { first } from 'rxjs/operators';
import { DynamicFormServiceService } from '../dynamic-form-service.service';
import { NumberForm } from '../question-panel/NumberForm';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  labelQues1: string;
  count: number;
  labelQues2:string;
  dynamicFormData: DynamicForm; 
  dynamicForm: FormGroup;
  formTitle : string;
  formDesc: string;
  num: number;
  questionLabel:string;
  showFlag:boolean;
  questions: Question[];
  constructor(private formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _dynamicFormService: DynamicFormServiceService
    ) {
    this.formTitle = JSON.parse(localStorage.getItem('formTitle'));
    console.log("In Synamic Form COnst:: "+this.formTitle);
   }

  
  ngOnInit() {
    this.questionLabel="+ Add Question ";
    this.showFlag =false;
    this.dynamicFormData = new DynamicForm();
    this.questions = new Array<any>();
    this.dynamicFormData.questions=this.questions;
    this.count =0;
    this.dynamicForm = this.formBuilder.group({

    });
    this.getFormData();
    this.num=1;
   /*  this.formTitle = JSON.parse(localStorage.getItem('formTitle'));
    console.log("In Synamic Form:: "+this.formTitle);
    this.formDesc = JSON.parse(localStorage.getItem('formDesc')); */

  }

  getFormData(){
      this._commonService.formTitle.subscribe(
            title=> {
              this.formTitle = title;
            },
            err =>{
              console.log(err);
            }
      );
      this._commonService.formDesc.subscribe(
        desc=> {
          this.formDesc = desc;
        },
        err =>{
          console.log(err);
        }
  );
  }
  submitTextForm(){
      
  }
addQuestion1(textFormData: TextForm){

console.log("Dynamic Frm Child"+textFormData.textTypeQues);
console.log(textFormData.keyword);
this.questionLabel =textFormData.textTypeQues;
if(this.questionLabel != null || this.questionLabel !='' ){
  this.showFlag =true;
}
this.dynamicFormData.formTitle=this.formTitle;
this.dynamicFormData.formDesc=this.formDesc;
textFormData.quesType="textType";
this.dynamicFormData.questions.push(textFormData);
console.log("Dynamic Form Data:: "+this.dynamicFormData);
this.labelQues1 = textFormData.textTypeQues;
console.log("Label Ques:: "+this.labelQues1);
this.count=this.count+1;

/* this.dynamicForm=this.formBuilder.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
}); */

}

addQuestion2(numberFormData: NumberForm){

numberFormData.quesType="numerType";
this.labelQues2 = numberFormData.numberTypeQues;
this.dynamicFormData.questions.push(numberFormData);
this.count=this.count+1;
}
  saveForm(){
    alert("Form Submitted");
    this.dynamicFormData.numOfQuestions=this.count;
    this.dynamicFormData.userId=3;
    this._dynamicFormService.submitForm(this.dynamicFormData).subscribe(
                data => {
                    
                },
                error => {
                    console.log(error);
                });
  }
}
