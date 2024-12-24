import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllSystemOrdersComponent } from './all-system-orders.component';

describe('AllSystemOrdersComponent', () => {
  let component: AllSystemOrdersComponent;
  let fixture: ComponentFixture<AllSystemOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSystemOrdersComponent]
    });
    fixture = TestBed.createComponent(AllSystemOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
