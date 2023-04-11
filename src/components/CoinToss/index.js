import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    altvalue: '',
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {total, head, tail, coinImage, altvalue} = this.state
    let headsCount = head
    let totalCount = total
    let tailsCount = tail
    let updateImage = coinImage
    let updateAlt = altvalue
    if (tossResult === 1) {
      updateImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      totalCount += 1
      tailsCount += 1
      updateAlt = 'tail'
    } else {
      updateImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      totalCount += 1
      headsCount += 1
      updateAlt = 'head'
    }
    this.setState({
      total: totalCount,
      head: headsCount,
      tail: tailsCount,
      coinImage: updateImage,
      altvalue: updateAlt,
    })
  }

  render() {
    const {total, head, tail, coinImage, altvalue} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={coinImage} alt="toss result" className="coin-image" />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="toss-container">
            <p>Total:{total}</p>
            <p>Heads:{head}</p>
            <p>Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
