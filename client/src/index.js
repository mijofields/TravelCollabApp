import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
// import {OAuth2Client} from 'google-auth-library';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
