import React, { Component } from 'react';
import api from 'books-mock-api'
import { Link } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




class bookList extends Component {
    state = {
        books: [],
        users: []

    }
//insert rating calculator based on each review rating
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

    render() {
        return (
            <BodyContainer>
                
{this.state.books.map((book, index) => {
                    return (
                        <div>
                            <img src={book.image} />
                            <center>{book.title}</center>
                        
                        </div>
                    )
                })}
                
            </BodyContainer>
        );
    }
}

export default bookList;