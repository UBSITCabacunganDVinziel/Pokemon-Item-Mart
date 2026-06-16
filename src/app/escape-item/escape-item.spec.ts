import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeItem } from './escape-item';

describe('EscapeItem', () => {
  let component: EscapeItem;
  let fixture: ComponentFixture<EscapeItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscapeItem],
    }).compileComponents();

    fixture = TestBed.createComponent(EscapeItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
