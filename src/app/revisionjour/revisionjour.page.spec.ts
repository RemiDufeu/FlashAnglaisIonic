import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevisionjourPage } from './revisionjour.page';

describe('RevisionjourPage', () => {
  let component: RevisionjourPage;
  let fixture: ComponentFixture<RevisionjourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionjourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevisionjourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
