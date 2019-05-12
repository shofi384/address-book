import React, { Component } from 'react';
import logo from './icon.png';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import data from './data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideForm: true,

      FirstName: '',
      LastName: '',
      Birthday: '',
      Telephone: '',

      addressList: data
    };

    this.addAddress = this.addAddress.bind(this);
    this.submit = this.submit.bind(this);
  }

  addAddress() {
    this.setState({ hideForm: false });
  }

  change = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    // Mutate State directly
    //this.state[e.target.name]= e.target.value;
  }

  delete(key) {
    var result = window.confirm("Are your sure you want to delete?");
    if(result) {
      let addressList = [...this.state.addressList];
      addressList.splice(key, 1);
      this.setState({addressList: addressList});
    }
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
    const allAddress = this.state.addressList.map((address, key) => 
      <div key={key} className='container'>
        <div>Name: {address.FirstName + ' ' + address.LastName}</div>
        <div>DOB: {address.Birthday}</div>
        <div>Tel: {address.Telephone}</div>
        <i className="delete fa fa-trash" onClick={this.delete.bind(this, key)}> Delete</i>
      </div>);

    const addressForm = (<form className='container' onSubmit={this.submit}>
        <input type='text' name='FirstName' placeholder='First Name' onChange={this.change} required/>
        <input type='text' name='LastName' placeholder='Last Name' onChange={this.change} required/>
        <input type='date' name='Birthday' placeholder='DOB' onChange={this.change} required/>
        <input type='tel' name='Telephone' placeholder='Phone Number' onChange={this.change} required/>
        <input type="submit" value="Submit" className='button'/>
      </form>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Your Address Book</p>
          {this.state.hideForm? <i class="fa fa-search"><span><input type="text" className='fa fa-search' placeholder='Search Contacts..'/></span></i>: <br/>}
          {this.state.hideForm? <button className='button' onClick={this.addAddress}>+ New Address</button>: <br/>}
        </header>
        {this.state.hideForm? <div className="addresses">{allAddress}</div>: <div>{addressForm}</div>}
      </div>
    );
  }
}

export default App;
