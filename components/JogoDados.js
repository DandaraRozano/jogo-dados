"use client";
import { useState } from "react";
import Dado from "./Dado";

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);

  const [dadosA, setDadosA] = useState([1, 1]);
  const [dadosB, setDadosB] = useState([1, 1]);

  const [resultado, setResultado] = useState("");
  const [pontosA, setPontosA] = useState(0);
  const [pontosB, setPontosB] = useState(0);

  const [turno, setTurno] = useState("A");
  const [fim, setFim] = useState(false);

  function jogarA() {
    const d1 = rolarDado();
    const d2 = rolarDado();
    setDadosA([d1, d2]);
    setTurno("B");
  }

  function jogarB() {
    const d1 = rolarDado();
    const d2 = rolarDado();
    setDadosB([d1, d2]);

    const somaA = dadosA[0] + dadosA[1];
    const somaB = d1 + d2;

    if (somaA > somaB) {
      setResultado("Jogador A venceu a rodada");
      setPontosA(pontosA + 1);
    } else if (somaB > somaA) {
      setResultado("Jogador B venceu a rodada");
      setPontosB(pontosB + 1);
    } else {
      setResultado("Empate na rodada");
    }

    if (rodada === 5) {
      setFim(true);
    } else {
      setRodada(rodada + 1);
      setTurno("A");
    }
  }

  function reiniciar() {
    setRodada(1);
    setPontosA(0);
    setPontosB(0);
    setFim(false);
    setResultado("");
    setDadosA([1, 1]);
    setDadosB([1, 1]);
    setTurno("A");
  }

  function resultadoFinal() {
    if (pontosA > pontosB) return "Jogador A ganhou o jogo!";
    if (pontosB > pontosA) return "Jogador B ganhou o jogo!";
    return "Empate geral!";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada {rodada}</h2>

      <div>
        <h3>Jogador A</h3>
        <Dado valor={dadosA[0]} />
        <Dado valor={dadosA[1]} />
        <br />
        <button onClick={jogarA} disabled={turno !== "A" || fim}>
          Jogar
        </button>
      </div>

      <div>
        <h3>Jogador B</h3>
        <Dado valor={dadosB[0]} />
        <Dado valor={dadosB[1]} />
        <br />
        <button onClick={jogarB} disabled={turno !== "B" || fim}>
          Jogar
        </button>
      </div>

      <h3>{resultado}</h3>

      {fim && (
        <div>
          <h2>{resultadoFinal()}</h2>
          <button onClick={reiniciar}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}