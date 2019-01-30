/*eslint prefer-rest-params:0 */

/**
 * Helper to create conditional classes.
 *
 *
 * Accepts an undefinite list of arguments.
 *
 *
 * Strings are added to the class.
 *
 *
 * Objects are of shape  {
 *  classNameString : boolean
 * }
 * classNameString is only added to the class if boolean is true.
 *
 *
 */
function classHelper() {
  const classNamesSet = new Set([]);
  const args = Array.prototype.slice.call(arguments);
  args.map(arg => {
    switch (typeof arg) {
      case "string":
        classNamesSet.add(arg);
        break;
      case "object":
        Object.keys(arg).map(key => {
          if (arg[key] === true) {
            classNamesSet.add(key);
          }
          return true;
        });
        break;
      default:
        break;
    }
    return true;
  });
  const classNames = [...classNamesSet].join(" ").trim();
  return classNames;
}

export default classHelper;
