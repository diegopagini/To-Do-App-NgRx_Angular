import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [new Todo('Salvar al mundo')];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
