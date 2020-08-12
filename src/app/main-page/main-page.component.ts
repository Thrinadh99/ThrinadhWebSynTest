import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userdata: any;
  constructor(private userService: LoginServiceService) { }

  ngOnInit(): void {
    this.userService.getlogin().subscribe(data => {
      //console.log('main ', data);
      this.userdata = data;
    });
  }

}
