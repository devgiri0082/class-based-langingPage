import Timer from "./Timer";

import React, { Component } from 'react'
import DataContext from "./Contexts/DataContext";

export default class Box extends Component {
    static contextType = DataContext;
    constructor() {
        super();
        this.state = {
            timeRemaining: true,
            loading: true,
            isClicked: false
        }
    }
    componentDidMount() {
        const context = this.context;
        this.setState({
            title: context.titleState.title,
            discount: context.discountState.discount,
            message: context.messageState.message,
            buttonText: context.buttonTextState.buttonText,
            endDate: context.endTimeState.endTime,
            imageUrl: context.imageUrlState.imageUrl,
            loading: false
        })
    }
    settingTime = () => {
        this.setState({ timeRemaining: false })
    }
    changeClicked = () => {
        this.setState({ isClicked: true });
    }
    render() {
        const { title, discount, message, buttonText, endDate, imageUrl } = this.state;
        if (!this.state.loading) {
            if (!this.state.isClicked) {
                if (this.state.timeRemaining) {
                    return (
                        <div className="container" style={{ backgroundImage: `url(${imageUrl})` }}>
                            <div className="box">
                                <h1 className="title">{title}</h1>
                                <h1 className="discount">{discount}</h1>
                                <h1 className="message">{message}</h1>
                                <Timer time={endDate} settingTime={this.settingTime} />
                                <button onClick={this.changeClicked}>{buttonText}</button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="box"><h1 className="end">Sale Ended!</h1></div>
                    )
                }
            } else {
                return (
                    <div className="box"><h1 className="end">Thank you for clicking</h1></div>
                )
            }
        }
        else {
            return (
                <div>Loading...</div>
            )
        }
    }
}
