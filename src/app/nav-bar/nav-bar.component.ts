import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  btn: string;
  shouldIbeLoaded : boolean;
  constructor() { }

  ngOnInit() {
    this.btn = "Login";
    this.shouldIbeLoaded = false;
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
    if(this.btn === "Login" && !this.shouldIbeLoaded) {
      console.log("popUpOpen():before-open shouldIbeLoaded ---> " + this.shouldIbeLoaded);
      this.shouldIbeLoaded = true;
      console.log("popUpOpen():after-open shouldIbeLoaded ---> " + this.shouldIbeLoaded);
    }
  }

  popUpCloseNotify(event){
    this.shouldIbeLoaded=event;
  }
  
  funcLogin(event) {
    console.log("Login User Name ---> " + event);
    this.btn=event;
  }
}