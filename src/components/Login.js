
import { Redirect } from "react-router-dom";
import React, { Component } from "react";

class Login extends Component {
  constructor(props){
  	super(props);
    let isLoggedIn = false
  this.state = {
    username:'',
    password:'',
    isLoggedIn
  }

  this.onChange = this.onChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  
  handleSubmit(e){
      e.preventDefault()
      const { username,password }=this.state
      if(username==='scribe'&& password ==='scribe@123'){
        this.setState({
          isLoggedIn:true
        })
      }
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    
    if(this.state.isLoggedIn){
      return <Redirect to= "/notesapp"/>
    }
    return (
      <div className="App">
      <h1>Login</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="scribe" value={this.state.username} onChange={this.onChange} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password </label>
            <input type="password" name="password" placeholder="scribe@123" value={this.state.password} onChange={this.onChange}/>
          </div>
          <button className="primary" >Submit</button>
        </form>
        
      </div>
    );
  }
  
}


export default Login;