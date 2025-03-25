import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in with correct password', () => {
    component.password = 'Speak2025';
    component.onLogin();
    expect(localStorage.getItem('loggedIn')).toBe('true');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/register']);
  });

  it('should show error with wrong password', () => {
    component.password = 'Wrong';
    component.onLogin();
    expect(component.passwordError).toBeTrue();
  });
});
