import React from "react";
import axios from 'axios';

class SearchResults extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchResults: []
      }
    }
  
    componentDidUpdate(prevProps, prevState){
      if(prevProps.results !== this.props.results) {
        this.setState({
          searchResults: this.props.results
        })
      }
    }

    handleClear(){
      this.setState({
        searchResults: []
      })
    }

    render() {
      if(this.state.searchResults.length > 0){
        return (
          <div>
            <div className="crossButton" onClick={this.handleClear.bind(this)}>X</div>
              <div className="searchResultsContainer">
                <div className="suggestionContainer">
                  <div className="suggestionContainerText">{`Suggestions: `}</div>
                    <div className="suggestionContainerQuery">{` "${this.props.suggestionText}"`}</div>
                  </div>
              <ul className="resultsListingContainerWrapper">
              {this.state.searchResults.map((item, index) => (
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
          </div>
        );
      } else {
        return (
          <div></div>
        )
      }
        
    }
  }

export default SearchResults;