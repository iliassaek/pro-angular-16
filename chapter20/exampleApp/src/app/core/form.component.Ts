import { Component } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { Message } from "../messages/message.model";
import { MessageService } from "../messages/message.service";
import { MODES, SharedState } from "./sharedState.service";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  standalone: false,
  selector: "paForm",
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"],
})
export class FormComponent {
  product: Product = new Product();
  categoryField: FormControl = new FormControl();
  editing: boolean = false;
  nameField = new FormControl(
    { value: "", disabled: false },
    {
      updateOn: "change",
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[A-Za-z ]+$"),
      ],
    }
  );
  productForm: FormGroup = new FormGroup({
    name: this.nameField,
    category: this.categoryField,
  });
  constructor(
    private model: Model,
    private stateService: SharedState,
    messageService: MessageService
  ) {
    toObservable(stateService.state).subscribe((state) => {
      this.editing = state.mode == MODES.EDIT;
      if (this.editing && state.id) {
        this.product = Product.fromProduct(
          this.model.getProduct(state.id) ?? new Product()
        );
      } else {
        this.product = new Product();
      }
      this.productForm.reset(this.product);
      messageService.reportMessage(
        state.id
          ? new Message(`Editing ${this.product.name}`)
          : new Message("Creating New Product")
      );
    });

    this.productForm.statusChanges.subscribe(newStatus => {
      if (newStatus == "INVALID") {
          let invalidControls: string[] = [];
          for (let controlName in this.productForm.controls) {
              if (this.productForm.controls[controlName].invalid) {
                  invalidControls.push(controlName)
              }
          }
          messageService.reportMessage(
              new Message(`INVALID: ${invalidControls.join(", ")}`))
      } else {
          messageService.reportMessage(new Message(newStatus));    
      }    
  })  
  }
}
