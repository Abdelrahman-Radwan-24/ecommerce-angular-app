import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetnewpassComponent } from './resetnewpass.component';

describe('ResetnewpassComponent', () => {
  let component: ResetnewpassComponent;
  let fixture: ComponentFixture<ResetnewpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetnewpassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetnewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
