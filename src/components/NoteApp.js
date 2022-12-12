import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";
class NotesApp extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
  
  };
  componentDidUpdate = () => {
    const savedNotesString = JSON.stringify(this.state.notes);
    localStorage.setItem("savedNotesString", savedNotesString);
  };

  componentDidMount = () => {
    const savedNotesString = localStorage.getItem("savedNotesString");
    if (savedNotesString) {
      const savedNotes = JSON.parse(savedNotesString);
      this.setState({ notes: savedNotes });
    }
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    const newNotes = [newNote, ...this.state.notes];
    this.setState({ notes: newNotes });
  };
  deleteNote = (deleteMeId) => {
    const notIdMatch = (note) => note.id !== deleteMeId;
    const updatedNotes = this.state.notes.filter(notIdMatch);
    this.setState({ notes: updatedNotes });
  };
  onType = (editMeId, updatedKey, updatedValue) => {
    const updateIdMatch = (note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    };
    const updatedNotes = this.state.notes.map(updateIdMatch);
    this.setState({ notes: updatedNotes });
  };
  
  render() {
    return (
      <div>
        <Header
          addNote={this.addNote}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default NotesApp;
