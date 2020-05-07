import React from "react";
import axios from 'axios';



class SearchResults extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          results: []
      }
    }
  
    componentDidMount(){
      console.log("SearchResults Mounted!")
    }
  
  
    render() {
      return (
        <div className="searchResultsContainer">
        <ul>
        {this.props.results.map((item, index) => (
            <li key={index} id="resultsListingContainer"> {item.product_name}</li>
        ))}
        </ul>
        </div>
      );
    }
  }

export default SearchResults;