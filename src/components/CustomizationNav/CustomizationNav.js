import './CustomizationNav.css'
import DropDown from '../DropDown/DropDown'

const CustomizationNav = ({onFilterChange, filterOption}) => {

  return (
    <nav className='nav-container'>

      {/* Solo debe aparecer para HomePage y LandingPage */}
      {/* DropDown: Lstado tipos de productos */}
      <DropDown className='nav-item'
        onFilterChange={onFilterChange}
        filterOption={filterOption}
      />
 
      <h1 className='nav-item'>Visualización</h1>

    </nav>
  )
}

export default CustomizationNav