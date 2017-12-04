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
        <div className="hero col-lg-12 col-md-12">
          <h2 className="hero-intro" >
            Introducing <span className="bold"> LOGO </span>, a fresh, new collection
        </h2>
          <br />
          <h2> of women’s footwear, founded on </h2>
          <h2>the belief in pure simplicity.</h2>
          <h4 className="styles-shown">
            Styles shown <span className="names">Beth, Katie & Cindy</span>
          </h4>
        </div>
        <div className="sign-up col-lg-12 col-md-12">
          <form>
            <label>
              Sign up for email
          <input className="email" type="text" value="e-mail" />
            </label>
            <input className="submit" type="submit" value="SIGN-UP" />
          </form>
        </div>
        <div className="shoes col-lg-12 col-md-12 text-center">
          <h2 className="styles">Featured Styles</h2>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
          </div>
          <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6">
              <img className='img-item' src="https://i.imgur.com/YCvItd9.png" alt="Beth |" />
              <h3 className="item-label"> <span className="bold"> Beth | </span> <span className="selected-color">L124578 - tan </span></h3>
              <img className='item-colors' src="https://i.imgur.com/v9LoT3e.png" alt="Beth | colors" />
            </div>
          </div>
        </div>
        <div className="footer col-md-12">
          <h3 className="">LET’S BE FRIENDS</h3>
          <img src={Instagram} className="insta" alt="instagram" />
          <img src={Facebook} className="facebook" alt="facebook" />
          <h3 className="">©2017 LOGO Footwear</h3>

        </div>
      </div>
    );
  }
}

export default App;
