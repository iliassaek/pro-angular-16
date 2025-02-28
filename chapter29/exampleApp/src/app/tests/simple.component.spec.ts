import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { SimpleComponent } from '../simple.component';
import { Product } from '..//model/product.model';
import { Model } from '../model/repository.model';
import { signal } from '@angular/core';
import { DebugElement } from '@angular/core';

describe('SimpleComponent', () => {
  let fixture: ComponentFixture<SimpleComponent>;
  let component: SimpleComponent;
  let debugElement: DebugElement;
  let divElement: HTMLDivElement;

  let mockRepository = {
    Products: signal([
      new Product(1, 'test1', 'Soccer', 100),
      new Product(2, 'test2', 'Chess', 100),
      new Product(3, 'test3', 'Soccer', 100),
    ]),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleComponent],
      providers: [{ provide: Model, useValue: mockRepository }],
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(SimpleComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      divElement = debugElement.children[0].nativeElement;
    });
  }));

  it('handles mouse events', () => {
    expect(component.highlighted).toBeFalsy();
    expect(divElement.classList.contains('bg-success')).toBeFalsy();
    debugElement.triggerEventHandler('mouseenter', new Event('mouseenter'));
    fixture.detectChanges();
    expect(component.highlighted).toBeTruthy();
    expect(divElement.classList.contains('bg-success')).toBeTruthy();
    debugElement.triggerEventHandler('mouseleave', new Event('mouseleave'));
    fixture.detectChanges();
    expect(component.highlighted).toBeFalsy();
    expect(divElement.classList.contains('bg-success')).toBeFalsy();
  });
});
