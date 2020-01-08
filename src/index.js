import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App'
import Root from 'Root';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Root>
            <Route path="/" component={App} />
        </Root>
    </BrowserRouter>,
    document.querySelector("#root")
)