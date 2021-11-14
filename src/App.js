import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import Main from './components/Main'
import Theme from './components/Theme'
import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Theme>
    </Provider>
  )
}

export default App;
