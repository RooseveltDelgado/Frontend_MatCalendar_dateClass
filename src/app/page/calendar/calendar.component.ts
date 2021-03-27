import { Component, EventEmitter, OnInit, Output, ViewChild,Renderer2 } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';

import { CalendarService }from '../../service/calendar.service'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Output()
  dateSelected: EventEmitter<Moment> = new EventEmitter();

  @Output()
  selectedDate = moment();

  @ViewChild('calendar', { static: true }) calendar: MatCalendar<Moment>;
  lstdias:any;

  isValidar=false;
  constructor(
    private renderer: Renderer2,
    private calendarService:CalendarService
  ) { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.mat-calendar-previous-button, .mat-calendar-next-button');
    if (buttons) {
        Array.from(buttons).forEach(button => {
        this.renderer.listen(button, 'click', () => {
          console.log('Arrow buttons clicked');
        });
      });
    }
  }

 

  validarcitas(){
    this.isValidar=true
  }

  validarNuevafecha(){
    this.NewFechas()
  }

  monthSelected(date: Moment) {
    console.log('month changed' + date);
  }

  dateChanged() {
    // this.calendar.activeDate = this.selectedDate;
    // this.calendar.ngOnDestroy()
   
    this.dateSelected.emit(this.selectedDate);
  }

  prevDay() {
    const prevMoment = moment(this.selectedDate).add(-1, 'days');
    this.selectedDate = prevMoment;
    this.dateChanged();
  }



  today() {
   this.selectedDate = moment();
    this.dateChanged();
  }

  nextDay() {
    const nextMoment = moment(this.selectedDate).add(30, 'days');
    console.log(nextMoment)
    this.selectedDate = nextMoment;
    this.dateChanged();
  }

  dateClass() {
   // this.listarDias()
    console.log('pintar')
   for (let x=1 ; x <= 30 ; x++){
       return (date:Date):any =>{
           let fecha1 = moment(date).format('DD/MM/YYYY') //datePipe.transform(date, 'yyyy-MM-dd');
           let fecha2 = this.evaluarDia(fecha1) //'07/09/2020'   
           if (fecha1 == fecha2) {    
               return 'Dia-Seleccionada';
           } else {
               return;
           }
       } 
   }                    
 }

 evaluarDia(fecha: string): string {          
  let strFechax = '';
  console.log(this.lstdias)
  for(let i=0;i < this.lstdias.length ; i++){  
    strFechax = moment(this.lstdias[i].date).format('DD/MM/YYYY')// datePipe.transform(this.lstdias[i].strFecha, 'yyyy-dd-MM');
    if (strFechax == fecha){               
        return strFechax;
    }     
   }           
}
  
 listarDias() {
  this.calendarService.getPlanificacionCalendario().subscribe(respuesta => {
    this.lstdias=respuesta.data;
      console.log(respuesta.data);
  }, error => {
  });
}

citas(){
  this.calendarService.getCalendario().subscribe(respuesta => {
    this.lstdias=respuesta
      console.log(respuesta);
  }, error => {
  });
 }

 NewFechas(){
   
  this.calendarService.getNewCalendario().subscribe(respuesta => {
    this.lstdias=respuesta
      console.log(respuesta);
  }, error => {
  });
 }
}
