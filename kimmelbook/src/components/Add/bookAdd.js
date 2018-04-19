import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import api from 'books-mock-api'
import { FormContainer, BodyContainer, Container, Style, TextLabelStyle } from "../Styling/DefaultStyle"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class bookAdd extends Component {
    state = {
        book: {
            title: "",
            author: "",
            description: "",
            img: ""
        },
        redirectToBookList: false
    }
    handleSubmit = async (event) => {
        event.preventDefault();
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
                                name="img"
                                type="text"

                                value={this.state.book.img}
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
                        <div>
                            <RaisedButton onClick={this.handleSubmit} label="Submit" style={Style} />
                        </div>
                    </FormContainer>
                </Container>
            </BodyContainer>
        );
    }
}

export default bookAdd;