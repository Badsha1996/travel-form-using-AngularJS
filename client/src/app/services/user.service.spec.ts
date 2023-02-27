import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // PROVIDER REQIREMENT 
      imports: [HttpClientTestingModule], 
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  // SERVICE CHECK TO EXECUTE
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have saveData function', () => {
    expect(service.saveUser).toBeDefined();
   });
});




describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should send user data', () => {
    const userData = new FormData();
    userData.append('firstName', 'badsha');
    userData.append('middleName', 'jr');
    userData.append('lastName', 'laskar');
    userData.append('country', 'USA');
    userData.append('email', 'badshalaskar0@gmail.com');
    userData.append('adhar', 'adhar_file.pdf');
    userData.append('passport', 'passport_file.pdf');

    userService.saveUser(userData).subscribe();

    const req = httpTestingController.expectOne('http://localhost:8800/api/travelForm/post');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({
      firstName: 'badsha',
      middleName: 'jr',
      lastName: 'laskar',
      country: 'USA',
      email: 'badshalaskar0@gmail.com',
      adhar: 'adhar_file.pdf',
      passport: 'passport_file.pdf'
    });
  });

  it('should store user data when sendValue() is called', () => {
    userService.sendValue('badsha', 'jr', 'laskar', 'USA', 'badshalaskar0@gmail.com', 'adhar_file.pdf', 'passport_file.pdf');
    expect(userService.getValue()).toEqual(['badsha', 'jr', 'laskar', 'USA', 'badshalaskar0@gmail.com', 'adhar_file.pdf', 'passport_file.pdf']);
  });
});
