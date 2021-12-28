import React from 'react';
import './App.css';
import HelloFunctionComponent from './components/helloFunctionComponent';
import HelloClassComponent from './components/helloClassComponent';

function App() {
  return (
    <>
      <HelloFunctionComponent name="Júlio Machado" />
      <HelloClassComponent name="John Doe" />
    </>
  );
}

export default App;
