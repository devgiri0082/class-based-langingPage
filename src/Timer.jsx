
import React, { Component } from 'react'


export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            totalTime: 0,
            timer: ""
        }
    }
    componentDidMount() {
        this.setState({
            totalTime: this.remainingTime(this.props.time)
        })
    }
    componentDidUpdate(previousProps, previousState, snapShot) {
        if (previousState.totalTime !== this.state.totalTime) {
            if (this.state.totalTime < 1000) {
                this.props.settingTime();
                return;
            }
            this.timer = setTimeout(() => this.setState({
                totalTime: Number(this.state.totalTime) - 1000
            }), 1000);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    remainingTime = (endTime) => {
        let currentTime = new Date();
        let finishingTime = new Date(endTime);
        return finishingTime.getTime() - currentTime.getTime();
    }
    date = (time) => {
        let remainingTime = time;
        let day = Math.floor(remainingTime / 86400000);
        remainingTime -= day * 86400000;
        let hour = Math.floor(remainingTime / 3600000);
        remainingTime -= hour * 3600000;
        let minute = Math.floor(remainingTime / 60000);
        remainingTime -= minute * 60000;
        let seconds = Math.floor(remainingTime / 1000);
        return [day, hour, minute, seconds].map(elem => {
            return String(elem).length === 1 ? `0${elem}` : `${elem}`
        });
    }
    render() {
        let values = this.date(this.state.totalTime);
        return (
            <div className="remaining-time">
                <div className="content"><p className="time days">{values[0]}</p><h5>Days</h5></div>
                <div className="content"><p className="time hours">{values[1]}</p><h5>Hours</h5></div>
                <div className="content"><p className="time minute">{values[2]}</p><h5>Minutes</h5></div>
                <div className="content"><p className="time seconds">{values[3]}</p><h5>Seconds</h5></div>
            </div>
        )
    }
}
