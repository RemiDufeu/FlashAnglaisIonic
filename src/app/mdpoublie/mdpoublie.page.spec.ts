import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdpoubliePage } from './mdpoublie.page';

describe('MdpoubliePage', () => {
  let component: MdpoubliePage;
  let fixture: ComponentFixture<MdpoubliePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpoubliePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdpoubliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
