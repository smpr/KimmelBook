import React, { Component } from 'react';

class bookInfo extends Component {
   
    render() {
        return (
            <div>
                this is the book info page
                {this.props.book.title}
            </div>
        );
    }
}

export default bookInfo;