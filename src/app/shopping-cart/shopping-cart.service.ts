import { Injectable } from '@angular/core';

import { Product } from '../product-list/product';
import { CartProduct } from './cart-product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private isOpen = false;
  private selectedProducts: CartProduct[] = [];

  // Local Storage key
  private lsKey = 'ss-cart-products';

  // Save current state of selected products to local storage
  private updateLS() {
    localStorage.setItem(this.lsKey, JSON.stringify(this.selectedProducts));
  }

  constructor() {
    const cartProducts = JSON.parse(localStorage.getItem(this.lsKey));
    this.selectedProducts = !!cartProducts ? cartProducts : [];
  }

  /** Public properties */

  // Get total number of items for all products
  get count() {
    return this.selectedProducts.map(cartProduct => cartProduct.selectedQuantity)
      .reduce((sum, num) => sum + num, 0);
  }
  get products() {
    return this.selectedProducts;
  }
  get state() {
    return this.isOpen;
  }
    // Get total price for all products
  get totalPrice() {
    return this.selectedProducts.map(cartProduct => cartProduct.product.price * cartProduct.selectedQuantity)
      .reduce((sum, num) => sum + num, 0);
  }


  /** Public methods */

  addProduct(product: Product): void {
    // Check if product is already in the list
    const cartProduct = this.selectedProducts.find(item => item.product.id === product.id);
    if (!cartProduct) {
      // If it's not, add it
      this.selectedProducts.push(new CartProduct(product));
    } else {
      // If it is, then just increment the quantity
      cartProduct.selectedQuantity++;
    }
    this.updateLS();
  }

  removeProduct(id: number): void {
    this.selectedProducts.find((item, index) => {
      if (item.product.id === id ) {
        this.selectedProducts.splice(index, 1);
        return true;
      }
    });
    this.updateLS();
  }

  productExists(id: number) {
    return this.selectedProducts.find(item => item.product.id === id);
  }

  toggleState(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }

  save() {
    this.updateLS();
  }

}
