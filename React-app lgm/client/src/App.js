import Users from "./components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">   <div class="btn"><center><button className="link-item fetchbtn outer-shadow hover-in-shadow" onClick={this.updateState}>
              Get Users
            </button></center></div>
          </div>
        </nav>
     
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <footer className="footer">
        © Let's Grow More Task 2 
        </footer>
        <footer className="footer">
            By -- Rounak Kalbhawar
        </footer>
      </>
    );
  }
}

export default App;
