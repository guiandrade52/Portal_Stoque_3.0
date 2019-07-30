/**
 * Action types
 */
export enum ProfileTypes {
  UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = '@user/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE = '@user/UPDATE_PROFILE_FAILURE',
}

/**
 * Data types
 */

/**
 * State Type
 */
export interface ProfileState {
  readonly name: string;
  readonly avatar: string;
}
