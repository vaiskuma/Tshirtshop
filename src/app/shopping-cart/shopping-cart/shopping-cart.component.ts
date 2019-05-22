import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  get isOpen() {
    return this.shoppingCartService.state;
  }
  get products() {
    return this.shoppingCartService.products;
  }
  get totalPrice() {
    return this.shoppingCartService.totalPrice;
  }

  closeCart(): void {
    this.shoppingCartService.toggleState();
  }

}
