import React from "react";
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        product_price: 250,
        data:[]
      }
      this.getAllData = this.getAllData.bind(this)
    }
  
    componentDidMount(){
        this.getAllData();
      console.log("SearchBar Mounted!")
    }

    getAllData(){
        axios.get(`/api/search/`)
        .then(results => this.setState({
          data: results.data
        }, ()=> console.log(this.state)))
        .catch(error => console.error(error))
    }
  
    handleInputChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>console.log(this.state))
    }

    handleInputSubmit(e){
        e.preventDefault();
        axios.get(`/api/search/${this.state.product_price}`)
        .then(results => this.props.setData(results.data))
        .catch(err => console.error(err))
    }

    render() {
      return (
          <div className="searchContainerWrapper">
          <form className="searchBarWrapper">
        <input
        className="inputBar"
        name="product_price"
        onChange={this.handleInputChange.bind(this)}
        onSubmit={this.handleInputSubmit.bind(this)}
        placeholder="What can we help you find?"
      ></input>
      </form>

      <SearchResults results={this.state.data}/>
      </div>
      );
    }
  }

export default SearchBar;