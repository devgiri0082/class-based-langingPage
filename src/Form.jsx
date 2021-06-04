import { useHistory } from "react-router-dom";
import "./style.css";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from "react";
import DataContext from "./Contexts/DataContext";

export default function Forms() {
    const history = useHistory();
    const { titleState, discountState, messageState, buttonTextState, endTimeState, imageUrlState } = useContext(DataContext);
    function navigateToTimer(title, discount, message, buttonText, endTime, imageUrl) {
        titleState.setTitle(title);
        discountState.setDiscount(discount);
        messageState.setMessage(message);
        buttonTextState.setButtonText(buttonText);
        endTimeState.setEndTime(endTime);
        imageUrlState.setImageUrl(imageUrl);
        history.push("/Timer");
    }

    return (
        <div className="main" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)` }}>
            <Formik
                initialValues={{ title: "", discount: "", message: "", buttonText: "", endTime: "", imageUrl: "" }}
                validate={values => {
                    const error = {};
                    if (!values.title) {
                        error.title = "Main Heading Require";
                    }
                    else if (values.title.length > 30) {
                        error.title = "Main Heading Should be less than 30 letters"
                    }
                    if (!values.discount) {
                        error.discount = "Secondary Heading Required"
                    }
                    else if (values.discount.length > 30) {
                        error.discount = "Secondary Heading Should be less than 30 letters"
                    }
                    if (values.message.length > 30) {
                        error.message = "Subtext should be less than 30 letters"
                    }
                    if (!values.buttonText) {
                        error.buttonText = "Button Text is Required"
                    }
                    else if (values.buttonText.length > 30) {
                        error.buttonText = "Button Text should be less than 30 letters"
                    }
                    if (!values.endTime) {
                        error.endTime = "End Time is Required"
                    }
                    else if (new Date().getTime() > new Date(values.endTime).getTime()) {
                        error.endTime = "Given date can't be less than current date";
                    }
                    if (!values.imageUrl) {
                        error.imageUrl = "You have to choose a background Image";
                    }
                    return error;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    navigateToTimer(values.title, values.discount, values.message, values.buttonText, values.endTime, values.imageUrl)
                }}
            >
                {({ isSubmitting, values, handleChange }) => (
                    <Form>
                        <div className="form">
                            <h1>Build Your Landing Page</h1>
                            <div className="main-text">
                                <p>Main Headline</p>
                                <input className="text" type="text" name="title" value={values.title} onChange={handleChange} />
                                <ErrorMessage component="div" className="error" name="title" />
                            </div>
                            <div className="secondary-text">
                                <p>Secondary Headline</p>
                                <Field className="text" type="text" name="discount" />
                                <ErrorMessage component="div" className="error" name="discount" />
                            </div>
                            <div className="sub-text">
                                <p>Subtext</p>
                                <Field className="text" type="text" name="message" />
                                <ErrorMessage component="div" className="error" name="message" />
                            </div>
                            <div className="button-text">
                                <p>Button Text</p>
                                <Field className="text" type="text" name="buttonText" />
                                <ErrorMessage component="div" className="error" name="buttonText" />
                            </div>
                            <div className="end-time">
                                <p>When will the promo end?</p>
                                <Field className="text" type="datetime-local" name="endTime" />
                                <ErrorMessage component="div" className="error" name="endTime" />
                            </div>
                            <div className="image-select">
                                <Field type="radio" id="image1" name="imageUrl" value="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80" className="radio" />
                                <label htmlFor="image1"><img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80" alt="" /></label>
                                <Field type="radio" id="image2" name="imageUrl" value="https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="radio" />
                                <label htmlFor="image2"><img src="https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" /></label>
                            </div>
                            <ErrorMessage component="div" className="error" name="imageUrl" />
                            <button disabled={isSubmitting}>start timer</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )

    // function setValue(value, setObj) {
    //     setObj(value);
    // }
    // function sendValue() {
    //     setClicked(true);
    //     if (titleRef.value === 0) {
    //         return;
    //     }
    //     if (discount.length === 0) {
    //         return;
    //     }
    //     if (message.length === 0) return;
    //     if (buttonText.length === 0) return;
    //     if (endDate.length === 0) return;
    //     if (imageUrl.length === 0) return;
    //     navigateToTimer();
    // }
}