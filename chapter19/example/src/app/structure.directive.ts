/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @angular-eslint/directive-selector */
import {
    Directive, SimpleChanges, ViewContainerRef, TemplateRef, Input
} from "@angular/core";
 
@Directive({
    selector: "[paIf]"
})
export class PaStructureDirective {
 
    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) { }
 
    @Input("paIf")
    expressionResult: boolean | undefined;
 
    ngOnChanges(changes:  SimpleChanges) {
        let change = changes["expressionResult"];
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }
    }
}