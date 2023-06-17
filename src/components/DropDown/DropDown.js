import './DropDown.css'

const DropDown = ({link1, link2, link3}) => {
  return (
      <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
              <a>{link1}</a>
              <a>{link2}</a>
              <a>{link3}</a>
          </div>
      </div>
  )
}

export default DropDown