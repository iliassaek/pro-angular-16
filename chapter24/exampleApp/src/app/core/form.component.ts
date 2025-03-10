import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { FilteredFormArray } from './filteredFormArray';
import { LimitValidator } from '../validation/limit';
import { UniqueValidator } from '../validation/unique';
import { ProhibitedValidator } from '../validation/prohibited';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'paForm',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class FormComponent {
  product: Product = new Product();
  editing: boolean = false;

  keywordGroup = new FilteredFormArray([this.createKeywordFormControl()], {
    validators: UniqueValidator.unique(),
  });

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[A-Za-z ]+$'),
      ],
      updateOn: 'change',
    }),

    category: new FormControl('', {
      validators: Validators.required,
      asyncValidators: ProhibitedValidator.prohibited(),
    }),

    price: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[0-9.]+$'),
        LimitValidator.Limit(300),
      ],
    }),
    keywords: this.keywordGroup,
  });

  constructor(private model: Model, private router: Router) {}

  ngOnInit() {
    this.editing = this.mode == 'edit';
    if (this.id != null) {
      let idVal = parseInt(this.id);
      Object.assign(
        this.product,
        this.model.getProduct(idVal) || new Product()
      );
      this.product.name = this.optionalName ?? this.product.name;
      this.product.category = this.optionalCategory 
          ?? this.product.category;
      if (this.optionalPrice != undefined) {                
          this.product.price = Number.parseFloat(this.optionalPrice);
      }
      this.productForm.patchValue(this.product);
    }
  }

  @Input()
  mode?: string;

  @Input()
  id?: string;

  @Input('name')
  optionalName?: string;

  @Input('category')
  optionalCategory?: string;

  @Input('price')
  optionalPrice?: string;

  submitForm() {
    if (this.productForm.valid) {
      Object.assign(this.product, this.productForm.value);
      this.model.saveProduct(this.product);
      this.product = new Product();
      this.productForm.reset();
      this.router.navigateByUrl("/");
    }
  }

  resetForm() {
    this.editing = true;
    this.product = new Product();
    this.productForm.reset();
  }

  createKeywordFormControls(count: number = 0) {
    this.keywordGroup.clear();
    for (let i = 0; i < count + 1; i++) {
      this.keywordGroup.push(this.createKeywordFormControl());
    }
  }

  createKeywordFormControl() {
    return new FormControl('', {
      validators: Validators.pattern('^[A-Za-z ]+$'),
    });
  }

  addKeywordControl() {
    this.keywordGroup.push(this.createKeywordFormControl());
  }

  removeKeywordControl(index: number) {
    this.keywordGroup.removeAt(index);
  }
}
