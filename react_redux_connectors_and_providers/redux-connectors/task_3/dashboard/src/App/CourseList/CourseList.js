import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import { fromJS } from 'immutable';

export const mapStateToProps = (state) => ({
  listCourses: getListCourses(state),
});

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;
    return (
      <table className={css(styles.table)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          {listCourses.size === 0 && (
            <CourseListRow isHeader={false} textFirstCell="No course available yet" />
          )}
          {listCourses.map((course) => (
            <CourseListRow
              key={course.get('id')}
              isHeader={false}
              textFirstCell={course.get('name')}
              textSecondCell={course.get('credit').toString()}
              isChecked={course.get('isSelected') || false}
              onChangeRow={(checked) => this.onChangeRow(course.get('id'), checked)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  listCourses: PropTypes.object,
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

CourseList.defaultProps = {
  listCourses: fromJS([]),
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

const styles = StyleSheet.create({
  table: { width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' },
});

export default connect(mapStateToProps, { fetchCourses, selectCourse, unSelectCourse })(CourseList);