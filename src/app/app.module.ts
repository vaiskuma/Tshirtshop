import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { SelectComponent } from './components/select/select.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { ShoppingCartTriggerComponent } from './shopping-cart/shopping-cart-trigger/shopping-cart-trigger.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SelectComponent,
    ProductsComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ShoppingCartTriggerComponent,
    ShoppingCartItemComponent,
    MenuComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
