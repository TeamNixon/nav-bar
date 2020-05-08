import React from "react";
import axios from 'axios';



class SearchResults extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          results: [],
          suggestionText: "sampleText",
      }
    }
  
    componentDidMount(){
      console.log("SearchResults Mounted!")
    }
  
  
    render() {
      return (
        <div className="searchResultsContainer">
        <div className="suggestionContainer">
            <div className="suggestionContainerText">{`Suggestions: `}</div>
            <div className="suggestionContainerQuery">{`"${this.state.suggestionText}"`}</div>
        </div>
        <ul className="resultsListingContainerWrapper">
        {this.props.results.map((item, index) => (
            <li key={index} id="resultsListingContainer">
             <img src={item.images[0]} id="resultsImg"></img>
                <ul className="resultsListingTextContainer">
                <li id="resultsListingName">{item.product_name}</li>
                <li id="resultsListingText">{`$${item.product_price}.00 - $${item.product_price*1.5}.00 `}</li>
                <li id="resultsListingText">{`${item.colors.length} Colors`}</li>
                </ul>
            </li>
        ))}
        </ul>
        </div>
      );
    }
  }

export default SearchResults;