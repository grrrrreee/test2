import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import './App.css'; import Main from "./container/Main"; 
import tx from "./container/tx"; 
import Viewer from "./container/Viewer"; 
import Dropzone from "./container/Dropzone";

class App extends Component { 

  render() { 
    return ( 
      
    <Router> 
      <div> 
        <Route exact path="/" component={Main} /> 
        <Route path="/tx/" component={tx} /> 
        <Route path="/viewer/" component={Viewer} /> 
        <Route path="/drag/" component={Dropzone} /> 
        <nav>
          <ul>
            <li>
              <Link to="/viewer"> viewer </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/tx"> tx </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/drag"> Drag and Drop </Link>
            </li>
          </ul>
        </nav>
        <div className = "Card">
          <Dropzone onFilesAdded = {console.log}/>
          </div>
      </div>
    </Router> 
    
    ); 
  } 
} 

export default App;
