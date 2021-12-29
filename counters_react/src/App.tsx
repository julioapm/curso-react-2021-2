import React from 'react';
import './App.css';
import CounterFunction from './components/CounterFunction';
import CounterV2 from './components/CounterV2';

function App() {
  return (
    <>
      <CounterFunction />
      <CounterV2 initialValue={5} />
    </>
  );
}

export default App;
