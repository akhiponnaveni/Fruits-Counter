// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  Mango = () => {
    this.setState(prevstate => ({mango: prevstate.mango + 1}))
  }

  Banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate 0 mangoes 0 bananas <span className="style">{mango}</span>{' '}
            mangoes
            <span className="style">{banana}</span> bananas
          </h1>
          <div className="image-main-container">
            <div className="image-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" className="Button" onClick={this.Mango}>
                Eat Mango
              </button>
            </div>
            <div className="image-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
                alt="banana"
              />
              <button type="button" className="Button" onClick={this.Banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
