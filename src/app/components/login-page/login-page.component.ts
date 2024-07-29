import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OtpPageComponent } from '../otp-page/otp-page.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  phoneNumber: any;
  constructor(private router: Router) { }
  toggleOtpPage() {
    if (this.phoneNumber == "9850929690") {
      this.router.navigate(['/otp-page']);
    }
  }

  toggleSignUpPage() {
    this.router.navigate(['/sign-up']);
  }
}


