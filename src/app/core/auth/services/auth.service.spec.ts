import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('debe guardar el token y devolver true al hacer login', (done) => {

    const spy = spyOn(localStorage, 'setItem');


    service.login('test@test.com', '123456').subscribe((isLoggedIn) => {


      expect(isLoggedIn).toBeTrue();

      expect(spy).toHaveBeenCalledWith('auth_token', 'fake-jwt-token-xyz');

      done();
    });
  });

  it('debe eliminar el token al hacer logout', () => {
    const spy = spyOn(localStorage, 'removeItem');

    service.logout();

    expect(spy).toHaveBeenCalledWith('auth_token');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
