/*
 * combines all the existing reducers
 */

import * as listReducer from "./listReducer";

export default Object.assign(
  {},

  listReducer
);
