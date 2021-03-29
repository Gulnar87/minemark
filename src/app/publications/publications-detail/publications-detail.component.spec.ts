import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WorkDetailedComponent } from "./work-detailed.component";

describe("WorkDetailedComponent", () => {
  let component: WorkDetailedComponent;
  let fixture: ComponentFixture<WorkDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkDetailedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
