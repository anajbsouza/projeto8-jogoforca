//criar um teclado para o jogo da forca, onde a letra clicada deve substituir o espaço vazio na palavra sorteada. Exemplo: se a palavra sorteada for "banana", o componente deve exibir 6 linhas em branco, uma para cada letra da palavra. Ao clicar na letra "a", a linha correspondente à letra "a" deve ser preenchida com a letra "a". Ao clicar no botão, a palavra sorteada deve ser exibida no console.

import React from "react";
import alfabeto from "../alfabeto";

export default function Letras() {
    return (
        <>
        {alfabeto.map((letra) => (
            <button>{letra}</button>
        ))}
        </>
    );
}

