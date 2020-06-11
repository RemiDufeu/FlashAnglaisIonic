import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectifPage } from './objectif.page';

describe('ObjectifPage', () => {
  let component: ObjectifPage;
  let fixture: ComponentFixture<ObjectifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjectifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
