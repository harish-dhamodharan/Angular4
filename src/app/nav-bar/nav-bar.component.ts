import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  btn: string;
  constructor() { }

  ngOnInit() {
    this.btn = "Login";
  }

  navBarResponsive() {
    var x = document.getElementById("nav_bar");
    if (x.className == "nav") {
      x.className += " responsive";
    }
    else {
      x.className="nav";
    }
  }

  popUpOpen() {
    if(this.btn === "Login") {
      document.getElementById('login-form-popup').style.display='block';
      console.log("popUpOpen() style.display ---> " + document.getElementById('login-form-popup').style.display);  
    }
  }
  
  popUpClose(event) {
    document.getElementById('login-form-popup').style.display=event;
    console.log("popUpClose() style.display ---> " + document.getElementById('login-form-popup').style.display);
  }  

  funcLogin(event) {
    console.log("Login User Name--->" + event);
    this.btn=event;
  }
}