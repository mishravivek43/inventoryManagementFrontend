import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  MatDialogModule } from '@angular/material/dialog';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTable } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatFormFieldModule } from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FilterPipe } from '../filter.pipe';
import { from } from 'rxjs';

// import {} from '@angular/material/card';



@NgModule({
    declarations: [FilterPipe, ],
    imports: [
      CommonModule,
      MatCardModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatTableModule,
      MatGridListModule,
      MatRadioModule,
      MatDividerModule,
      MatSelectModule,
      MatExpansionModule,
      MatListModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatNativeDateModule,
      MatButtonModule,
      MatSnackBarModule,
      MatTableModule,
      MatIconModule,
      MatSortModule,
      MatPaginatorModule,
      MatDialogModule,
      MatTabsModule,
      MatMenuModule,

    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      FilterPipe,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatTable,
      MatExpansionModule,
      MatCardModule,
      MatDividerModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatTabsModule,
      A11yModule,
      DragDropModule,
      ScrollingModule,
      CdkStepperModule,
      CdkTableModule,
      CdkTreeModule,
      // Drag n Drop related exports
      MatRadioModule,
      MatSelectModule,
      MatDatepickerModule,
      MatCheckboxModule,
      MatNativeDateModule,
      MatButtonModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatTableModule,
      MatSlideToggleModule,
      MatSortModule,
      MatPaginatorModule,
      MatDialogModule,
      MatSliderModule,
      MatMenuModule
    ]
  })
export class MaterialModule {}
