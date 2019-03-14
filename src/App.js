import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      addressList: [
      {
        FirstName: "Cathy" ,
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
      ]
    };

    this.addAddress = this.addAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addAddress() {
    this.setState({ hide: false });
  }

  handleSubmit() {
    this.setState({ hide: true });
  }

  render() {
    const allAddress = this.state.addressList.map(address => 
      <div class='address'>
        <div>Name: {address.FirstName + ' ' + address.LastName}</div>
        <div>DOB: {address.Birthday}</div>
        <div>Tel: {address.Telephone}</div>
      </div>);

    const addressForm = (<form>
        <input type='text' placeholder='First Name' required/>
        <input type='text' placeholder='Last Name' required/>
        <input type='text' placeholder='DOB' required/>
        <input type='text' placeholder='Phone Number' required/>
        <button type="submit" onClick={this.state.handleSubmit}></button>
      </form>);

    return (
      <div className="App">
        <header className="App-header">
          <p><img src={logo} className="App-logo" alt="logo" />Create your personalized address book here!</p>
          <button onClick={this.addAddress}>+ New Address</button>
        </header>
        {this.state.hide? <div id="addresses">{allAddress}</div>: <div>{addressForm}</div>}
      </div>
    );
  }
}

export default App;
