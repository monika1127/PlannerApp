import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from '../Button';
import { addNoteItem } from '../../redux/notes/actions';
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';

const AddNote = (props) => {
  const { addNoteItem, noteID } = props;
  const formik = useFormik({
    initialValues: {
      note: '',
    },
    validationSchema: Yup.object({
      note: Yup.string().max(70, 'Max note length is 70 characters').required(),
    }),
    onSubmit: (values, action) => {
      const noteItem = {
        name: values.note,
        done: false,
      };
      addNoteItem(noteItem, noteID, () => action.resetForm());
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        icon={<PencilIcon width={16} height={16} />}
        title="enter new note"
        type="text"
        formikData={formik.getFieldProps('note')}
        error={
          formik.touched.note && formik.errors.note ? formik.errors.note : null
        }
      />

      <div className="add-note__button">
        <Button size="small" color="primary" type="submit">
          Add Note
        </Button>
      </div>
    </form>
  );
};
AddNote.propTypes = {
  addNoteItem: PropTypes.func.isRequired,
  noteCategory: PropTypes.string.isRequired,
};

export default connect(null, { addNoteItem })(AddNote);
