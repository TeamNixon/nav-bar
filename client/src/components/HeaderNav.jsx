import React from 'react';

class HeaderNav extends React.Component {
constructor(){
    super();
    this.state = {
        hover: 'Men'
    }
    this.handleHover = this.handleHover.bind(this)
}

handleHover(view){
    this.setState({
        hover: view
    })
}
// onMouseLeave={this.handleHover.bind(this)}
render(){
if(this.state.hover == 'Men') {
    return (
<div className="navBarContainer">
<ul className="navBarList">
<div className="navBarCategoryItemWrapper">
    <li id="navBarCategoryItemActive" onMouseLeave={() => this.handleHover('None')}>Men's Watches</li>
    <img id="navBarUpArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
<div className="navBarCategoryItemWrapper">
<li id="navBarCategoryItem">Women's Watches</li>
<img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
<div className="navBarCategoryItemWrapper">
<li id="navBarCategoryItem">Bags</li>
<img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
<div className="navBarCategoryItemWrapper">
<li id="navBarCategoryItem">Clothing & Accessories</li>
<img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
</ul>
<div className="navBarHoverBox" onMouseLeave={() => this.handleHover('None')}>
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
    } else if (this.state.hover == 'Women') {
        return (
            <div className="navBarContainer">
<ul className="navBarList">
<div className="navBarCategoryItemWrapper">
    <li id="navBarCategoryItem">Men's Watches</li>
    <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
<div className="navBarCategoryItemWrapper">
<li id="navBarCategoryItemActive" onMouseLeave={() => this.handleHover('None')}>Women's Watches</li>
<img id="navBarUpArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
<div className="navBarCategoryItemWrapper">
<li id="navBarCategoryItem">Bags</li>
<img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
<div className="navBarCategoryItemWrapper">
<li id="navBarCategoryItem">Clothing & Accessories</li>
<img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
</div>
</ul>
<div className="navBarHoverBox" onMouseLeave={() => this.handleHover('None')}>
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
            </ul>

            <ul className="watchesStylesCategorySub_Container">
            <li id="watchesStylesCategoryHeading">Use</li>
            <li id="watchesStylesCategoryItem">Surf & Tide</li>
            <li id="watchesStylesCategoryItem"> Sports & Fitness</li>
            <li id="watchesStylesCategoryItem">Waterproof</li>
            </ul>

            <ul className="watchesStylesCategorySub_Container">
            <li id="watchesStylesCategoryHeading">Trending</li>
            <li id="watchesStylesCategoryItem">Rose Gold Watches</li>
            <li id="watchesStylesCategoryItem">Gold Watches</li>
            <li id="watchesStylesCategoryItem">Stainless Steel</li>
            <li id="watchesStylesCategoryItem">Leather</li>
            </ul>

            <ul className="watchesStylesCategorySub_Container">
                <li id="watchesStylesCategoryHeading">Collaborations</li>
                <li id="watchesStylesCategoryItem">Star Wars</li>
            </ul>
            </ul>
    </div>
</div>
</div>
        )
    } else if (this.state.hover == 'Bags') {
        return (
            <div className="navBarContainer">
            <ul className="navBarList">
            <div className="navBarCategoryItemWrapper">
                <li id="navBarCategoryItem">Men's Watches</li>
                <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Women's Watches</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItemActive" onMouseLeave={() => this.handleHover('None')}>Bags</li>
            <img id="navBarUpArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Clothing & Accessories</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            </ul>
            <div className="navBarHoverBox" onMouseLeave={() => this.handleHover('None')}>
                <div className="watchesShoppingCategoryContainer">
                    <ul id="watchesShoppingCategory">
                        <li id="watchesShoppingItem">Collections</li>
                        <li id="watchesShoppingItem">New Arrivals</li>
                        <li id="watchesShoppingItem">Best Sellers</li>
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
                            <li id="watchesStylesCategoryItem">Backpacks</li>
                            <li id="watchesStylesCategoryItem">Duffle Bags</li>
                            <li id="watchesStylesCategoryItem">Travel Bags</li>
                        </ul>
            
                        <ul className="watchesStylesCategorySub_Container">
                            <li id="watchesStylesCategoryHeading">Collaborations</li>
                            <li id="watchesStylesCategoryItem">Star Wars</li>
                            <li id="watchesStylesCategoryItem">Backcountry</li>
                            <li id="watchesStylesCategoryItem">MultiCam®</li>
                        </ul>
                        </ul>
                </div>
            </div>
            </div>
        )
    } else if (this.state.hover == 'Clothing') {
        return (
            <div className="navBarContainer">
            <ul className="navBarList">
            <div className="navBarCategoryItemWrapper">
                <li id="navBarCategoryItem">Men's Watches</li>
                <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Women's Watches</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItem">Bags</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            <div className="navBarCategoryItemWrapper">
            <li id="navBarCategoryItemActive" onMouseLeave={() => this.handleHover('None')}>Clothing & Accessories</li>
            <img id="navBarUpArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
            </ul>
            <div className="navBarHoverBox" onMouseLeave={() => this.handleHover('None')}>
                <div className="watchesShoppingCategoryContainer">
                    <ul id="watchesShoppingCategory">
                        <li id="watchesShoppingItem">New Arrivals</li>
                        <li id="watchesShoppingItem">Best Sellers</li>
                        <li id="watchesShoppingItem">Stay At Home</li>
                        <li id="watchesShoppingItem">
                        Shop All
                        <img id="watchesCategoryShopAllArrow" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-arrow-right-thin.png"></img>
                        </li>
                    </ul>
                </div>
                <div className="watchesStylesCategoryContainer">
                    <ul className="watchesStylesCategoryHorizontalList">
                        <ul className="watchesStylesCategorySub_Container">
                            <li id="watchesStylesCategoryHeading">Clothing</li>
                            <li id="watchesStylesCategoryItem">Sweatshirts</li>
                            <li id="watchesStylesCategoryItem">T-Shirts</li>
                        </ul>
            
                        <ul className="watchesStylesCategorySub_Container">
                            <li id="watchesStylesCategoryHeading">Accessories</li>
                            <li id="watchesStylesCategoryItem">Wallets</li>
                            <li id="watchesStylesCategoryItem">Belts</li>
                            <li id="watchesStylesCategoryItem">Hats & Beanies</li>
                            <li id="watchesStylesCategoryItem">Keychains, Travel & More</li>
                        </ul>
                        </ul>
                </div>
            </div>
            </div>
        )
    } else {
        return(
            <div className="navBarContainer">
        <ul className="navBarList">
            <div className="navBarCategoryItemWrapper" onMouseOver={() => this.handleHover("Men")}>
          <li id="navBarCategoryItem">Men's Watches</li>
          <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
          <div className="navBarCategoryItemWrapper" onMouseOver={() => this.handleHover("Women")}>
            <li id="navBarCategoryItem">Women's Watches</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
          </div>
          <div className="navBarCategoryItemWrapper" onMouseOver={() => this.handleHover("Bags")}>
            <li id="navBarCategoryItem">Bags</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
            </div>
          <div className="navBarCategoryItemWrapper" onMouseOver={() => this.handleHover("Clothing")}>
            <li id="navBarCategoryItem">Clothing & Accessories</li>
            <img id="navBarDownArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"></img>
          </div>
        </ul>
      </div>
        )
    }
}
}


export default HeaderNav;

