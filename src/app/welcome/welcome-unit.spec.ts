import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Welcome Message', () => {
    it('should display 101 by default on load', () => {
      // Arrange
      // Act
      // Assert
      expect(component.num).toBe(101);
    })
    it('should increment when the Welcome button is clicked', () => {
      // Arrange
      // get welcome button element and assign it to a variable
      // Act
      // click the button
      // Assert
      // assert that the value has incremented
      // assert that the value is no longer 101
    })
  })
});