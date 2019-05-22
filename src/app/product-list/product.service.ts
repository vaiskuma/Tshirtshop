import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL to web api
  private productsUrl = 'https://tshop-backend.herokuapp.com/api/tshirts';
 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient) { }

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    // Get products from local storage
    const products = JSON.parse(localStorage.getItem('ss-products'));
    
     console.log(products)
    // console.log(products[0])
    

    if (products) {
      return new Observable((observer) => {
        // console.log(products)
        observer.next(products);
      });
    }

    // If products are not set in local storage, get them from api
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        // tslint:disable-next-line:no-shadowed-variable
        tap(products=> {
          
          console.log(products)
          localStorage.setItem('ss-products', JSON.stringify(products));
         
        }),
        catchError(this.handleError)
      );
  }

  /** GET product by id */
  getProduct(id: number): Observable<Product> {
    return this.getProducts()
      .pipe(
        map(products => {
          return products.find(product => {
            return product.id === id;
          });
        })
      );
  }

}
