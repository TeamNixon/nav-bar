import React from "react";
import axios from 'axios';

import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    console.log("Component Mounted!")
  }

  render() {
    return (
      <div>
        <div className="topBlackBar"></div>
        <div className="greyLineUnderNav"></div>
        <div className="subNavContainer">
          <div className="searchContainer">
            <img className="searchIcon" src="magnifying_icon.png"></img>
            <div className="inputWrapper">
            <SearchBar/>
            </div>
          </div>

          <div className="logoDiv">
            <img src="logo.png" id="logoIcon"></img>
          </div>

          <div className="rightsideDiv">
            <ul className="rightside">
              <li id="list">EN</li>
              <li id="list">Find a Store</li>
              <li id="list">Sign in</li>
            </ul>
          </div>
        </div>
        <div className="categoryDiv">
          <ul className="categoryList">
            <li id="category">Men's Watches</li>
            <li id="category">Women's Watches</li>
            <li id="category">Bags</li>
            <li id="category">Clothing & Accessories</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
