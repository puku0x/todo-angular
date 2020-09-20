import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TodoFacade } from '../../../../../store';
import { TodoEditContainerComponent } from './todo-edit.container';

describe('TodoEditContainerComponent', () => {
  let component: TodoEditContainerComponent;
  let fixture: ComponentFixture<TodoEditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TodoEditContainerComponent],
      providers: [
        provideMockStore(),
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['fetch', 'update']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
