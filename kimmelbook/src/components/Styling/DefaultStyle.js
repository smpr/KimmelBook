import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

const ReviewBox = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
padding: 10px;
flex-wrap: wrap;
`
const SingleReview = styled.div`
padding: 20px;
text-align: center;
box-shadow: 3px 3px 3px #191919;
background: white;
margin: 5px;
`
const BookInfo = styled.div`
display:flex;
width: 50%;
flex-direction: column;
text-align: center;
padding: 40px;
background: white;
justify-content: center;
align-items: center;
`
const AddBook = styled.div`
background: grey;
background-size: cover;
justify-content: center;
display: flex;
align-content: center;
`
const BodyContainer = styled.div`
justify-content: center;
background: grey;
`
const InfoContainer = styled.div`
justify-content: center;
background: grey;
justify-content: center;
align-items: center;
display: flex;
`
const BookContainer = styled.div`
display: flex;
flex-direction: column;
background-color: White;
width: 25%;
justify-content: space-around;
align-content: center;
padding: 20px;
text-align: center;
box-shadow: 3px 3px 3px #191919;
`
const Container = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
flex-grow: 1
div {
    margin: 20px;
  
    flex-wrap: wrap;
    flex-shrink: 0
}
`
const NavButton = styled.div`
display: flex;
justify-content: center;
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
background-color: White;
justify-content: space-around;
align-content: center;
padding: 20px;
text-align: center;
box-shadow: 3px 3px 3px #191919;
a {
        text-decoration: none;
}
`
const Button = styled.button`
:hover {
    box-shadow: 0 7px 7px 0 rgba(255,255,255,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
:focus {
    outline: none;
    box-shadow: 0 0 0 0;
   }
`
const InnerForm = styled.div`
display: flex;
justify-content: space-around;
`
const Style = {
  // width: '10%',
//   height: '95%',
//   margin: '10px',
//   border: '.5px solid #37474F',
//   backgroundColor: '#37474F'
};
const TextLabelStyle = {
//   errorStyle: {
//     color: orange500,
//   },
//   underlineStyle: {
//     borderColor: orange500,
//   },
//   floatingLabelStyle: {
//     color: blueGrey100,
//   },
//   floatingLabelFocusStyle: {
//     color: cyan500,
//   },
};
export {
  Style, ReviewBox, InfoContainer, AddBook, SingleReview, BookContainer, NavButton, BookInfo, TextLabelStyle, InnerForm, FormContainer, Container, BodyContainer, Button

}