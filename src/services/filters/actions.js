import { UPDATE_FILTER, REFRESH_TERM_FILTER } from './actionTypes';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});

export const refreshFilter = term => ({
  type: REFRESH_TERM_FILTER,
  payload: term
});
