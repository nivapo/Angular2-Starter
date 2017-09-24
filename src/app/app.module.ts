import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {Data} from '../providers/sampledata';
import {BarchartComponent} from  './LineChart/barchart.component';
import {LoginView} from  './LoginView/LoginView.component';



@NgModule({
  declarations: [
    AppComponent,BarchartComponent,LoginView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxDatatableModule

  ],
  providers: [Data],
  bootstrap: [AppComponent,LoginView]
})
export class AppModule { }
