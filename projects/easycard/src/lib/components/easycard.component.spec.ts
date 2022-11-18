import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasycardComponent } from './easycard.component';

describe('EasycardComponent', () => {
  let component: EasycardComponent;
  let fixture: ComponentFixture<EasycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
