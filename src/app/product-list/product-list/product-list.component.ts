import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../product-list/product';
import { Filter } from '../../core/filter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  /** Object containing the active filters as a property-value pairs
   * e.g size: 'xs'
   */
  filters = {};

  // List of all available filters
  availableFilters = [
    {
      name: 'size',
      items: ['xs', 's', 'm', 'l', 'xl'],
    },
    {
      name: 'colour',
      items: ['black', 'blue', 'white', 'pink'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  /** Returns list of products filtered based on the chosen filters */
  get filteredProducts(): Product[] {
    return this.products.filter(item => {
      return Object.keys(this.filters).every(filterName => {
        return item[filterName].toLowerCase() === this.filters[filterName].toLowerCase();
      });
    });
  }

  /**
  * Called when a filter is chosen(e.g size, colour, etc). Sets a filter and it's value
  * as a property to filters object
  * */
  onSelected(selectedFilter: Filter): void {
    if (!selectedFilter.value) {
      this.clearFilter(selectedFilter);
    } else {
      this.filters[selectedFilter.name] = selectedFilter.value;
    }
  }

  clearFilter(selectedFilter: Filter): void {
    delete this.filters[selectedFilter.name];
  }

}
