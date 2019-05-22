# T-shirt Shop

## App Requirements

### List page:
- show all shirts in sthe shop
- should have option to filter by size and/or colour
- should have option to click on a shirt and see details

### Details page:
- show details of selected shirt
- each shirt should have a "Add to basket" button
- if item is already added the button should say "Add one more" and it should increase amount.
- page should have "Back to list" button

### Shopping cart:
- dispayed in the top of every page
- should show number of items
- when clicked, a modal should open and show all items and functionality to remove item,
  change quantity and see total price
- when page is reloaded, the shopping cart items should be saved

### Technicalities
- It should be e built using Angular (NOT angular.js)
- The endpoint for retrieving the list of shirts is at https://tshop-backend.herokuapp.com/api/tshirts
- You may use any additional libraries
- Unit tests

## Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.


### Installation
- Clone the repo `git clone https://github.com/vaiskuma/Tshirt-shop.git`.
- Run `npm install`.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
