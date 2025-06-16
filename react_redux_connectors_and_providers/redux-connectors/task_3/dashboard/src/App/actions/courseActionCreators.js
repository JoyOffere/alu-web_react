import { SET_COURSES, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const setCourses = (data) => ({
  type: SET_COURSES,
  data,
});

export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/dist/courses.json');
      const data = await response.json();
      // Normalize data to include isSelected: false
      const normalizedData = data.map((course) => ({
        ...course,
        isSelected: false,
      }));
      dispatch(setCourses(normalizedData));
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
};

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});