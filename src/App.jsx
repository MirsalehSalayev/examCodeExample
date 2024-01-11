
import './App.css';

import Product from './components/Products';
// import { BasketProvider } from './components/context';
import Main from './components/MainLayouts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from './components/basket/basket';
import Wish from './components/wish/wish';
function App() {
  return (

    < >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path='/product' element={<Product />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/wish' element={<Wish />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
