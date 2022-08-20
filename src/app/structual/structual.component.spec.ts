import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructualComponent } from './structual.component';

describe('StructualComponent', () => {
  let component: StructualComponent;
  let fixture: ComponentFixture<StructualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
