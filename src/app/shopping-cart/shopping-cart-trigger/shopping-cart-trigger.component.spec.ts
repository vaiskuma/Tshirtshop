import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTriggerComponent } from './shopping-cart-trigger.component';

describe('ShoppingCartTriggerComponent', () => {
  let component: ShoppingCartTriggerComponent;
  let fixture: ComponentFixture<ShoppingCartTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
