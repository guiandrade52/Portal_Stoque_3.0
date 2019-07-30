import { action } from 'typesafe-actions';

import { ProfileTypes, Profile } from './types';
import { Login } from '../auth/types';

export const updateProfileRequest = (login: Login) =>
  action(ProfileTypes.UPDATE_PROFILE_REQUEST, { login });

export const updateProfileSuccess = (profile: Profile) =>
  action(ProfileTypes.UPDATE_PROFILE_SUCCESS, { profile });

export const updateProfileFailure = () => action(ProfileTypes.UPDATE_PROFILE_FAILURE);
