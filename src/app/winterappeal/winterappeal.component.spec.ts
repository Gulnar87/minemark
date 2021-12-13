import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterAppealComponent } from './winterappeal.component';

describe('DonateComponent', () => {
  let component: WinterAppealComponent;
  let fixture: ComponentFixture<WinterAppealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinterAppealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
