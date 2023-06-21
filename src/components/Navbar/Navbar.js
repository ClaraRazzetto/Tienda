import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


    return (
        <nav className="nav-container">

            <h1 className='nav-item'> Switch mode </h1>


            {/* link a Home */}
            <NavLink to="/" className="nav-link">
                Home
            </NavLink>

            {/* <NavLink to="/Home">Home</NavLink> */}


            <div className='profile-container'>
                {/* Link a Login */}
                {/* <Login/> */}
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