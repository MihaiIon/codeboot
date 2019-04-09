// ====================================================================================
// Forms / FormCreateFile / Core / Helpers
// ====================================================================================

/**
 * Checks if the "filename" input value has the correct format.
 *
 * @param {String} value Input | Filename value.
 * @returns {Boolean} Returns "true" is value is valid.
 */
export const filenameValidation = value => /^[a-zA-Z_][a-zA-Z_.-]*\.js$/.test(value);

/**
 * Checks if the "collaborators" input value has the correct format.
 *
 * @param {String} value Input | Collaborators value.
 * @returns {Boolean} Returns "true" is value is valid.
 */
export const collaboratorsValidation = value =>
  value.length === 0 ||
  /^(?:(?:(?:\w+[-]?\w+)\s?)+)(?:(?:,\s?)?(?:(?:(?:\w+[-]?\w+)\s?)+))$/.test(value);
