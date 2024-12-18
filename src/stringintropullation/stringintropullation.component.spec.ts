import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringintropullationComponent } from './stringintropullation.component';

describe('StringintropullationComponent', () => {
  let component: StringintropullationComponent;
  let fixture: ComponentFixture<StringintropullationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringintropullationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringintropullationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
