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
import {MatTabsModule} from '@angular/material/tabs'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  declarations: [],
  exports:[
    MatToolbarModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule,MatSelectModule,MatDatepickerModule, MatLineModule,MatNativeDateModule, MatTabsModule, MatCheckboxModule,MatAutocompleteModule,MatTableModule,MatPaginatorModule,MatProgressSpinnerModule
  ],
  imports: [CommonModule],
})
export class MaterialModule {}
