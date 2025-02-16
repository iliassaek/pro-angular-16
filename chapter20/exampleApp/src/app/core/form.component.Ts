import { Component } from "@angular/core";
import { FormControl, NgForm, Validators } from "@angular/forms";
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
      this.nameField.setValue(this.product.name ?? "");
      this.categoryField.setValue(this.product.category);
      messageService.reportMessage(
        state.id
          ? new Message(`Editing ${this.product.name}`)
          : new Message("Creating New Product")
      );
    });

    this.nameField.statusChanges.subscribe((newStatus) => {
      if (newStatus == "INVALID") {
        this.categoryField.disable();
      } else {
        this.categoryField.enable();
      }
    });
  }
}
