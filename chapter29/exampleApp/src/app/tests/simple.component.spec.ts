import { TestBed, ComponentFixture} from "@angular/core/testing";
import { SimpleComponent } from "../simple.component";

describe("SimpleComponent", () => {

    let fixture: ComponentFixture<SimpleComponent>;
    let component: SimpleComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleComponent]
        });
        fixture = TestBed.createComponent(SimpleComponent);
        component = fixture.componentInstance;
    });

    it("is defined", () => {
        expect(component).toBeDefined()
    });
});