import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios'
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import ProdottoSingolo from './pages/ProdottoSingolo';
import DefaultLayout from './pages/DefaultLayout';
import Contesto from './assets/contexts/BudgetContext';


function App() {

  const [budgetMode, setBudgetMode] = useState(true)
  const [prodotti, setProdotti] = useState([])



  useEffect(() => {
    const api_products = 'https://fakestoreapi.com/products'

    axios.get(api_products)
      .then(response => {
        console.log(response.data);
        setProdotti(response.data)
      }).catch(error => {
        console.error(error)
      });
  }, [handleMode])



  function handleMode() {
    setBudgetMode(valore => !valore)
    console.log(budgetMode);

    if (budgetMode === true) {
      setProdotti(response.data.price < 30)
    } else { setProdotti(response.data) }
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
