import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private toast: ToastrService) { }

// Function for validation

  validate(email: any) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let password = "hello123"
    if (email.match(mailformat) && password.match(password)) {
      return true;
    } else {
      this.toast.error('You have entered an invalid email address!');

      return false;
    }
  }
}
