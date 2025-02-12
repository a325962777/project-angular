import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJobComponent } from './details-job.component';

describe('DetailsJobComponent', () => {
  let component: DetailsJobComponent;
  let fixture: ComponentFixture<DetailsJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
