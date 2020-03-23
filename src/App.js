import React from 'react';
import './App.css';
import Todolist from './Todo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Simple TODO List
        </p>
      </header>
     
        <Todolist />
    
    </div>
  ); 

}

export default App;
