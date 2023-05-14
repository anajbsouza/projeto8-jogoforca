import React, { useState } from "react";
import styled from "styled-components";
import alfabeto from "../alfabeto";

export default function Letras({ guessedLetters, setGuessedLetters, choosenWord, setChoosenWord, errors, setErrors, gameWord, setGameWord, wordColor, setWordColor }) {

    function clickLetter(letra) {
        setGuessedLetters([...guessedLetters, letra])
        
        if(choosenWord.includes(letra)) {
            rightLetter(letra);
        } else {
            wrongLetter(letra);
        }
    }

    function endGame() {
        setGameWord(choosenWord);
        setGuessedLetters(alfabeto);
    }

    function rightLetter(letra) {
        const newGameWord = [...gameWord];
        choosenWord.forEach((l, i) => {
            if(l === letra) {
                newGameWord[i] = letra;
            }
        })
        setGameWord(newGameWord);

        if (!newGameWord.includes(" _")) {
            setWordColor("verde");
            endGame();
        }
    }

    function wrongLetter(letra) {
        const newErrors = errors + 1;
        setErrors(newErrors);

        if(newErrors === 6) {
            setWordColor("vermelho");
            endGame();
        }
    }

    return (
        <>
            <Container>
                {alfabeto.map((letra) => (
                    <button 
                        key={letra} 
                        disabled={guessedLetters.includes(letra)} 
                        data-test="letter"
                        onClick={() => clickLetter(letra)}
                    >
                        {letra}
                    </button>
                ))}
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 630px;
    margin-left: 50px;
    align-items: center;
    button {
        width: 40px;
        height: 40px;
        background-color: #e1ecf4;
        border-radius: 3px;
        border: 1px solid #7aa7c7;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 800;
        color: #39739d;
        margin: 4px;
    }
    button:hover {
        background-color: #b3d3ea;
        color: #2c5777;
        cursor: pointer;
    }
    button:disabled {
        background-color: #9faab5;
        border: 1px solid #9faab5;
        color: #79818a;
        cursor: default;
    }
`