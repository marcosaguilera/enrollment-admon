import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Router
import AppRoutes from './routes'

// Assets
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
