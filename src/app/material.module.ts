import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
	MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
	MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
	MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
	MatRadioModule, MatSidenavModule, MatSliderModule, MatSortModule,
	MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
	MatTooltipModule, MatExpansionModule, MatSelectModule, MatBadgeModule
} from '@angular/material';
@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
		MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
		MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
		MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
		MatRadioModule, MatSidenavModule, MatSliderModule, MatSortModule,
		MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
		MatTooltipModule, MatExpansionModule, MatSelectModule, MatBadgeModule
	],
	exports: [
		MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
		MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
		MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
		MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
		MatRadioModule, MatSidenavModule, MatSliderModule, MatSortModule,
		MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
		MatTooltipModule, MatExpansionModule, MatSelectModule, MatBadgeModule
	],
	declarations: []
})
export class MaterialModule { }