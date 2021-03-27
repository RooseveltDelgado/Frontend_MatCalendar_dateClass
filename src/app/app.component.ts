import { Component, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { CalendarComponent } from './page/calendar/calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @ViewChild('myCalendar', { static: true }) myCalendar: CalendarComponent;

  dateSelected(value: Moment) {
    console.log(value);
  }
  
}
