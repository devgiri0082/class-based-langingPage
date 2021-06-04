import Forms from "./Form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DataContext from "./Contexts/DataContext";
import { useState } from "react";
import Box from "./Box";

export default function App(props) {
    let [title, setTitle] = useState("");
    let [discount, setDiscount] = useState("");
    let [message, setMessage] = useState("");
    let [buttonText, setButtonText] = useState("");
    let [endTime, setEndTime] = useState("");
    let [imageUrl, setImageUrl] = useState("");

    return (
        <DataContext.Provider value={
            {
                titleState: { title, setTitle },
                discountState: { discount, setDiscount },
                messageState: { message, setMessage },
                buttonTextState: { buttonText, setButtonText },
                endTimeState: { endTime, setEndTime },
                imageUrlState: { imageUrl, setImageUrl }
            }
        }>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Forms />
                    </Route>
                    <Route path="/Timer">
                        <Box />
                    </Route>
                </Switch>
            </Router>
        </DataContext.Provider>
    )
}