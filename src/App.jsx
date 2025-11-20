import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import ProdottoSingolo from './pages/ProdottoSingolo';
import DefaultLayout from './pages/DefaultLayout';
import Contesto from './assets/contexts/BudgetContext';


function App() {

  const [budgetMode, setBudgetMode] = useState(true)

  function handleMode() {
    setBudgetMode(valore => !valore)
    console.log(budgetMode);
  }


  return (
    <>
      <Contesto.Provider value={{ handleMode }}>

        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ChiSiamo" element={<ChiSiamo />} />
              <Route path="/Prodotti" element={<Prodotti />} />
              <Route path="/Prodotti/:id" element={<ProdottoSingolo />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </Contesto.Provider>
    </>
  )
}

export default App
