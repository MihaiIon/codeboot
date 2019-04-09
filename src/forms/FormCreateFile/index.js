import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Components
import { Formik, Field, Form } from "formik";
import { Label, ModalFooter } from "../../components-ui";

// Helpers
import { filenameValidation, collaboratorsValidation } from "./core/helpers";

function FormCreateFile({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        filename: "lala",
        collaborators: ""
      }}
      onSubmit={({ filename, collaborators }, actions) => {
        // Filename
        const isFilenameValid = filenameValidation(filename);
        if (!isFilenameValid) actions.setFieldError("filename", "-error");
        else actions.setFieldError("filename", "");

        // Collaborators
        const isCollaboratorsValid = collaboratorsValidation(collaborators);
        if (!isCollaboratorsValid) actions.setFieldError("collaborators", "-error");
        else actions.setFieldError("collaborators", "");

        // Submit
        if (isFilenameValid && isCollaboratorsValid) {
          onSubmit();
        } else {
          actions.setSubmitting(false);
        }
      }}
      render={({ errors, isSubmitting }) => (
        <Form>
          <Label text="Script Name" infoContent="lala" />
          <Field type="text" name="filename" className={cn("o-input", errors.filename)} />
          <Label optional text="Author(s)" infoContent="lala" />
          <Field type="text" name="collaborators" className={cn("o-input", errors.collaborators)} />
          <ModalFooter cancel isSubmitting={isSubmitting} />
        </Form>
      )}
    />
  );
}

FormCreateFile.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormCreateFile;
