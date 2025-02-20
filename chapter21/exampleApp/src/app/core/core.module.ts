import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState } from "./sharedState.service";
import { ValidationHelper } from "./validationHelper.pipe";
import { ValidationErrorsDirective } from "./validationErrors.directive";
 
@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, ReactiveFormsModule],
  declarations: [TableComponent, FormComponent, ValidationHelper, ValidationErrorsDirective],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [SharedState],
})
export class CoreModule {}