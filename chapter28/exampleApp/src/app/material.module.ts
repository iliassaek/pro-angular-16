import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
 
const features = [MatButtonModule, MatTableModule];
 
@NgModule({
    imports: [features],
    exports: [features]
})
export class MaterialFeatures {}