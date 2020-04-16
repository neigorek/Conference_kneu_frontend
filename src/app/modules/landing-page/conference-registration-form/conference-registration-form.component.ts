import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conference-registration-form',
  templateUrl: './conference-registration-form.component.html',
  styleUrls: ['./conference-registration-form.component.scss']
})
export class ConferenceRegistrationFormComponent implements OnInit {

  @Input() file;
  @Output() registrationFormSubmit = new EventEmitter();
  @Output() fileUp = new EventEmitter();

  registrationForm = this.fb.group({
    docName: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    studyPlace: ['', Validators.required],
    course: ['', Validators.required],
    tel: ['', Validators.required],
    email: ['', Validators.required],
    kerivnuk: ['', Validators.required],
    confPart: [''],
  });

  constructor(
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  submitRegistrationForm() {
    const formValue = this.registrationForm.value;

    const formData = new FormData();
    for (let i = 0; i < formValue.length; i++) {
      for (const key of formValue) {
        formData.append(key, formValue[key]);
      }
    }
    this.registrationFormSubmit.emit(formValue);
    this.registrationForm.reset();
  }

  onFileChoose(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.fileUp.emit(file);
    }
  }
}
