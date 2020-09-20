import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TodoFacade } from '../../../../../store';
import { TodoCreateContainerComponent } from './todo-create.container';

describe('TodoCreateContainerComponent', () => {
  let component: TodoCreateContainerComponent;
  let fixture: ComponentFixture<TodoCreateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TodoCreateContainerComponent],
      providers: [
        provideMockStore(),
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['create']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
