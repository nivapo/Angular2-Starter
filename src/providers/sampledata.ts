/**
 * Created by srinivasan on 17/04/17.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class Data {
  data= []
  datag=[]
  constructor(){
    /*
      Sample Data
     */
  this.data =[
    {"date":"12/03/2017","when":"Before Lunch","reading":10,x:2,y:5},
    {"date":"13/03/2017","when":"After Lunch","reading":5,x:3,y:10},
    {"date":"14/03/2017","when":"Before Dinner","reading":10,x:4,y:15},
    {"date":"15/03/2017","when":"After Dinner","reading":20,x:5,y:15},
    {"date":"16/03/2017","when":"On Empty Stomach","reading":210,x:6,y:3},
    {"date":"17/03/2017","when":"After Breakfast","reading":205,x:7,y:25}
  ];
    this.datag =[
      [1,25],
      [2,54],
      [3,20]

     ];
  }
  /*
    Add new data to the data array
   */
  addSugarReading(newReading){
    if(newReading) {
      this.data.push(newReading)
    }
    else{
     console.log("The sugar reading is empty");
    }
    }
    /*
     Get all the data in the array
    */
    getAll(){
    return this.data;
    }
  getgAll(){
    return this.datag;
  }
}
