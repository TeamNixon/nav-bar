import React from "react";
import axios from 'axios';
import SignIn from './SignIn.jsx'
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
              <img id="flagIcon" src="http://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png"></img>
              <li id="list">EN</li>
              <li id="list">Find a Store</li>
              <SignIn/>
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
