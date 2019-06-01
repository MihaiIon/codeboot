import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Components
import { Formik, Field, Form } from "formik";
import { ModalFooter } from "../../modules/Modal";
import { Label } from "../../modules/Form";
import { Highlight } from "../../modules/InfoBubble";

// import { Label, ModalFooter, InfoBubblePopoverHighlight as Highlight } from "../../components-ui";

// Helpers
import { filenameValidation, collaboratorsValidation } from "./core/helpers";

function FormCreateFile({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        filename: "",
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
          onSubmit(filename, collaborators.trim());
        } else {
          actions.setSubmitting(false);
        }
      }}
      render={({ errors, isSubmitting }) => (
        <Form>
          <Label
            text="Script Name"
            infoContent={
              <ul>
                <li>
                  Each <Highlight>Javascript</Highlight> script file should end with the extension:{" "}
                  <Highlight>js</Highlight>.
                </li>
                <li>
                  The filename should not contain any <Highlight>spaces</Highlight>.
                </li>
              </ul>
            }
            infoPreferPlace="right"
          />
          <Field type="text" name="filename" className={cn("o-input", errors.filename)} />
          <Label
            optional
            text="Collaborator(s)"
            infoContent={
              <div>
                If there is more than <Highlight>1 collaborator</Highlight>, separate each name by a
                comma ( <Highlight>,</Highlight> ).
              </div>
            }
            infoPreferPlace="right"
          />
          <Field type="text" name="collaborators" className={cn("o-input", errors.collaborators)} />
          <ModalFooter cancel submitText="Create Script" isSubmitting={isSubmitting} />
        </Form>
      )}
    />
  );
}

FormCreateFile.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormCreateFile;
