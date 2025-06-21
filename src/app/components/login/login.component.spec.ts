import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../../shared/dialog.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter = { navigate: jasmine.createSpy('navigate') };
  let dialogService: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [{ provide: Router, useValue: mockRouter }, DialogService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.inject(DialogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in with correct password', () => {
    component.password = 'Speak2025';
    component.onLogin();
    expect(sessionStorage.getItem('authenticated')).toBe('true');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/register']);
  });

  it('should show error with wrong password', () => {
    component.password = 'Wrong';
    spyOn(dialogService, 'showDialog');
    component.onLogin();
    expect(dialogService.showDialog).toHaveBeenCalled();
  });
});
