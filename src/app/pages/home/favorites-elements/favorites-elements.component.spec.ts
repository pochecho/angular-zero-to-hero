import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesElementsComponent } from './favorites-elements.component';

describe('FavoritesElementsComponent', () => {
  let component: FavoritesElementsComponent;
  let fixture: ComponentFixture<FavoritesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
