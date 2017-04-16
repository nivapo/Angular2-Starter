import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blood Sugar Monitoring System';
  rows = [{"name":"asdfas","gender":"Male","company":"asfsa"},{"name":"basdfas","gender":"Fale","company":"test"}];
  selected = [];
  editing = {};
}
