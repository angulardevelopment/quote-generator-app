import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotegeneratorComponent } from './quotegenerator.component';

describe('QuotegeneratorComponent', () => {
  let component: QuotegeneratorComponent;
  let fixture: ComponentFixture<QuotegeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotegeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
