import React from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: [],
    };
    this.getAllData = this.getAllData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.getAllData();
    console.log('SearchBar Mounted!');
  }

  getAllData(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:1739/api/navbar/all/`)
      .then((results) =>
        this.setState({
          searchResults: results.data,
        })
      )
      .catch((error) => console.error(error));
  }

  handleInputChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.query.length > 2) {
          axios
            .get(`http://localhost:1739/api/navbar/search/${this.state.query}`)
            .then((results) =>
              this.setState({
                searchResults: results.data,
              })
            )
            .catch((err) => console.error(err));
        }
      }
    );
  }

  handleSubmit(e) {
    // optional to have because searches on change
    e.preventDefault();
    axios
      .get(`http://localhost:1739/api/navbar/search/${this.state.query}`)
      .then((results) =>
        this.setState({
          searchResults: results.data,
        })
      )
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className='searchContainerWrapper'>
        <form className='searchBarWrapper' onSubmit={(e) => this.getAllData(e)}>
          <input
            className='inputBar'
            name='query'
            onChange={this.handleInputChange}
            placeholder='What can we help you find?'
          ></input>
        </form>

        <SearchResults
          suggestionText={this.state.query}
          results={this.state.searchResults}
        />
      </div>
    );
  }
}

export default SearchBar;
