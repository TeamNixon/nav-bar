import React from "react";
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_price: "",
      data: []
    };
    this.getAllData = this.getAllData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    // this.getAllData();
    console.log("SearchBar Mounted!");
  }

  getAllData() {
    axios
      .get(`/api/navbar/search/`)
      .then((results) =>
        this.setState(
          {
            data: results.data,
          },
          () => console.log(this.state)
        )
      )
      .catch((error) => console.error(error));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, ()=>{
      axios
      .get(`/api/navbar/search/${this.state.product_price}`)
      .then(results =>
        this.setState({
          data: results.data
        }, ()=> console.log(this.state.data))
      )
      .catch((err) => console.error(err));
    });
  }
// <div class="<%= @success ? 'good' : 'bad' %>">
//    <div [ngClass]="{'message message-you':(item.uid == you.uid)}">
  render() {
      return (
        <div className="searchContainerWrapper">
          <form className="searchBarWrapper">
            <input
              className="inputBar"
              name="product_price"
              onChange={(e) => this.handleInputChange(e)}
              placeholder="What can we help you find?"
            ></input>
          </form>
          <SearchResults
            suggestionText={"Sample"}
           results={this.state.data}/>
        </div>
      );
  }
}

export default SearchBar;