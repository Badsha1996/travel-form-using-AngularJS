import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
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

  // TEST TO CHECK FUNCTION OF SAVEUSER
  it('should have saveData function', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.saveUser).toBeTruthy();
   });
});
