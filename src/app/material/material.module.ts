import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatButtonModule,
    MatMomentDateModule
  ],
  exports:[
    MatDatepickerModule,
    MatButtonModule,
    MatMomentDateModule
  ]
})
export class MaterialModule { }
