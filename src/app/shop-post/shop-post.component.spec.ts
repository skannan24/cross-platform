import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPostComponent } from './shop-post.component';

describe('ShopPostComponent', () => {
  let component: ShopPostComponent;
  let fixture: ComponentFixture<ShopPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
