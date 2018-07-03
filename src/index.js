import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// Router
import AppRoutes from './routes'

// Assets
import './index.css';

render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
