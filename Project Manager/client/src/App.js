import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import OneProduct from './components/OneProduct';
import UpdateProductForm from './components/UpdateProductForm';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<>
          <Form />
          <ProductList />
          </>}>
          
          </Route>
          <Route path='/oneproduct/:id' element={<OneProduct />} />
          <Route path='/editproduct/:id' element={<UpdateProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
