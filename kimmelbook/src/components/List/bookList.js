import React, { Component } from 'react';
import api from 'books-mock-api'
import { FormContainer, BodyContainer } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import BookInfo from '../Info/bookInfo'


//insert rating calculator based on each review rating
const avgRatingFun = function (rating) {
    if (rating.length > 0) {
        var sum = 0;
        var len = rating.length;

        for (var i = 0; i < len; i++) {
            //add them together
            sum += rating[i].rating;

            //console.log(sum)
        }
        return (sum / len).toFixed(2);
    } else {
        //reach goal of making this undefined and having the ui show "this book is not yet rated"
        return 0;
    }
}


class bookList extends Component {
    state = {
        books: [],
        users: [],
        activeBook: {},
        toggleBookView: false

    }

    async componentWillMount() {
        try {
            //const users = await api.getUsers();
            const books = await api.getBooks();
            this.setState({ books: books })
            console.log(books)
            //console.log(users)
        } catch (error) {
            console.log(error)
        }
    }
    //switching to bookview
    toggleBookSwitch = () => {
        this.setState({ toggleBookView: !this.state.toggleBookView })
    }
    showBook =(index) => {
        this.toggleBookSwitch()
        const book = this.state.books[index]
        this.setState({ activeBook: book})
    }
    render() {
        const bookView = this.state.toggleBookView ?
            <BookInfo
                book={this.state.activeBook}
                toggleBookSwitch={this.toggleBookSwitch}
            /> :
            <BodyContainer>

                {this.state.books.map((book, index) => {

                    return (
                        <FormContainer key={index} onClick={() => this.showBook(index)}>
                            <div>
                                <img src={book.image} alt={book.title}/>
                                <center>{book.title}</center>
                                <center>{avgRatingFun(book.reviews)}</center>

                            </div>
                        </FormContainer>
                    )
                })}

            </BodyContainer>
        return (
            <div>
                {bookView}
            </div>
        );
    }
}

export default bookList;