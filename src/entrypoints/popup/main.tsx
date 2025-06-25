import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Sidebar from '@@/components/Sidebar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex'>
      <div>
        <App/>
      </div>
      <div className='flex-1'>
        <Sidebar/>
      </div>
    </div>
  </React.StrictMode>,
);
