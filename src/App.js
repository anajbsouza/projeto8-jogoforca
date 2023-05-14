import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto.js";

export default function App() {
  const [errors, setErrors] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState(alfabeto);
  const [choosenWord, setChoosenWord] = useState([]);
  const [gameWord, setGameWord] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo 
          guessedLetters={guessedLetters} 
          setGuessedLetters={setGuessedLetters} 
          choosenWord={choosenWord}
          setChoosenWord={setChoosenWord}
          errors={errors}
          setErrors={setErrors}
          gameWord={gameWord}
          setGameWord={setGameWord}
        />
        <Letras 
          guessedLetters={guessedLetters} 
          setGuessedLetters={setGuessedLetters}
          choosenWord={choosenWord}
          setChoosenWord={setChoosenWord}
          errors={errors}
          setErrors={setErrors}
          gameWord={gameWord}
          setGameWord={setGameWord}
        />
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