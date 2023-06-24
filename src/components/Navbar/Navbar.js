import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


    return (
        <nav className="nav-container">

            <div className='profile-container'>
                <h1 className='nav-item'> Switch mode </h1>
                <NavLink to="/AddProducts" className="nav-link">Agregar Producto</NavLink>
            </div>

            {/* link a Home */}
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            {/* <NavLink to="/Home">Home</NavLink> */}


            <div className='profile-container'>
                {/* Link a Login */}
                {/* <Login/> */}
                <NavLink to="/Singup" className='nav-link' >
                    Sing up
                </NavLink>

                <NavLink to="/Login" className='nav-link' >
                    Login
                </NavLink>

                {/* Link a carrito */}
                {/* <ShoppingCart/> */}
                <NavLink to="/Shoppingcart" className='nav-link' >
                    ShoppingCart
                </NavLink>
            </div>



        </nav>
    )
}

export default Navbar