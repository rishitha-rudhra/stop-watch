// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {
    isStarted: false,
    minutes: 0,
    seconds: 0,
  }

  onStart = () => {
    const {isStarted} = this.state
    if (!isStarted) {
      this.timerId = setInterval(this.tick, 1000)
    }
    this.setState({
      isStarted: true,
    })
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({
      isStarted: false,
    })
  }

  onReset = () => {
    this.setState({
      isStarted: false,
      minutes: 0,
      seconds: 0,
    })
  }

  tick = () => {
    const {minutes, seconds} = this.state
    let min = minutes
    let sec = seconds
    if (seconds === 59) {
      sec = 0
      min += 1
    } else {
      sec += 1
    }
    this.setState({
      minutes: min,
      seconds: sec,
    })
  }

  render() {
    const {minutes, seconds} = this.state

    const mins = minutes <= 9 ? `0${minutes}` : `${minutes}`
    const secs = seconds <= 9 ? `0${seconds}` : `${seconds}`

    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p>Timer</p>
          </div>
          <h1>
            {mins}:{secs}
          </h1>
          <div className="btns-container">
            <button
              type="button"
              className="btn start-btn"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn stop-btn"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn reset-btn"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
