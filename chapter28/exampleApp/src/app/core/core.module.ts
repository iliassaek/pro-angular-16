import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { TableComponent } from './table.component';
import { FormComponent } from './form.component';
import { ValidationHelper } from './validationHelper.pipe';
import { ValidationErrorsDirective } from './validationErrors.directive';
import { HiLowValidatorDirective } from '../validation/hilow';
import { RouterModule } from '@angular/router';
import { ProductCountComponent } from './productCount.component';
import { CategoryCountComponent } from './categoryCount.component';
import { NotFoundComponent } from './notFoundComponent';
import { UnsavedGuard } from './unsaved.guard';
import { MaterialFeatures } from '../material.module';
import { CustomButton } from './custombutton.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialFeatures,
  ],
  declarations: [
    TableComponent,
    FormComponent,
    ValidationHelper,
    ValidationErrorsDirective,
    HiLowValidatorDirective,
    ProductCountComponent,
    CategoryCountComponent,
    NotFoundComponent,
    CustomButton,
  ],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [UnsavedGuard],
})
export class CoreModule {}
