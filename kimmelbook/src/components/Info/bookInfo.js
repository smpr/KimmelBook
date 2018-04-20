import React, { Component } from 'react';
import { BookInfo, BodyContainer, ReviewBox, SingleReview } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';
import api from 'books-mock-api'
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
const checkOut = function () {

}

class bookInfo extends Component {
    state = {
        book: {
            author: this.props.author,
            image: this.props.image,
            title: this.props.title,
            reviews: this.props.reviews,
            description: this.props.description,
            id: this.props.book.id,
            checked_out: "checked_out"
        }

    }
    //Checks to see if book.checked_out is null. if it is it makes a button visible to check it out
    isCheckedOut = function (challenge) {
        if (challenge != null) {
            challenge = "Checked Out!"
            return challenge;
        } else {
            //return that it is available
            challenge = <RaisedButton label="Check Out" />
            return challenge;
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        await api.updateBook(this.state.book)
    }

    render() {
        const bodyRef =
            <div>
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
                    <b>Availabilty: {this.isCheckedOut(this.props.book.checked_out)} </b>
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
            </div>
        return (
            <BodyContainer>
                <MediaQuery minDeviceWidth={1224}>
                    <BodyContainer>
                        <BookInfo>
                            <div>
                                <center><img src={this.props.book.image} alt={this.props.book.title} /></center>
                            </div>
                            {bodyRef}
                        </BookInfo>
                    </BodyContainer>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={375}>
                    <BodyContainer width="100">
                        <BookInfo>
                            <div>
                                <center><img src={this.props.book.image} alt={this.props.book.title} width="100" /></center>
                            </div>
                            {bodyRef}
                        </BookInfo>
                    </BodyContainer>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={414} minDeviceWidth={376}>
                    <BodyContainer>
                        <BookInfo>
                            <div>
                                <center><img src={this.props.book.image} alt={this.props.book.title} /></center>
                            </div>
                            {bodyRef}
                        </BookInfo>
                    </BodyContainer>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768} minDeviceWidth={415}>
                    <BodyContainer>
                        <BookInfo>
                            <div>
                                <center><img src={this.props.book.image} alt={this.props.book.title} /></center>
                            </div>
                            {bodyRef}
                        </BookInfo>
                    </BodyContainer>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1024} minDeviceWidth={769}>
                    <BodyContainer>
                        <BookInfo>
                            <div>
                                <center><img src={this.props.book.image} alt={this.props.book.title} /></center>
                            </div>
                            {bodyRef}
                        </BookInfo>
                    </BodyContainer>
                </MediaQuery>
            </BodyContainer>

        );
    }
}

export default bookInfo;