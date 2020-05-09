import React from 'react';

class SignIn extends React.Component {
constructor(){
    super();
    this.state ={
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
    <div className="signIn" onMouseOver={this.handleHover.bind(this)}>
        <li id="list">Sign in</li>
        <img id="downArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg">
        </img>
    </div>
    )
    } else {
        return(
        <div className="signIn">
            <li id="list">Sign in</li>
            <img id="upArrowIcon" src="https://st2.depositphotos.com/4060975/8059/v/450/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg">
            </img>
            <div className="hoverSignIn" onMouseLeave={this.handleHover.bind(this)}>
            <div id="loginTextOne">Login for faster checkout</div>
            <button id="loginButton"><strong>Login</strong></button>
            <div id="loginTextTwo">Don't have an account? Sign up</div>
        </div>
    </div>
        )
    }
}
}


export default SignIn;