import { Todo } from '../../../models';
import {
  State as TodoState,
  featureName,
  initialState,
  adapter,
} from '../states';
import {
  getError,
  getIsFetching,
  getSelectedId,
  getTodo,
} from './todo.selector';

interface State {
  [featureName]: TodoState;
}

describe('TodoSelector', () => {
  it('should handle selectors', () => {
    const todos: Todo[] = [
      {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      {
        id: '2',
        title: 'test2',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      {
        id: '3',
        title: 'test3',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
    ];
    const state: State = {
      [featureName]: adapter.setAll(todos, {
        ...initialState,
        loading: true,
        selectedId: '1',
      }),
    };

    expect(getError(state)).toEqual(state.todo.error);
    expect(getIsFetching(state)).toEqual(state.todo.isFetching);
    expect(getSelectedId(state)).toEqual(state.todo.selectedId);
    expect(getTodo(state)).toEqual(todos[0]);
  });
});
