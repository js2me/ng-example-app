import {
  async,
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed // Одна из первых и самых важных тестовых утилит Angular. Она создает тестовый модуль Angular (как @NgModule)
          // который вы настраиваете в  configuringTestingModule методе
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/layout/header.component';
import {FooterComponent} from './shared/layout/footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from './shared/services/auth.service';
import {ApiService} from './shared/services/api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {JwtService} from './shared/services/jwt.service';
import {UserService} from './shared/services/user.service';


describe('AppComponent', () => {
  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    debugElement: DebugElement,
    element: HTMLElement;

  beforeEach(async(() => {
    //Вызов configuringTestingModule в пределах beforeEach, необходим для того, чтобы
    //TestBed мог сбросить себя до базового состояния до запуска каждого теста
    TestBed.configureTestingModule({ //Этот метод принимает объект метаданных @NgModule.
      //объект может содержать большинство свойств нормально NgModule
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ], // Описываем тестируемый компонент
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true //Благодаря этому в среде Angular будет автоматически
        },              //выполняться обнаружения изменений
        ApiService,
        AuthService,
        JwtService,
        UserService
        //{provide: UserService, useValue: {isAuth: true, user:{name:''}}} //Пример добавления провайдера UserService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();  // компиляция шаблонов и css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // AppComponent тестовый экземпляр
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });

  it('should been created', () => {
    expect(component).toBeTruthy();
  });

  it('should display header component', () => {
    fixture.detectChanges();
    console.log(element.querySelector('layout-header'));
    expect(element.querySelector('layout-header')).not.toBe(null);
  });
  it('should display footer component', () => {
    expect(element.querySelector('layout-footer')).not.toBe(null);
  });
  it('should display page content', () => {
    let pageElement: Element = element.querySelector('.page');
    expect(pageElement).not.toBe(null);
    expect(pageElement.querySelector('router-outlet')).not.toBe(null);
  });

});
