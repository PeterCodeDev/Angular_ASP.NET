import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatLineModule} from '@angular/material/core'
import {MatNativeDateModule} from '@angular/material/core'

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,MatSelectModule,MatDatepickerModule, MatLineModule,MatNativeDateModule
  ],
  imports: [CommonModule],
})
export class MaterialModule {}
