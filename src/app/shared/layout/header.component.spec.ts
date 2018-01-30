import {HeaderComponent} from './header.component';
import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {UserPhotoComponent} from '../components/user-photo/user-photo.component';
import {ApiService} from '../services/api.service';
import {JwtService} from "../services/jwt.service";
import {UserService} from "../services/user.service";
import {AuthService} from '../services/auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent,
    fixture: ComponentFixture<HeaderComponent>,
    debugElement: DebugElement,
    element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        UserPhotoComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true
        },
        ApiService,
        AuthService,
        JwtService,
        UserService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance; // AppComponent тестовый экземпляр
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });

  it('should been created',()=>{
      expect(component).toBeTruthy();
  });

});
