/**
 * Action types
 */
export enum TasksTypes {
  LOAD_REQUEST = '@Tasks/LOAD_REQUEST',
  LOAD_SUCCESS = '@Tasks/LOAD_SUCCESS',
  LOAD_FAILURE = '@Tasks/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Task {
  executionId: number;
  situacao: string;
}

/**
 * State Type
 */
export interface TasksState {
  readonly data: Task[];
  readonly loading: boolean;
  readonly error: boolean;
}
