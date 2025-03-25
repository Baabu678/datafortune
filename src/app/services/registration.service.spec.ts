import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService]
    });

    service = TestBed.inject(RegistrationService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should POST registration data', () => {
    const mockData = {
      firstName: 'John',
      lastName: 'Doe',
      state: 'NJ',
      email: 'john@example.com',
      subscribe: true
    };

    service.register(mockData).subscribe(res => {
      expect(res).toBeTruthy();
    });

    const req = http.expectOne(`${service['apiUrl']}?key=john@example.com`);
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });

  afterEach(() => {
    http.verify();
  });
});
