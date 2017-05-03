import React from 'react';

import {render} from 'react-dom';

import {Router, browserHistory} from 'react-router'
import './css/antd.min.css'

import rootRouters from './routes'

render((<Router history={browserHistory} routes={rootRouters}/>), document.getElementById('app'))