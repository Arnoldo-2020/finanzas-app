import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';

import { authInterceptor } from './auth.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('authInterceptor', () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;


  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideHttpClientTesting()
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('debe añadir el header Authorization si existe el token', () => {

    localStorage.setItem('auth_token', 'fake-jwt-token-xyz');


    http.get('/api/data').subscribe();


    const req = httpMock.expectOne('/api/data');

    expect(req.request.headers.get('Authorization')).toBe('Bearer fake-jwt-token-xyz');

    req.flush({});
  });
});
