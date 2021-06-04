import { Component } from "react"
import Box from "./Box";
import DataContext from "./Contexts/DataContext";

export default class MainPage2 extends Component {
    static contextType = DataContext;
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
        };
    }
    render() {
        const { title, discount, message, buttonText, endDate, imageUrl } = this.state;
        return (
            <div className="container" style={{ backgroundImage: `url(${imageUrl})` }}>
                <Box title={title} discount={discount} message={message} buttonText={buttonText} time={endDate} />
            </div>
        )
    }

}