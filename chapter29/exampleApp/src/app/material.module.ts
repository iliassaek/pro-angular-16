import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const features = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRippleModule,
];

@NgModule({
  imports: [features, BrowserAnimationsModule],
  exports: [features],
})
export class MaterialFeatures {}
