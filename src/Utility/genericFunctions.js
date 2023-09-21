/**
 * Checks if the given value is an object.
 * 
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is an object, otherwise false.
 */
export const isObject = (value) => {
  return value && typeof value === "object" && value.constructor === Object;
};

/**
 * Checks if the given object has any keys.
 * 
 * @param {object} obj - The object to check.
 * @returns {boolean} - Returns true if the object has keys, otherwise false.
 */
export const hasKeys = (obj) => {
  return isObject(obj) && Object.keys(obj).length > 0;
};
