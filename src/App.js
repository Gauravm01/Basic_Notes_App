import React from "react";
import Login from "./components/Login";
import {BrowserRouter as Router,Route,Switch }from "react-router-dom";
import "./App.css";
import NotesApp from "./components/NoteApp";
import Note from "./components/Note";
import NotesList from './components/NotesList';
import Header from "./components/Header";
const App = () => {
  return (
    <div >
      
       
        
          <Router>
          
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/notesapp" component={NotesApp} />
            <Route  path="/Note" component={Note} />
            <Route path="/NotesList" component={NotesList} />
            <Route path="/Header" component={Header} />
            </Switch>
            
          </Router>
   
        
     
    </div>
  );
};

export default App;