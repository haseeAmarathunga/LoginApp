import { Component, OnInit ,HostBinding } from '@angular/core';
//import { AngularFire ,AuthProviders,AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { MoveIn} from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [MoveIn()],
  host :{'[@moveIn]':''}
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
