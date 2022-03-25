import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsModalComponent } from './items-modal.component';

describe('ItemsModalComponent', () => {
  let component: ItemsModalComponent;
  let fixture: ComponentFixture<ItemsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
