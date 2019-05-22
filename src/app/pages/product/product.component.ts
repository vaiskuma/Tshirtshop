import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../product-list/product';
import { ProductService } from '../../product-list/product.service';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    // Get id from url
    const id = +this.route.snapshot.paramMap.get('id');
    // Get product details from Product service where product id = to id from url
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  get buttonText(): string {
    return this.shoppingCartService.productExists(this.product.id) ? 'Add one more' : 'Add to cart';
  }

  addToBasket() {
    this.shoppingCartService.addProduct(this.product);
  }

}
