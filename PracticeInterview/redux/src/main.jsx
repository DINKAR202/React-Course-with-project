import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from './../node_modules/@reduxjs/toolkit/src/query/react/ApiProvider';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <ApiProvider store={store}>
    <App />
  </ApiProvider>,
)
