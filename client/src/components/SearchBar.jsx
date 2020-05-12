import React from "react";
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_price: "",
      searchResults: []
    };
    this.getAllData = this.getAllData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
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
            data: results.data
          }))
      .catch((error) => console.error(error));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      if (this.state.product_price.length > 2) {
        axios
        .get(`/api/navbar/search/${this.state.product_price}`)
        .then(results =>
          this.setState({
            searchResults: results.data
          })
        )
        .catch((err) => console.error(err));
      }
    });
  }

  handleSubmit(e) { // optional to have because searches on change
    e.preventDefault();
    if (this.state.product_price.length > 2) {
      axios
      .get(`/api/navbar/search/${this.state.product_price}`)
      .then(results =>
        this.setState({
          searchResults: results.data
        })
      )
      .catch((err) => console.error(err));
    }
  }

  render() {
      return (
        <div className="searchContainerWrapper">
          <form className="searchBarWrapper"  onSubmit={this.handleSubmit}>
            <input
              className="inputBar"
              name="product_price"
              onChange={this.handleInputChange}
              placeholder="What can we help you find?"
            ></input>
          </form>

          <SearchResults 
          suggestionText={this.state.product_price}
          results={this.state.searchResults}
          />
        </div>
      );
  }
}

export default SearchBar;