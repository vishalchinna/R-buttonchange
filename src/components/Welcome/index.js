import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'subscribe'}

  change = () => {
    this.setState(props => ({
      text: props.text === 'subscribe' ? 'subscribed' : 'subscribe',
    }))
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank You! Happy Learning</p>
        <button type="button" onClick={this.change}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
