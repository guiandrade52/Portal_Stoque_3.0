import { Action } from 'redux';

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
export interface Profile {
  name: string;
  avatar: string;
}

/**
 * State Type
 */
export interface ProfileState {
  readonly profile: Profile;
  readonly loading: boolean;
}
