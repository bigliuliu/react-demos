// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);