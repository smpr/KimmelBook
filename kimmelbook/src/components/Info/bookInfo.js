import React, { Component } from 'react';
import { BookInfo, BodyContainer } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class bookInfo extends Component {

    render() {
        return (
            <BodyContainer>
                <BookInfo>
                    <div>
                        <center><img src={this.props.book.image} alt={this.props.book.title}/></center>
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
                        <center><RaisedButton onClick={this.props.toggleBookSwitch} label="Back" /></center>
                    </div>
                </BookInfo>
            </BodyContainer>
        );
    }
}

export default bookInfo;