import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao";
import Sorteio from "./paginas/Sorteio";

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
