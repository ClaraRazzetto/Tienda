import './DropDown.css'

const DropDown = ({ onFilterChange, filterOption }) => {

  const changeSelectHandler = (event) => {
    onFilterChange(event.target.value);
  }

  return (
    <div className="dropdown">
      <select onChange={changeSelectHandler} value={filterOption}>
        <option value="" >Productos</option>
        <option value="Remera" >Remeras</option>
        <option value="Pantalon" >Pantalones</option>
        <option value="Campera" >Camperas</option>
        <option value="Accesorio" >Accesorios</option>
      </select>
    </div>
  )
}

export default DropDown