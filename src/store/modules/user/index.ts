import { Reducer } from 'redux';
import { ProfileTypes, ProfileState } from './types';
import { AuthTypes } from '../auth/types';

const INITIAL_STATE: ProfileState = {
  profile: { name: '', avatar: '' },
  loading: false,
};

const user: Reducer<ProfileState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileTypes.UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };

    case ProfileTypes.UPDATE_PROFILE_SUCCESS:
      return { profile: action.payload.profile, loading: false };

    case ProfileTypes.UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false };

    case AuthTypes.SIGN_OUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default user;
