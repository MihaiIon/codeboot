import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";
import * as yup from "yup";

// Components
import { Formik, Field, Form } from "formik";
import { Label, Button, FormFooter } from "../modules/Form";
import { Highlight } from "../modules/InfoBubble";

// Contexts
import { AppContext, FileSystemContext } from "../components/App";

// Schema
// ====================================================================================

const internationalLCharacters =
  "a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð";
const nameRegexp = `[0-9${internationalLCharacters}]+(?:(?:-| )[0-9${internationalLCharacters}]+)*`;

const schema = yup.object().shape({
  filename: yup
    .string()
    .trim()
    .min(4)
    .max(256)
    .matches(/^[a-z][a-zA-Z_]+\.js$/)
    .required(),
  collaborators: yup
    .string()
    .trim()
    .max(256)
    .matches(new RegExp(`^${nameRegexp}(?:, ${nameRegexp})*$`))
});

// Form
// ====================================================================================

function FormCreateFile({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        filename: "",
        collaborators: ""
      }}
      validationSchema={schema}
      onSubmit={({ filename, collaborators }) => {
        onSubmit(filename, collaborators);
      }}
      render={({ errors, touched }) => (
        <Form>
          <Label
            htmlFor="filename"
            text="Script Name"
            infoContent={
              <ul>
                <li>
                  The filename should start with a <Highlight>lowercase letter</Highlight>.
                </li>
                <li>
                  Each <Highlight>Javascript</Highlight> script file should end with the extension:{" "}
                  <Highlight>js</Highlight>.
                </li>
                <li>
                  The filename should not contain any <Highlight>spaces</Highlight> or any{" "}
                  <Highlight>special characters</Highlight> other than the{" "}
                  <strong>underscore</strong>.
                </li>
              </ul>
            }
            infoPreferedPlace="right"
          />
          <Field
            id="filename"
            name="filename"
            type="text"
            className={cn("o-input", ["-error", errors.filename && touched.filename])}
          />

          {/* ------------------------------------------------------ */}

          <Label
            optional
            htmlFor="collaborators"
            text="Collaborator(s)"
            infoContent={
              <div>
                If there is more than <Highlight>1 collaborator</Highlight>, separate each name by a
                comma ( <Highlight>,</Highlight> ).
              </div>
            }
            infoPreferedPlace="right"
          />
          <Field
            id="collaborators"
            name="collaborators"
            type="text"
            className={cn("o-input", ["-error", errors.collaborators && touched.collaborators])}
          />

          {/* ------------------------------------------------------ */}

          <FormFooter>
            <AppContext.Consumer>
              {({ hideModal }) => <Button text="Cancel" action={hideModal} />}
            </AppContext.Consumer>
            <Button submit text="Create Script" />
          </FormFooter>
        </Form>
      )}
    />
  );
}

FormCreateFile.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FormCreateFile;
