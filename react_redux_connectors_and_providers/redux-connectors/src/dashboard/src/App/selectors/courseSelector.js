// import { fromJS } from 'immutable';

export const getListCourses = (state) => {
  return state.courses.get('courses').valueSeq().toList();
};