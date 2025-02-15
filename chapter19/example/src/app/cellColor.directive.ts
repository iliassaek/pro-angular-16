/* eslint-disable @angular-eslint/directive-class-suffix */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/directive-selector */
import { Directive, HostBinding } from "@angular/core";
 
@Directive({
    selector: "td[paApplyColor]"
})
export class PaCellColor {
 
    @HostBinding("class")
    bgClass: string = "";
 
    setColor(dark: Boolean) {
        this.bgClass = dark ? "table-dark" : "";
    }
}