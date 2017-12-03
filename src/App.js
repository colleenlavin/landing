import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import Facebook from './Facebook.svg'
import Instagram from './Instagram.svg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="hero">
          <h2 className="hero-intro" >
            Introducing LOGO, a fresh, new collection {"\n"} of women’s footwear, founded on {"\n"} the belief in pure simplicity.
        </h2>
          <h4>
            Styles shown Beth, Katie & Cindy
          </h4>
        </div>
        <div className="sign-up">
          <form>
            <label>
            Sign up for email
          <input type="text" value="e-mail" />
            </label>
            <input type="submit" value="SIGN-UP" />
          </form>
        </div>
        <div className="shoes ">
          <h2 className="styles">Featured Styles</h2>
          <div className="row">
            <div className="col-md-3">.col-md-3</div>
            <div className="col-md-3">.col-md-3</div>
            <div className="col-md-3">.col-md-3</div>
            <div className="col-md-3">.col-md-3</div>
          </div>
          <div className="row">
            <div className="col-md-3">.col-md-3</div>
            <div className="col-md-3">.col-md-3</div>
            <div className="col-md-3">.col-md-3</div>
            <div className="col-md-3">.col-md-3</div>
          </div>
        </div>
        <div className="footer">
          <h3 className="social">LET’S BE FRIENDS</h3>
          <img src={Instagram} className="insta" alt="instagram" />
          <img src={Facebook} className="facebook" alt="facebook" />
          <h3 className="">©2017 LOGO Footwear</h3>

        </div>
      </div>
    );
  }
}

export default App;
