import { action } from 'typesafe-actions';

import { TasksTypes, Task } from './types';
import { Filter } from '../filter/types';

export const loadTasksRequest = (filter: Filter) => action(TasksTypes.LOAD_REQUEST, filter);

export const loadTasksSuccess = (data: Task[]) => action(TasksTypes.LOAD_SUCCESS, { data });

export const loadTasksFailure = () => action(TasksTypes.LOAD_FAILURE);

export const selectTask = (task: Task) => action(TasksTypes.SELECT_TASK, { task });
