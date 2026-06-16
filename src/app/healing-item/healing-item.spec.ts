import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealingItem } from './healing-item';

describe('HealingItem', () => {
  let component: HealingItem;
  let fixture: ComponentFixture<HealingItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealingItem],
    }).compileComponents();

    fixture = TestBed.createComponent(HealingItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
