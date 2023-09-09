import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterplannetComponent } from './characterplannet.component';

describe('CharacterplannetComponent', () => {
  let component: CharacterplannetComponent;
  let fixture: ComponentFixture<CharacterplannetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterplannetComponent]
    });
    fixture = TestBed.createComponent(CharacterplannetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
