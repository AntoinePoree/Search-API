import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieCardComponent } from './entrie-card.component';

describe('EntrieCardComponent', () => {
  let component: EntrieCardComponent;
  let fixture: ComponentFixture<EntrieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntrieCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
