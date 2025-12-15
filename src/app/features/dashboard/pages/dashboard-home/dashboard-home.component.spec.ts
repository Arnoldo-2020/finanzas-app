import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeComponent } from './dashboard-home.component';
import { TranslateModule } from '@ngx-translate/core';

describe('DashboardHomeComponent', () => {
  let component: DashboardHomeComponent;
  let fixture: ComponentFixture<DashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                DashboardHomeComponent,
                TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
