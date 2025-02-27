import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SimpleComponent } from '../simple.component';
import { Product } from '..//model/product.model';
import { Model } from '../model/repository.model';
import { signal } from '@angular/core';

describe('SimpleComponent', () => {
  let fixture: ComponentFixture<SimpleComponent>;
  let component: SimpleComponent;

  let mockRepository = {
    Products: signal([
      new Product(1, 'test1', 'Soccer', 100),
      new Product(2, 'test2', 'Chess', 100),
      new Product(3, 'test3', 'Soccer', 100),
    ]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleComponent],
      providers: [{ provide: Model, useValue: mockRepository }],
    });
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
  });

  it('filters categories', () => {
    component.category = 'Chess';
    expect(component.getProducts().length).toBe(1);
    component.category = 'Soccer';
    expect(component.getProducts().length).toBe(2);
    component.category = 'Running';
    expect(component.getProducts().length).toBe(0);
  });
});
