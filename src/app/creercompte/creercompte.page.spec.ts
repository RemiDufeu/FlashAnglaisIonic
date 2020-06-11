import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreercomptePage } from './creercompte.page';

describe('CreercomptePage', () => {
  let component: CreercomptePage;
  let fixture: ComponentFixture<CreercomptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreercomptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreercomptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
