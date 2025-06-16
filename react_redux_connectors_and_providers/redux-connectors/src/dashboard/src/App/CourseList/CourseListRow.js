import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell, isChecked, onChangeRow }) => {
  if (isHeader) {
    return (
      <tr className={css(styles.headerRow)}>
        <th className={css(styles.th)} colSpan={textSecondCell ? 1 : 2}>{textFirstCell}</th>
        {textSecondCell && <th className={css(styles.th)}>{textSecondCell}</th>}
      </tr>
    );
  }

  return (
    <tr className={css(styles.row)}>
      <td className={css(styles.td)}>{textFirstCell}</td>
      <td className={css(styles.td)}>
        {textSecondCell && <span>{textSecondCell}</span>}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChangeRow(e.target.checked)}
          className={css(styles.checkbox)}
        />
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  isChecked: false,
  onChangeRow: () => {},
};

const styles = StyleSheet.create({
  headerRow: { backgroundColor: '#deb5b545', textAlign: 'left' },
  row: { backgroundColor: '#f5f5f5ab' },
  th: { padding: '0.5rem', borderBottom: '1px solid #ddd' },
  td: { padding: '0.5rem', borderBottom: '1px solid #ddd' },
  checkbox: { marginLeft: '1rem' },
});

export default CourseListRow;