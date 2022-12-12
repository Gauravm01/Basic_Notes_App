import React from "react";
import Note from "./Note.js";

const keepSearchMatches = (note) => note.doesMatchSearch;

const NotesList = (props) => {
  function renderNote(note) {
        return (
            <Note note={note} key={note.id} onType={props.onType} deleteNote={props.deleteNote} />
        );
    }

  const searchMatches = props.notes.filter(keepSearchMatches);
  const noteElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteElements}</ul>;
};

export default NotesList;