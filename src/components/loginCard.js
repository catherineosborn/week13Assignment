import React, {Component} from "react";

export default class Login extends Component {
  render() {
    return(
        <div className="Login d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="card-body">
                <h1 className="logintext">Log In</h1>
                <form className="logininputs">
                <input className="usernameinput" placeholder="Username"/> <br></br>
                <input className="passwordinput" placeholder="Password"/><br></br>
                <button className="btn btn-primary btn-md m-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}