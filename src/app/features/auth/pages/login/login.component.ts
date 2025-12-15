import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../../../core/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){

    if(this.loginForm.valid){

      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (isloggedIn) => {
          if(isloggedIn){
            this.router.navigate(['']);
          }
        },
        error: (err) => {
          console.error('Error de login', err);
        }
      });

    }

  }

}
