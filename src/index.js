import React from 'react';
import { render } from 'react-dom';
import Login from './components/login'

const App = () => {
  return <Login></Login>
};

render(React.createElement(App), document.getElementById('root'));
