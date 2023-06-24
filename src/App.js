import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage";
import SingUpPage from "./Pages/SingUpPage"
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import AddProduct from "./components/AddProductForm/AddProductForm";


function App() {

  return (
    <>
      <Router>

        <Navbar />
      
        <Routes>
          {/* Pagina inicial */}
          <Route path="/" Component={HomePage} />
          {/* Agregar producto */}
          <Route path="/AddProducts" Component={AddProduct} />
          {/* Si el usuario pone una ruta que no existe entra a la pag NotFoundPage y muestra un error */}
          <Route path="*" Component={NotFoundPage}/>
          {/* Pagina de Sing up (registrarse) */}
          <Route path="SingUp" Component={SingUpPage}/>
          {/* Pagina de Login */}
          <Route path="/Login" Component={LoginPage} />
          {/* Pagina de Carrito */}
          <Route path="/ShoppingCart" Component={ShoppingCartPage} />
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
