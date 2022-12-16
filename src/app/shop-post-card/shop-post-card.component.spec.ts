import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPostCardComponent } from './shop-post-card.component';

describe('ShopPostCardComponent', () => {
  let component: ShopPostCardComponent;
  let fixture: ComponentFixture<ShopPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
