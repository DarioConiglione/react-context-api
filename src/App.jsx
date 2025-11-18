import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import ProdottoSingolo from './pages/ProdottoSingolo';
import DefaultLayout from './pages/DefaultLayout';
import countContext from './assets/contexts/CountContext';

function App() {


  return (
    <>
      <countContext.Provider value={{}}>

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

      </countContext.Provider>
    </>
  )
}

export default App
