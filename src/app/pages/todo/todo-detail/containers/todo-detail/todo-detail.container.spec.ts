import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TodoFacade } from '../../../../../store';
import { TodoDetailContainerComponent } from './todo-detail.container';

describe('TodoDetailContainerComponent', () => {
  let component: TodoDetailContainerComponent;
  let fixture: ComponentFixture<TodoDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TodoDetailContainerComponent],
      providers: [
        provideMockStore(),
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['fetch']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
