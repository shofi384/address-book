import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideForm: true,

      FirstName: '',
      LastName: '',
      Birthday: '',
      Telephone: '',

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
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
  }

  addAddress() {
    this.setState({ hideForm: false });
  }

  change = e => {
    e.preventDefault();
    this.state[e.target.name]= e.target.value;
  }

  delete = (FirstName, e) => {
    let addressList = [...this.state.addressList];
    let deleteIndex = addressList.findIndex((item) => item.FirstName === FirstName);
    addressList.splice(deleteIndex, 1);
    this.setState({addressList: addressList});
  }

  submit = e => {
    e.preventDefault();
    let newAddress= {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Birthday: this.state.Birthday,
      Telephone: this.state.Telephone
    };
    this.setState({
      hideForm: true,
      addressList: [newAddress, ...this.state.addressList]
    });
    this.setState({FirstName: ''});
    this.setState({LastName: ''});
    this.setState({Birthday: ''});
    this.setState({Telephone: ''});
  }

  render() {
    const allAddress = this.state.addressList.map(address => 
      <div className='container'>
        <div>Name: {address.FirstName + ' ' + address.LastName}</div>
        <div>DOB: {address.Birthday}</div>
        <div>Tel: {address.Telephone}</div>
        <button type="button" onClick={this.delete} class='delete'>Delete</button>
      </div>);

    const addressForm = (<form className='container' >
        <input type='text' name='FirstName' placeholder='First Name' onChange={this.change} required/>
        <input type='text' name='LastName' placeholder='Last Name' onChange={this.change} required/>
        <input type='text' name='Birthday' placeholder='DOB' onChange={this.change} required/>
        <input type='text' name='Telephone' placeholder='Phone Number' onChange={this.change} required/><br/>
        <input type="submit" value="Submit" className='button' onClick={this.submit}/>
      </form>);

    return (
      <div className="App">
        <header className="App-header">
          <p><img src={logo} className="App-logo" alt="logo" />Create your personalized address book here!</p>
          {this.state.hideForm? <button className='button' onClick={this.addAddress}>+ New Address</button>: <br/>}
        </header>
        {this.state.hideForm? <div className="addresses">{allAddress}</div>: <div>{addressForm}</div>}
      </div>
    );
  }
}

export default App;
