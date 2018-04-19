import React, { Component } from 'react';
import api from 'books-mock-api'
import { Link } from 'react-router-dom'





class bookList extends Component {
    state={
        books:[],
        users: []
        
    }
   
    async componentWillMount(){
        try {
            const users = await api.getUsers();
            const books = await api.getBooks();
            this.setState({ books: books.data})
            console.log(users.data)
        }catch(error){
            console.log(error)
        }
    }

    render() {
        return (
            <div>
book Titles
{this.state.books.map((book, index)=>{
    return(
        <div>
            {book.title}
        </div>
    )
})}
            </div>
        );
    }
}

export default bookList;