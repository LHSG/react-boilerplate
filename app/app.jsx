/**
 * App entry point
 */

// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";

var MyComponent = React.createClass({
    render: function () {
        return(
            <h1>Hello, worldaadfaasdf!</h1>
        );
    }
});

ReactDOM.render(
    <AppContainer>
       <MyComponent/>
    </AppContainer>,
  document.getElementById(DOM_APP_EL_ID));

if (module.hot) {
    module.hot.accept();
}