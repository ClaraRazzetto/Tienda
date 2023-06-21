import './CustomizationNav.css'
import DropDown from '../DropDown/DropDown'
import { useState } from 'react';

const CustomizationNav = ({onFilterChange, filterOption}) => {

  return (
    <nav className='nav-container'>

      {/* Solo debe aparecer para HomePage y LandingPage */}
      {/* DropDown: Lstado tipos de productos */}
      <DropDown className='nav-link'
        label={"Productos"}
        options={[{value:'Remera', category: 'Remeras'}, {value:'Pantalon', category: 'Pantalones'}, {value:'Abrigo', category: 'Abrigos'}, {value:'Accesorio', category: 'Accesorios'}]}
        onFilterChange={onFilterChange}
        filterOption={filterOption}
      />

      {/* <DropDown className='nav-item'
        label={"Filtrar por"}
        options={['colore', 'talle']}
        onFilterChange={onFilterChange}
        filterOption={filterOption}
      />
      <DropDown className='nav-item'
        label={"Ordenar por"}
        options={['precio más alto', 'precio más bajo', 'A-Z']}
        onFilterChange={onFilterChange}
        filterOption={filterOption}
      /> */}

      <h1 className='nav-item'>Visualización</h1>


    </nav>
  )
}

export default CustomizationNav