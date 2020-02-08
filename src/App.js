import React from 'react';
import './App.css';
import Todolist from './Todo.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TODO List, Please !
        </p>
      </header>
     
        <Todolist />
    
    </div>
  ); 

}

export default App;
