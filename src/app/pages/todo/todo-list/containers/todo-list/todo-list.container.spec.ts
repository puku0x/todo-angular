import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TodoFacade } from '../../../../../store';
import { TodoListContainerComponent } from './todo-list.container';

describe('TodoListContainerComponent', () => {
  let component: TodoListContainerComponent;
  let fixture: ComponentFixture<TodoListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TodoListContainerComponent],
      providers: [
        provideMockStore(),
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['fetchAll']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
