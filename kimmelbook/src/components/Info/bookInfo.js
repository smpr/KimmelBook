import React, { Component } from 'react';
import { BookInfo, BodyContainer, ReviewBox, SingleReview } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//reach for changing user names to print easier
const makeItPretty = function (name) {
    if (name != null) {
        name = name.replace('', /_/)
    } else {
        name = "Anonymous";
        return;
    }
}
const isCheckedOut = function (challenge) {
    if (challenge != null) {
        challenge = "Checked Out!"
        console.log("test checked out")
        return;
    } else {
        //return that it is available
        challenge = "Available!"
        return;
    }
}
class bookInfo extends Component {
//    handleChallenge = () => {
//        const checkedOut = isCheckedOut()
//        console.log(checkedOut)
//        return
//    }
    render() {
        return (
            <BodyContainer>
                <BookInfo>
                    <div>
                        <center><img src={this.props.book.image} alt={this.props.book.title} /></center>
                    </div>
                    <div>
                        <center><b>Title:</b> {this.props.book.title}</center>
                    </div>
                    <div>
                        <center><b>Author:</b> {this.props.book.author}</center>
                    </div>
                    <div>
                        <center>{this.props.book.rating}</center>
                    </div>
                    <div>
                        <center>{this.props.book.description}</center>
                    </div>
                    <div>
                        <center><b>Availabilty: {isCheckedOut(this.props.book.checked_out)} </b>{console.log(this.props.book.checked_out)}</center>
                    </div>
                    <ReviewBox>
                        {this.props.book.reviews.map((review, index) => {
                            return (
                                <SingleReview key={index}>
                                    <b>Stars: </b>{review.rating}<br />
                                    <b>Reviewer: </b>{review.user}
                                </SingleReview>
                            )
                        })}
                    </ReviewBox>
                    <div>
                        <center><RaisedButton onClick={this.props.toggleBookSwitch} label="Back" /></center>
                    </div>
                </BookInfo>
            </BodyContainer>
        );
    }
}

export default bookInfo;