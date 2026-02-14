import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
import './App.scss';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
// createRoot(<App />, document.getElementById('root'));
