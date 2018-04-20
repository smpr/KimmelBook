import React, { Component } from 'react';
import { BookInfo, BodyContainer, ReviewBox, SingleReview } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//reach for changing user names to print easier
const makeItPretty = function(name){
    if(name != null){
    name= name.replace('', /_/)
    }else {
        name = "Anonymous";
        return;
    }
}
const isCheckedOut = function(challenge){
    if(challenge != null){
        //return that it is checked out
    }else {
        //return that it is available
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