import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormInputComponent } from "./form-input/form-input.component";
import emailjs from '@emailjs/browser';
import { ConstantsService } from '../constants/constants.service';

@Component({
  selector: 'app-connect-with-me',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormInputComponent],
  templateUrl: './connect-with-me.component.html',
  styleUrl: './connect-with-me.component.css'
})
export class ConnectWithMeComponent {
  // @ViewChild('confirmInfo') confirmInfoModal!: any;
  // confirmInfo = new Modal(this.confirmInfoModal);

  modalDisplayType = "none";
  formSubmissionSuccessfull = false;
  formSubmissionNotSuccessfull = false;

  constructor(private _constants: ConstantsService) { }

  connectWithMeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      // eslint-disable-next-line
      Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')
    ]),
    phoneNumber: new FormControl('',
      Validators.pattern('[0-9]{10}')
    ),
    description: new FormControl('')
  });

  formSubmitted(): void {
    if (this.connectWithMeForm.invalid) {
      this.connectWithMeForm.markAllAsTouched();
    } else {
      this.modalDisplayType = "block";
    }
  }

  closeModal(): void {
    this.modalDisplayType = "none";
  }

  sendContactInfo() {
    emailjs.init(this._constants.EMAILJS_INIT_KEY);
    emailjs.send(this._constants.EMAILJS_SERVICE_KEY, this._constants.EMAILJS_TEMPLATE_KEY, {
      Name: this.connectWithMeForm.value.name,
      Email: this.connectWithMeForm.value.email,
      PhoneNumber: this.connectWithMeForm.value.phoneNumber,
      Description: this.connectWithMeForm.value.description
    }).then(
      () => {
        this.formSubmissionSuccessfull = true;
        this.formSubmissionNotSuccessfull = false;
      },
      // if error received from email API
      () => {
        this.formSubmissionSuccessfull = false;
        this.formSubmissionNotSuccessfull = true;
      }
    );
    this.modalDisplayType = "none";
  }
}
