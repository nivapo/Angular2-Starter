import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'LoginView',
  templateUrl: './LoginView.component.html',
  styleUrls: ['./LoginView.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginView {

ngOnInit(){
console.log("Creating the login view");
}
}
