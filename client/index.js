if (module.hot) {
    module.hot.accept();
}

import React,{Component} from 'react';
import ReactDom from 'react-dom';

import Route from './route'

ReactDom.render(

    <Route/>,
    document.getElementById('app')
);
