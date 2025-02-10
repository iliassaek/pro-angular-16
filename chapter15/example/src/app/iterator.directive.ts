/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Directive, ViewContainerRef, TemplateRef, Input} 
    from "@angular/core";
import { interval } from "rxjs";
 
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
                new PaIteratorContext(this.dataSource[i],
                    i, this.dataSource.length));
        }
    }
}
 
class PaIteratorContext {
    odd: boolean; even: boolean;
    first: boolean; last: boolean;

    constructor(public $implicit: any,
            public index: number, total: number ) {

        this.odd = index % 2 == 1;
        this.even = !this.odd;
        this.first = index == 0;
        this.last = index == total - 1;

        interval(2000).subscribe(() => {
            this.odd = !this.odd; this.even = !this.even;
            this.$implicit.price++;            
        })
    }
}