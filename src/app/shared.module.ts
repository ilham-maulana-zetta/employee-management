import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from './component/navbar/navbar.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PageTitleModule } from './component/page-title/page-title.module';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSortModule,
    MatSnackBarModule,
    PageTitleModule
  ]
})
export class SharedModule { }
