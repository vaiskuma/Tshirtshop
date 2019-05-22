import { Component, OnInit, Input } from '@angular/core';

import { CartProduct } from '../cart-product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html'
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartProduct: CartProduct;
  editModeActive = false;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  get pricePerUnit() {
    return this.cartProduct.product.price;
  }
  get totalPrice() {
    return this.cartProduct.selectedQuantity * this.pricePerUnit;
  }

  removeProduct() {
    this.shoppingCartService.removeProduct(this.cartProduct.product.id);
  }

  activateEditMode() {
    this.editModeActive = true;
  }

  save() {
    this.shoppingCartService.save();
    this.editModeActive = false;
  }

}
