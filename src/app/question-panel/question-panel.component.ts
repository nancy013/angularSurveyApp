import { Component, OnInit,Output,EventEmitter, Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextForm } from './TextForm';
import { DynamicFormServiceService } from '../dynamic-form-service.service';
import { DynamicForm } from '../dynamic-form/DynamicForm';
import { NumberForm } from './NumberForm';

@Component({
  selector: 'app-question-panel',
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.css']
})
export class QuestionPanelComponent implements OnInit {


  @Output() onAddTextQuestion = new EventEmitter<TextForm>();
  @Output() onAddNumberQuestion = new EventEmitter<NumberForm>();
  textForm: FormGroup;
  numberForm: FormGroup;
  dynamicForm: DynamicForm;
  labelForm: FormGroup;
 // dropDownForm: FormGroup;
  showTextForm:boolean;
  showPanel:boolean;
  showNumberForm: boolean;
  constructor(private formBuilder: FormBuilder,
    private _dynamicFormService: DynamicFormServiceService) { }

     @Input() set showQuesPanel(flag: boolean) {
     this.showTextForm=flag;
     alert("Input Decorator");
     
    } 
  ngOnInit() {
    this.showPanel=true;
    this.showTextForm=false;
    this.showNumberForm=false;
    this.textForm = this.formBuilder.group(
      {
        textField:[''],
        keyword :[''],
        mandatory:['']
      }
    );
    
    // cerating the number form
    this.numberForm = this.formBuilder.group(
      {
         numberField:[''],
         keyword:[''],
         mandatory:['']
      }
    );
    this.labelForm = this.formBuilder.group(
      {
        questionText:[''],
        keyword :['']
      }
    );
  }
  addNewQuestion(){
    this.showPanel=true;
    this.showTextForm=false;
    this.showNumberForm=false;
  }
  textPopUp(){
    this.showTextForm=true;
    this.showPanel=false;
    this.showNumberForm=false;
  }
  dropDownPopUp(){
   
  }

  labelPopUp(){

  }

  numberPopUp(){
    this.showPanel=false;
    this.showTextForm=false;
    this.showNumberForm=true;
  }
  get f() { return this.textForm.controls; }

  get fNumber(){
    return this.numberForm.controls;
  }

  submitTextForm(){
    let textFormData = new TextForm();
    textFormData.textTypeQues=this.f.textField.value;
    textFormData.keyword=this.f.keyword.value;

    this.onAddTextQuestion.emit(textFormData);
    this.showTextForm=false;
    this.showPanel=false;
    alert("submit event");
    //this._dynamicFormService.setDynamicForm
    
  }

  submitNumberForm(){
    let numberFormData = new NumberForm();
    numberFormData.numberTypeQues=this.fNumber.numberField.value;
    numberFormData.keyword=this.fNumber.keyword.value;

    this.onAddNumberQuestion.emit(numberFormData);
    this.showTextForm=false;
    this.showPanel=false;
    this.showNumberForm=false;

  }

  
}
