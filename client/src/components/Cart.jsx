import React from 'react';


class Cart extends React.Component {
constructor(props){
    super(props);
    this.state = {
        cartQuantity: 0,
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
        <div className="cartIconContainer" onMouseOver={this.handleHover.bind(this)}>
        <img id="cartIconImg"src="https://static.thenounproject.com/png/11951-200.png"></img>
        </div>
    )
    } else {
        return (
        <div className="cartIconContainer">
        <img id="cartIconImg"src="https://static.thenounproject.com/png/11951-200.png"></img>
        <div className="cartHoverContainer" onMouseLeave={this.handleHover.bind(this)}>
            <div id="cartTextOne">{`1 item added to cart`}</div>
            <div id="inCartProducts"></div>
            <div id="cartTextTwoContainer">
                <div id="cartTextTwoLeft">{`View Shopping Cart (2)`}</div>
                <div id="cartTextTwoRight">{`Subtotal: $1,350.00`}</div>
                </div>
                <button id="checkOutButton">Checkout</button>
        </div>
        </div>
        )
    }
}
}


export default Cart;