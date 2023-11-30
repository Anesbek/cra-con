import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyleBtn } from './components/Button.styled';
import { MYtheme } from './components/styles/TheneStyled';


function App() {
  return (
    <div className="App">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut cumque deleniti excepturi ratione sit tempore temporibus tenetur. Assumenda aut doloremque harum iusto modi natus nemo, provident rerum soluta voluptatibus.</p>
      

    
    
      <BOX>
       <StyleBtn color ={MYtheme.colors.primary} primary>Hello</StyleBtn>
       <StyleBtn color ={MYtheme.colors.secondary} outlined>Hello</StyleBtn>
      </BOX>
     
    </div>
  );
}

export default App;

const styleh1 = styled.h1`
color: red;
`



const BOX = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

button {
  cursor: pointer;
}


@media ${MYtheme.media.tablet} {
  flex-direction: column;
}
`
