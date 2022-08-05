import React from 'react';
import './App.css';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="App">
      <Widget title="Weather" subtitle="Location"></Widget>
    </div>
  );
}

export default App;
