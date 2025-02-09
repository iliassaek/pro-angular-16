/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Directive, ViewContainerRef, TemplateRef, Input} 
    from "@angular/core";
 
@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
 
    constructor(private container: ViewContainerRef,
        private template: TemplateRef<Object>) { }
 
    @Input("paForOf")
    dataSource: any;
 
    ngOnInit() {
        this.container.clear();
        for (let i = 0; i < this.dataSource.length; i++) {
            this.container.createEmbeddedView(this.template,
                new PaIteratorContext(this.dataSource[i]));
        }
    }
}
 
class PaIteratorContext {
    constructor(public $implicit: any) { }
}