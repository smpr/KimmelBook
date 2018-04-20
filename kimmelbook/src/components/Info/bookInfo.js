import React, { Component } from 'react';
import { BookInfo, BodyContainer, ReviewBox, SingleReview } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//reach for changing user names to print easier
const makeItPretty = function (name) {
    if (name != null) {
        name = name.replace(/_/, ' ')
        return name
    } else {
        name = "Anonymous";
        return name;
    }
}
const isCheckedOut = function (challenge) {
    if (challenge != null) {
        challenge = "Checked Out!"
        return challenge;
    } else {
        //return that it is available
        challenge = "Available!"
        return challenge;
    }
}
class bookInfo extends Component {
    render() {
        return (
            <BodyContainer>
                <BookInfo>
                    <div>
                        <center><img src={this.props.book.image} alt={this.props.book.title} /></center>
                    </div>
                    <div>
                        <b>Title:</b> {this.props.book.title}
                    </div>
                    <div>
                        <b>Author:</b> {this.props.book.author}
                    </div>
                    <div>
                        {this.props.book.rating}
                    </div>
                    <div>
                        <b>Description: </b>{this.props.book.description}
                    </div>
                    <div>
                        <b>Availabilty: {isCheckedOut(this.props.book.checked_out)} </b>
                    </div>
                    <ReviewBox>
                        {this.props.book.reviews.map((review, index) => {
                            return (
                                <SingleReview key={index}>
                                    <b>Stars: </b>{review.rating}<br />
                                    <b>Reviewer: </b>{makeItPretty(review.user)}
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