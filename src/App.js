
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Add from './Components/Add';
import Details from './Components/Details';
import Edit from './Components/Edit'; 
import Categories from './Components/Categories';
import Viewcat from './Components/Viewcat';
import EditCat from './Components/EditCat'
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0 m-0 bg-light Sidebar">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0 m-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />}></Route>
              <Route path="/About" element={<About />} />
              <Route path="/products/add" element={<Add />} />
              <Route path="/products/:productId" element={<Details />} />
              <Route path="/products/edit/:productId" element={<Edit />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:CatId" element={<Viewcat />} />
              <Route path="/categories/edit/:CatId" element={ <EditCat />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
