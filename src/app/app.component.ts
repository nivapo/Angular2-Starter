import {Component, Input} from '@angular/core';
import {Data} from '../providers/sampledata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rows = []
  title = 'Blood Sugar Monitoring System';
  selected = [];
  editing = {};
  @Input('curr')
  curr={date:"",when:"",reading:"150"}
  constructor(public dataService:Data){
  this.rows = this.dataService.getAll();
  }
  addReading(reading){
    console.log(reading)
    // this.dataService.addSugarReading({"date":"12/03/2016","when":"test","reading":"205"})
    this.dataService.addSugarReading(JSON.parse(JSON.stringify(reading)))
    this.curr.when=""
    this.curr.reading=""
    this.curr.date= ""


    //console.log(this.dataService.data.length)
  }
  whenChanged(whn){
    // console.log(whn)
    // console.log(this.curr)
    this.curr.when = whn
  }
  deleteRecord(){
    

  }

}
