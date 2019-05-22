import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-trigger',
  templateUrl: './shopping-cart-trigger.component.html',
  styleUrls: ['./shopping-cart-trigger.component.css']
})
export class ShoppingCartTriggerComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  get count() {
    return this.shoppingCartService.count;
  }

  toggle(): void {
    // Tell shopping cart service to open/close shopping cart
    this.shoppingCartService.toggleState();
  }

}
