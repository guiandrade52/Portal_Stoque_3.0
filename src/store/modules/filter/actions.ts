import { action } from 'typesafe-actions';

import { FilterTypes, Filter } from './types';

export const updateFilter = (filter: Filter) => action(FilterTypes.UPDATE_FILTER, { filter });
