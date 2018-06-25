import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/router';

import './style/style.css';

ReactDOM.render(
    <div style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        maxWidth: '600px',
        minWidth: '320px',
        margin: 'auto',
        overflow: 'auto',
        backgroundColor: 'white',
        border: '1px solid #ddd'
    }}>
        <AppRouter/>
    </div>,
    document.getElementById('app')
);