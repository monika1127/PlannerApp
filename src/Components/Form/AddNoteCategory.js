import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from '../Button';
import { addNoteCategory } from '../../redux/notes/actions';
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';

const AddNoteCategory = (props) => {
  const { addNoteCategory } = props;
  const formik = useFormik({
    initialValues: {
      noteCategory: '',
    },
    validationSchema: Yup.object({
      noteCategory: Yup.string()
        .max(30, 'Max note length is 70 characters')
        .required(),
    }),
    onSubmit: (values, action) => {
      const note = { name: values.noteCategory };
      addNoteCategory(note, () => action.resetForm());
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        icon={<PencilIcon width={16} height={16} />}
        title="enter note category"
        type="text"
        formikData={formik.getFieldProps('noteCategory')}
        error={
          formik.touched.noteCategory && formik.errors.noteCategory
            ? formik.errors.noteCategory
            : null
        }
      />

      <div className="add-note__button">
        <Button size="small" color="primary" type="submit">
          Add Note Category
        </Button>
      </div>
    </form>
  );
};
AddNoteCategory.propTypes = {
  addNoteCategory: PropTypes.func.isRequired,
};

export default connect(null, { addNoteCategory })(AddNoteCategory);
