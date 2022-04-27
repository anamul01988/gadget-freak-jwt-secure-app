import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import UploadProducts from './components/UploadProducts/UploadProducts';
import OrderList from './components/OrderList/OrderList';

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
           <Route path="/home" element={<Home/>}></Route>
        </Routes>
        <Routes>
           <Route path="/products" element={<Products/>}></Route>
        </Routes>
        <Routes>
           <Route path="/uploadPd" element={<UploadProducts/>}></Route>
        </Routes>
        <Routes>
           <Route path="/orders" element={<OrderList/>}></Route>
        </Routes>
        {/* <Routes>
           <Route path="/login" element={<Login/>}></Route>
        </Routes> */}
    </div>
  );
}

export default App;
