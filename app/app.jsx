/**
 * App entry point
 */

// Libraries
import React from "react";

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";

React.render(
  <h1>Hello, world!</h1>,
  document.getElementById(DOM_APP_EL_ID)
);
