import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>,
    document.getElementById('root')
  );