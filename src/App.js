import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./Pages/LoginPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";

function App() {
  return (
    <>
      <Router>

        <Navbar />
      
        <Routes>
          {/* Pagina inicial sin inicio de sesión */}
          <Route index element={<LandingPage />} />
          {/* Pagina inicial con inicio de sesión */}
          <Route path="/Home" element={<HomePage />} />
          {/* Si el usuario pone una ruta que no existe entra a la pag NotFoundPage y muestra un error */}
          <Route path="*" element={<NotFoundPage />} />
          {/* Pagina de Login */}
          <Route path="/Login" element={<LoginPage/>} />
          {/* Pagina de Carrito */}
          <Route path="/ShoppingCart" element={<ShoppingCartPage/>} />
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
