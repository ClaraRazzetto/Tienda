import './CustomizationNav.css'
import DropDown from '../DropDown/DropDown'

const CustomizationNav = () => {
  return (
    <nav className='nav-container'>
  
        <h1 className='nav-item'> Switch mode </h1>
        
        <DropDown className='nav-item'
                  label={"Filtrar por"}
        />
        <DropDown className='nav-item'
                  label={"Ordenar por"}
        />
        <h1 className='nav-item'>Visualización</h1>
  

    </nav>
  )
}

export default CustomizationNav