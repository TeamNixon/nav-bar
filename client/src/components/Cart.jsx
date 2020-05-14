import React from 'react';
import axios from 'axios';

class Cart extends React.Component {
constructor(props){
    super(props);
    this.state = {
        cartQuantity: 0,
        hover: true,
        cartSum: 0,
        inCartProducts: []
    }
    this.calculateSum = this.calculateSum.bind(this)
    this.getCartItems = this.getCartItems.bind(this)
}

componentDidMount(){
    this.getCartItems();
}

getCartItems(){
    axios.get(`http://localhost:1739/api/navbar/incart/`)
    .then(results => this.setState({
        inCartProducts: results.data
    }, () => this.props.updateCartQuantity(this.state.inCartProducts.length)))
    .catch(error => console.error(error))
}

calculateSum(){
    let sum = 0;
    for (let i = 0; i < this.state.inCartProducts.length; i++) {
        sum+= parseInt(this.state.inCartProducts[i].product_price)
    }
    this.setState({
        cartSum: sum
    })
}

handleHover(){
    this.setState({
        hover: !this.state.hover
    }, () =>  this.calculateSum())
}


render(){
if(this.state.hover) {
    return (
        <div className="cartIconContainer" onMouseOver={this.handleHover.bind(this)}>
        <img id="cartIconImg" src="https://static.thenounproject.com/png/11951-200.png"></img>
        </div>
    )
    } else {
        return (
        <div className="cartIconContainer">
        <img id="cartIconImg" src="https://static.thenounproject.com/png/11951-200.png"></img>
        <div className="cartHoverContainer" onMouseLeave={this.handleHover.bind(this)}>
            <div id="cartTextOne">{`1 item added to cart`}</div>


            {this.state.inCartProducts.map((cartProduct, index)=> (
                <div id="inCartProductsContainer" key={index}>
                    <div className="inCartProductEntryContainer">
                        <img className="inCartProductEntryImg" src={cartProduct.images[0]}></img>
    
                        <div id="inCartProductEntryTextContainer">
    
                            <ul id="inCartProductNamePriceList">
                                <li id="inCartProductName">{cartProduct.product_name}</li>
                                <li id="inCartProductPrice">{`$${cartProduct.product_price}`}</li>
                            </ul>
    
                            <div id="inCartProductInfo">
                                <ul id="inCartProductInfoList">
                                <li>{`Qty: 1`}</li>
                                <li>{`Color: ${cartProduct.color}`}</li>
                                <li>{`Size: OSFM`}</li>
                                </ul>
                            </div> 
    
                        </div>
                    </div>
                </div>
            ))}




            <div className="cartSubtotalCheckoutContainer">

                <div className="cartSubtotalCheckoutWrapper">
                    <div id="cartTotalAmount">{`View Shopping Cart (${this.state.inCartProducts.length})`}</div>
                    <div id="cartSubtotal">{`Subtotal: $${this.state.cartSum}.00`}</div>
                </div>

                    <button id="checkOutButton">Checkout</button>
                </div>
        </div>
        </div>
        )
    }
}
}


export default Cart;