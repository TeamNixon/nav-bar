import React from "react";
import axios from 'axios';
import SignIn from './SignIn.jsx'
import Cart from './Cart.jsx'
import SearchBar from './SearchBar.jsx';
import HeaderNav from './HeaderNav.jsx';
import HeaderPromotion from './HeaderPromotion.jsx';

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
      <HeaderPromotion/>
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
              <li id="inCartQuantity">{`0`}</li>
              <Cart/>
            </ul>
          </div>
        </div>
        <HeaderNav/>
        

      </div>
    );
  }
}

export default App;
