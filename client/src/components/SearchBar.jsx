import React from "react";
import axios from 'axios';


class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        product_price: 250,
      }
    }
  
    componentDidMount(){
      console.log("SearchBar Mounted!")
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
          <form className="searchBarWrapper">
        <input
        className="inputBar"
        name="product_price"
        onChange={this.handleInputChange.bind(this)}
        onSubmit={this.handleInputSubmit.bind(this)}
        placeholder="What can we help you find?"
      ></input>
      </form>
      );
    }
  }

export default SearchBar;