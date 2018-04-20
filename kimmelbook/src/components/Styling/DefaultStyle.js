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
`
const BookInfo = styled.div`
display:flex;
justify-content: space-around;
flex-direction: column;
text-align: center;
padding: 40px;
`
const BodyContainer = styled.div`
justify-content: center;

`
const Container = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;

div {
    margin: 20px;
}

`
const NavButton = styled.div`


`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
background-color: White;
justify-content: space-around;
align-content: center;
width: 25vw;
padding: 20px;
text-align: center;
box-shadow: 3px 3px 3px #191919;
button {

}
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
const ImgContainer = styled.div`

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
  Style, ReviewBox, SingleReview, NavButton, BookInfo, TextLabelStyle, InnerForm, FormContainer, Container, BodyContainer, Button, ImgContainer

}