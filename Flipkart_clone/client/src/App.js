import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from "@mui/material";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import DetailView from "./components/details/DetailView";
import Cart from "./components/Cart/Cart";
import Category from "./components/category/Category";
import Product from "./components/category/Product";
import MobileView from "./components/details/MobileView";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/category/mobileproduct/:id' element={<MobileView/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
