import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsNavAuthComponent } from './brands.component';

describe('BrandsNavAuthComponent', () => {
  let component: BrandsNavAuthComponent;
  let fixture: ComponentFixture<BrandsNavAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsNavAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandsNavAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
