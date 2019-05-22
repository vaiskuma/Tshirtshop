import { Product } from '../product-list/product';

export class CartProduct {
    selectedQuantity: number;
    product: Product;
    constructor(product: Product) {
        this.product = product;
        this.selectedQuantity = 1;
    }
}
