import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

// Components
import { Formik, Form, Field } from "formik";
import ConsoleTip from "./ConsoleTip";

function ConsoleInput({ history }) {
  return (
    <Formik
      initialValues={{
        value: ""
      }}
      onSubmit={({ value }, actions) => null}
      render={() => (
        <Form>
          <div className="c-console_input-wrapper">
            <ConsoleTip />
            <Field type="text" name="value" className="c-console_input" />
          </div>
          <button type="submit" style={{ visibility: "hidden" }} />
        </Form>
      )}
    />
  );
}

ConsoleInput.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ConsoleInput;
