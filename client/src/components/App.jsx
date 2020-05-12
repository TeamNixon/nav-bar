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
      cartQuantity: 0
    }
    this.updateCartQuantity = this.updateCartQuantity.bind(this)
  }

  componentDidMount(){
    console.log("Component Mounted!")
  }

  updateCartQuantity(quantity){
    if (this.state.cartQuantity < 9){
      this.setState({
        cartQuantity: quantity
      })
    } else {
      this.setState({
        cartQuantity: '9+'
      })
    } 
  }

  render() {
    return (
      <div>
      <HeaderPromotion/>
        <div className="greyLineUnderNav">
        <div className="logoDiv">
        <img src="logo.png" id="logoIcon"></img>
      </div>
        </div>
        <div className="subNavContainer">
          <div className="searchContainer">
            <img className="searchIcon" src="magnifying_icon.png"></img>
            <div className="inputWrapper">

            <SearchBar/>

            </div>
          </div>

          <div className="rightsideDiv">
            <ul className="rightside">
              <img id="flagIcon" src="http://icons.iconarchive.com/icons/wikipedia/flags/256/US-United-States-Flag-icon.png"></img>
              <li id="list">EN</li>
              <li id="list">Find a Store</li>
              <SignIn/>
              <li id="inCartQuantity">{`${this.state.cartQuantity}`}</li>
              <Cart updateCartQuantity={this.updateCartQuantity}/>
            </ul>
          </div>
        </div>
        <HeaderNav/>
        

      </div>
    );
  }
}

export default App;
