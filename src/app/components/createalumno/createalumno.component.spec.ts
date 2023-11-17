import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatealumnoComponent } from './createalumno.component';

describe('CreatealumnoComponent', () => {
  let component: CreatealumnoComponent;
  let fixture: ComponentFixture<CreatealumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatealumnoComponent]
    });
    fixture = TestBed.createComponent(CreatealumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
