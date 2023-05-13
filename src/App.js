import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo />
        <Letras />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`