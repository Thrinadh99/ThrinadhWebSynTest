import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { first } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginForm: FormGroup;
  model: any = {};
  
  constructor(
    private loginUser : LoginServiceService,
    private route: ActivatedRoute,
    private router: Router
) { }

  ngOnInit() {
  //   this.loginUser.getlogin().subscribe(data => {
  //     console.log(data);
  // });
  
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.loginUser.signinUser(username, password);
    //console.log('form ', email);
  }

}
