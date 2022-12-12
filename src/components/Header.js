import  React,{ Component } from "react";

class Header extends Component{

   updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
   updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };
   clickDelete = () => this.props.deleteNote(this.props.note.id);


  render(){

    return(
      <div>
    <h1 className="app-header__title"> Notes App</h1>
    <div className="app-header__controls">
      <button className="add-new" onClick={this.props.addNote}>
        + New Note
      </button>
      
    </div>
  </div>

    )
  }
}
export default Header;
