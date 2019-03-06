import { Component, OnInit, Output, EventEmitter/*, Input, OnChanges, SimpleChanges*/ } from '@angular/core';
//import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  /*animations: [
    trigger ('loginErrorIndicator', [
      state ('initial', style ({
        transform: 'scale(1)',
      })),
      state ('final', style ({
        transform: 'scale(1)',
      })),
      transition('initial => final', keyframes([
        style({transform: 'translateX(-5px)', offset: 0}),
        style({transform: 'translateX(5px)', offset: 0.5}),
        style({transform: 'translateX(0)', offset: 1}),
      ])),
      
  ])]*/
})
export class LoginFormComponent implements OnInit {
  @Output() emitName = new EventEmitter();
  @Output() emitDisplay = new EventEmitter();
  btnName : string;
  emailStr : string;
  passwordStr : string;
  constructor() { }

  ngOnInit() {
    this.btnName = "Login";
    }

  validateLogin() {
    if (this.emailStr === "welcome" && this.passwordStr === "welcome") {
      this.btnName = 'Harish';
      this.emitName.emit(this.btnName);
    }
    else {
      this.emitName.emit('Login');
    }

  }
  hideModal() {
    console.log("hideModal() reached");
    this.emitDisplay.emit('none');
 
  }
}
