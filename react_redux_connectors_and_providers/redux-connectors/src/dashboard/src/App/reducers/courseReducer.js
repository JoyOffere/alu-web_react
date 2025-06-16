import { Map } from 'immutable';
import { SET_COURSES, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = Map({
  courses: Map({}),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return state.set(
        'courses',
        Map(action.data.reduce((acc, course) => ({ ...acc, [course.id]: course }), {}))
      );
    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;