import { action } from 'typesafe-actions';

import { FilterTypes, Filter } from './types';

export const changeFilter = (filter: Filter) => action(FilterTypes.CHANGE_FILTER, { filter });
