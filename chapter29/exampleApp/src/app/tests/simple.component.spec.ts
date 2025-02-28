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

  it('implements output property', () => {
    let highlighted: boolean = false;
    component.change.subscribe((value) => (highlighted = value));
    debugElement.triggerEventHandler('mouseenter', new Event('mouseenter'));
    expect(highlighted).toBeTruthy();
    debugElement.triggerEventHandler('mouseleave', new Event('mouseleave'));
    expect(highlighted).toBeFalsy();
  });
});
