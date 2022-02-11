import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { NatsProvider } from './providers/nats';

ReactDOM.render(
  <NatsProvider
    config={{
      servers: 'ws://ec2-204-236-137-71.us-west-1.compute.amazonaws.com:8088',
    }}
  >
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </NatsProvider>,
  document.getElementById('root')
);
