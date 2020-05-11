import React from "react";
import axios from 'axios';

class SearchResults extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          results: [],
          suggestionText: "Watch",
      }
    }
  
    componentDidMount(){
      this.setState({
        results: this.props.results
      })
    }

    componentDidUpdate(prevProps, prevState){
      if (prevProps.results !== this.props.results) {
        this.setState({
          results: this.props.results
        })
        console.log(this.state.results)
      }
    }
  
    // componentDidUpdate(prevProps, prevState) {
    //   // only update chart if the data has changed
    //   if (prevProps.data !== this.props.data) {
    //     this.chart = c3.load({
    //       data: this.props.data
    //     });
    //   }
    // }
    handleClear(){
      this.setState({
        results: []
      })
    }

    render() {
      if(this.state.results.length > 0) {
        return (
          <div>
          <div className="crossButton" onClick={this.handleClear.bind(this)}>X</div>
          <div className="searchResultsContainer">
          <div className="suggestionContainer">
              <div className="suggestionContainerText">{`Suggestions: `}</div>
              <div className="suggestionContainerQuery">{` "${this.state.suggestionText}"`}</div>
          </div>
          <ul className="resultsListingContainerWrapper">
          {this.state.results.map((item, index) => (
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