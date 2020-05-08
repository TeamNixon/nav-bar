import React from "react";
import axios from 'axios';
import SearchResults from './SearchResults.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        allData: [],
    }
    this.getAllData = this.getAllData.bind(this)
    this.setData = this.setData.bind(this)
  }

  componentDidMount(){
    // this.getAllData();
    console.log("Component Mounted!")
  }

  getAllData(){
      axios.get(`/api/search/`)
      .then(results => this.setState({
        allData: results.data
      }, ()=> console.log(this.state)))
      .catch(error => console.error(error))
  }

  setData(data){
    this.setState({
        allData: data
    })
  }

  render() {
    return (
      <div className="mainNavContainer">
        <div className="topBlackBar"></div>
        <div className="subNavContainer">
          <div className="searchContainer">
            <img className="searchIcon" src="magnifying_icon.png"></img>
            <div className="inputWrapper">
            <SearchBar setData={this.setData}/>
            </div>
          </div>

          <div className="logo">
            <img src="logo.png"></img>
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
            <li id="category">Sale</li>
            <li id="category">Men's Watches</li>
            <li id="category">Women's Watches</li>
            <li id="category">Bags</li>
            <li id="category">Clothing & Accessories</li>
          </ul>
        </div>

        <SearchResults results={this.state.allData}/>
      </div>
    );
  }
}

export default App;
