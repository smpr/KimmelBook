import React, { Component } from 'react';
import api from 'books-mock-api'
import { Link } from 'react-router-dom'
import { FormContainer, BodyContainer, Container, NavButton } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MediaQuery from 'react-responsive';

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
    showBook = (index) => {
        this.toggleBookSwitch()
        const book = this.state.books[index]
        this.setState({ activeBook: book })
    }
    render() {
        const bookView = this.state.toggleBookView ?
            <BookInfo
                book={this.state.activeBook}
                toggleBookSwitch={this.toggleBookSwitch}
            /> :
            <BodyContainer>
                <MediaQuery minDeviceWidth={1224}>
                <NavButton>
                    <center><Link to={`/Create`}><RaisedButton label="Add A Book" /></Link></center>
                </NavButton>
                <Container>
                    {this.state.books.map((book, index) => {
                        return (
                            <FormContainer key={index} onClick={() => this.showBook(index)}>
                                <div>
                                    <img src={book.image} alt={book.title} />
                                    <center>{book.title}</center>
                                    <center>{avgRatingFun(book.reviews)}</center>
                                </div>
                            </FormContainer>
                        )
                    })}

                </Container>
                    <MediaQuery minDeviceWidth={1824}>
                        <div>You also have a huge screen</div>
                    </MediaQuery>
                    <MediaQuery maxWidth={375}>
                        <div>You are sized like small mobile phone though</div>
                    </MediaQuery>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={375}>
                    <div>You are a small  phone</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={414} minDeviceWidth={376}>
                    <div>You are a slightly larger tablet or mobile phone</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={768} minDeviceWidth={415}>
                    <div>You are a regular tablet</div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1024} minDeviceWidth={769}>
                <NavButton>
                    <center><Link to={`/Create`}><RaisedButton label="Add A Book" /></Link></center>
                </NavButton>
                <Container>
                    {this.state.books.map((book, index) => {
                        return (
                            <FormContainer key={index} onClick={() => this.showBook(index)}>
                                <div>
                                    <img src={book.image} alt={book.title} width="200"/>
                                    <center>{book.title}</center>
                                    <center>{avgRatingFun(book.reviews)}</center>
                                </div>
                            </FormContainer>
                        )
                    })}

                </Container>
                </MediaQuery>
                <MediaQuery orientation="portrait">
                    <div>You are portrait</div>
                </MediaQuery>
                <MediaQuery orientation="landscape">
                    <div>You are landscape</div>
                </MediaQuery>
                <MediaQuery minResolution="2dppx">
                    <div>You are retina</div>
                </MediaQuery>

            </BodyContainer>
        return (
            <div>
                {bookView}
            </div>
        );
    }
}

export default bookList;