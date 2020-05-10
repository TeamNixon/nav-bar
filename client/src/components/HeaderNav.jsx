import React from 'react';

class HeaderNav extends React.Component {
constructor(){
    super();
    this.state = {
        hover: true
    }
}

handleHover(){
    this.setState({
        hover: !this.state.hover
    })
}
// onMouseLeave={this.handleHover.bind(this)}
render(){
if(this.state.hover) {
    return (
        <div className="navBarContainer">
        <ul className="navBarList">
            <div className="navBarCategoryItemWrapper" onMouseOver={this.handleHover.bind(this)}>
          <li id="navBarCategoryItem">Men's Watches</li>
          <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
          <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Women's Watches</li>
          </div>
          <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Bags</li>
          </div>
          <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Clothing & Accessories</li>
          </div>
        </ul>
      </div>
    )
    } else {
        return(
            <div className="navBarContainer">
            <ul className="navBarList">
            <div className="navBarCategoryItemWrapper">
                <li id="navBarCategoryItemActive">Men's Watches</li>
                <img id="navBarUpArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
                <li id="navBarCategoryItem">Women's Watches</li>
                </div>
            <div className="navBarCategoryItemWrapper">
                <li id="navBarCategoryItem">Bags</li>
                </div>
            <div className="navBarCategoryItemWrapper">
                <li id="navBarCategoryItem">Clothing & Accessories</li>
                </div>
            </ul>
            <div className="navBarHoverBox" onMouseLeave={this.handleHover.bind(this)}>
                <div className="watchesShoppingCategoryContainer">
                    <ul id="watchesShoppingCategory">
                        <li id="watchesShoppingItem">Collections</li>
                        <li id="watchesShoppingItem">New Arrivals</li>
                        <li id="watchesShoppingItem">Best Sellers</li>
                        <li id="watchesShoppingItem">Custom</li>
                        <li id="watchesShoppingItem">
                        Shop All
                        <img id="watchesCategoryShopAllArrow" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-arrow-right-thin.png"></img>
                        </li>
                    </ul>
                </div>
                <div className="watchesStylesCategoryContainer">
                    <ul className="watchesStylesCategoryHorizontalList">
                        <ul className="watchesStylesCategorySub_Container">
                            <li id="watchesStylesCategoryHeading">Styles</li>
                            <li id="watchesStylesCategoryItem">Classic</li>
                            <li id="watchesStylesCategoryItem">Digital</li>
                            <li id="watchesStylesCategoryItem">Chronograph</li>
                            <li id="watchesStylesCategoryItem">Oversized</li>
                        </ul>

                        <ul className="watchesStylesCategorySub_Container">
                        <li id="watchesStylesCategoryHeading">Use</li>
                        <li id="watchesStylesCategoryItem">Surf & Tide</li>
                        <li id="watchesStylesCategoryItem"> Sports & Fitness</li>
                        <li id="watchesStylesCategoryItem">Waterproof</li>
                        </ul>

                        <ul className="watchesStylesCategorySub_Container">
                        <li id="watchesStylesCategoryHeading">Trending</li>
                        <li id="watchesStylesCategoryItem">Black Watches</li>
                        <li id="watchesStylesCategoryItem">Gold Watches</li>
                        <li id="watchesStylesCategoryItem">Stainless Steel</li>
                        <li id="watchesStylesCategoryItem">Leather</li>
                        </ul>

                        <ul className="watchesStylesCategorySub_Container">
                            <li id="watchesStylesCategoryHeading">Collaborations</li>
                            <li id="watchesStylesCategoryItem">Star Wars</li>
                            <li id="watchesStylesCategoryItem">Metallica</li>
                        </ul>
                        </ul>
                </div>
            </div>
          </div>
        )
    }
}
}


export default HeaderNav;