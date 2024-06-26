import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorFormComponent } from './profesor-form.component';

describe('ProfesorFormComponent', () => {
  let component: ProfesorFormComponent;
  let fixture: ComponentFixture<ProfesorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
