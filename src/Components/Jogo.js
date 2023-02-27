import React from "react";
import palavras from "../palavras.js"
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo(props) {
    let p = Palavra();
    function IniciarJogo() {
        //let p = Palavra();
        props.setHabilitar([])
        props.setEscondido("")
        props.setContador(0)
        props.setPalavra(p[0])
        props.setPalavraEscolhida(p[1])
        props.setGanhou("")
        props.setPerdeu("")
    }
    
    function Palavra() {
        const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]
        let palavraEscolhida = [];
        for (let i = 0; i < palavraAleatoria.length; i++) {
            palavraEscolhida.push("_");
        }
        return [palavraAleatoria, palavraEscolhida];
    }

    function Imagem(props) {
        const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
        return <img src={imagens[props.contador]} alt="Forca" data-test="game-image"/>
    }

    return (
        <div className="jogo">
            <Imagem contador={props.contador} setContador={props.setContador} />
            <div className="divComandos">
                <div>
                    <button onClick={IniciarJogo} data-test="choose-word">
                        Escolher Palavra
                    </button>
                </div>
                <input
                data-test="word"
                value={Array.isArray(props.escondida) ? props.escondida.join("") : ""}
                className={`${props.escondido} ${props.ganhou} ${props.perdeu}`}
                ></input>
            </div>
            </div>
        );
}
