import { Component, ElementRef, Input, ViewChild } from "@angular/core";
 
@Component({
    standalone: false,
    selector: "customButton",
    templateUrl: "custombutton.component.html",
    styleUrls: ["custombutton.component.scss"] 
})
export class CustomButton {
 
    @Input("themeColor")
    themeColor: string = "primary"
 
    @ViewChild("buttonTarget")
    button?: ElementRef
 
    ngAfterViewInit() {
        this.button?.nativeElement.classList
            .add(`custom-button-${this.themeColor}`);
    }
}