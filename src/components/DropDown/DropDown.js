import './DropDown.css'

const DropDown = ({label, options, onFilterChange, filterOption}) => {

    const changeSelectHandler = (event) => {
        onFilterChange(event.target.value);
    }

  return (
      <div className="dropdown">
          <select onChange={changeSelectHandler} value={filterOption}>
            <option value="" >{label}</option>
              {/* Le falta la key */}
              {options.map((option) => <option value={option.value}>{option.category}</option>)}
          </select>
      </div>
  )
}

export default DropDown