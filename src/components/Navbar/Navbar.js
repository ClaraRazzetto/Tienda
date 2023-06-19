import { NavLink } from 'react-router-dom';
import DropDown from '../DropDown/DropDown';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav-container">

            {/* Solo debe aparecer para HomePage y LandingPage */}
            {/* DropDown: Lstado tipos de productos */}
            <DropDown className='nav-link'
                link1={"Remeras"}
                link2={"Pantalones"}
                link3={"Camperas"}
            />


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