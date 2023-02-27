// import React from "react";
// import alfabeto from "../alfabeto"

// export default function Letras(props) {
//     const errosMaximos = 5;
//     function escolheLetra(letra) {
//         props.setHabilitar([...props.habilitar, letra])
//         const novaPalavra = [...props.palavra]
//         const novaPalavraEscondida = [...props.palavraEscondida]
//         console.log(novaPalavra, novaPalavraEscondida)

//         if (!novaPalavra.includes(letra)) {
//             props.setContador(props.contador + 1)
//         } else {
//             while (novaPalavra.includes(letra)) {
//                 const index = novaPalavra.indexOf(letra)
//                 novaPalavra.splice(index, 1, "-")
//                 novaPalavraEscondida[index] = letra
//             }
//             props.setPalavraEscondida(novaPalavraEscondida)
//         }

//         if (!novaPalavraEscondida.includes("_")) {
//             props.setJogoGanho("jogoGanho")
//             props.setHabilitar([...alfabeto])
//         } else if (props.contador === errosMaximos) {
//             props.setJogoPerdido("jogoPerdido")
//             props.setHabilitar([...alfabeto])
//         }
//     }

//     return (
//         <div>
//             <button onClick={() => escolheLetra(props.letra)} 
//             disabled={props.habilitar.includes(props.letra)} 
//             className={props.habilitar.includes(props.letra) ? "" : "botaoHabilitado"} 
//             data-test="letter">{props.letra.toUpperCase()}</button>
//         </div>
//     )
// }

import React from "react"

function Letras(props) {
    function escolheLetra(letra) {
        props.setHabilitar([...props.habilitar, letra])
        const novaPalavra = [...props.palavra]
        const novaPalavraEscondida = props.palavraEscondida ? [...props.palavraEscondida] : []
        console.log(novaPalavra, novaPalavraEscondida)

        if (!novaPalavra.includes(letra)) {
        // ...
        }

        props.setPalavraEscondida(novaPalavraEscondida)
    }

    return (
        <div>
        <button
            onClick={() => escolheLetra(props.letra)}
            disabled={props.habilitar.includes(props.letra)}
            className={props.habilitar.includes(props.letra) ? "" : "botaoHabilitado"}
            data-test="letter"
        >
            {props.letra.toUpperCase()}
        </button>
        </div>
    )
}

export default Letras
