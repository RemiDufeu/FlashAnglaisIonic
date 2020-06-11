import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LexiquePage } from './lexique.page';

describe('LexiquePage', () => {
  let component: LexiquePage;
  let fixture: ComponentFixture<LexiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LexiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
