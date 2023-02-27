import React, { useState } from "react";
import Jogo from "./Components/Jogo";
import Letras from "./Components/Letras";
import alfabeto from "./alfabeto.js";
export default function App() {

  const [habilitar, setHabilitar] = useState(alfabeto);
  const [escondido, setEscondido] = useState("escondido");
  const [contador, setContador] = useState(0);
  const [palavra, setPalavra] = useState([]);
  const [palavraEscolhida, setPalavraEscolhida] = useState([]);
  const [ganhou, setGanhou] = useState("");
  const [perdeu, setPerdeu] = useState("");

  return (
    <div className="principal">
      <Jogo 
      habilitar={habilitar} setHabilitar={setHabilitar} 
      escondido={escondido} setEscondido={setEscondido}
      contador={contador} setContador={setContador}
      palavra={palavra} setPalavra={setPalavra}
      palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida}
      ganhou={ganhou} perdeu={perdeu}
      setGanhou={setGanhou} setPerdeu={setPerdeu}
      />
      <div className="letras">
        {alfabeto.map((letra)=> 
        <Letras key={letra} letra={letra} 
        habilitar={habilitar} setHabilitar={setHabilitar}
        palavra={palavra} palavraEscondida={palavraEscolhida} 
        setPalavraEscolhida={setPalavraEscolhida}
        contador={contador} setContador={setContador}
        setGanhou={setGanhou} setPerdeu={setPerdeu}
        />)}
      </div>
    </div>
  )
}

