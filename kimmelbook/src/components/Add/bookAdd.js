import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import api from 'books-mock-api'
import { FormContainer, BodyContainer, Container, Style, TextLabelStyle, NavButton } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const changeIdCase = function(title)  {
    title = title.replace(/\s/g, '');
    return 
}
class bookAdd extends Component {
    state = {
        book: {
            title: "",
            author: "",
            description: "",
            image: "",
            reviews: [],
            checked_out: "",
            id: "testPage"

        },
        redirectToBookList: false
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const idTitle = changeIdCase(this.state.book.title)
        this.setState({id: idTitle})
        const newBook = await api.createBook(this.state.book);
        this.setState({redirectToBookList: true}) 
    }
    handleChange = (event) => {
        const updateBook = {
            ...this.state.book
        }
        updateBook[event.target.name] = event.target.value
        this.setState({ book: updateBook })
    }
    render() {
        
        if (this.state.redirectToBookList) {
            return <Redirect to={`/`} />
        }
        return (
            <BodyContainer>
                <Container>
                    <FormContainer>
                        <div>
                            <TextField
                                hintText="Book Title"
                                floatingLabelText="Book Title"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="title"
                                type="text"

                                value={this.state.book.title}
                            />

                        </div>
                        <div>
                            <TextField
                                hintText="Author"
                                floatingLabelText="Author"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="author"
                                type="text"

                                value={this.state.book.author}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Image URL"
                                floatingLabelText="Image URL"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="image"
                                type="text"

                                value={this.state.book.image}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Description"
                                floatingLabelText="Description"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="description"
                                type="text"

                                value={this.state.book.description}
                            />
                        </div>
                        <NavButton>
                            <div>
                            <Link to={`/`}><RaisedButton label="Cancel" /></Link>
                                </div>
                                <div>
                                    <RaisedButton onClick={this.handleSubmit} label="Submit" />
                                </div>
                        </NavButton>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default bookAdd;