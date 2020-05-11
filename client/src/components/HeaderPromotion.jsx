import React from "react";

class HeaderPromotion extends React.Component {
    constructor() {
        super();
        this.state = {
        textArr: [
            'Free Shipping & Returns.',
            'Sign Up For 10% Off Your First Order.',
            'Keeping Our Community Healthy & Safe.'
                ],
        index: 0
        }
        this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    }

    componentDidMount(){
        setInterval(this.handleRightArrowClick, 3000)
    }

    handleRightArrowClick() {
      if (this.state.index < 2) {
        this.setState({
            index: (this.state.index+=1)
        }, ()=> console.log(this.state.index))
      } else {
          this.setState({
            index: 0
          })
      }
    }

    handleLeftArrowClick() {
        if (this.state.index > 0) {
          this.setState({
              index: (this.state.index-=1)
          }, ()=> console.log(this.state.index))
        } else {
            this.setState({
              index: 2
            })
        }
      }

    render() {
        return (
            <div className="topBlackBar">
            <div className="headerPromotions">
              <img className="headerLeftArrow" onClick={this.handleLeftArrowClick} src="https://www.vippng.com/png/full/37-376889_right-arrow-arrow-icon-white-png.png"></img>
              <div className="headerBannerText">{this.state.textArr[this.state.index]}</div>
              <img className="headerRightArrow" onClick={this.handleRightArrowClick}  src="https://www.vippng.com/png/full/37-376889_right-arrow-arrow-icon-white-png.png"></img>
            </div>
          </div>
        )

    }
}

export default HeaderPromotion;