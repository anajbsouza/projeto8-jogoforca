import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto.js";
import cores from "./style/cores.css";

export default function App() {
  const [errors, setErrors] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState(alfabeto);
  const [choosenWord, setChoosenWord] = useState([]);
  const [gameWord, setGameWord] = useState([]);
  const [wordColor, setWordColor] = useState("preto");

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
          wordColor={wordColor}
          setWordColor={setWordColor}
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
          wordColor={wordColor}
          setWordColor={setWordColor}
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