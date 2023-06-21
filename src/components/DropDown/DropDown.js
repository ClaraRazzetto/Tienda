import './DropDown.css'

const DropDown = ({label,link1, link2, link3}) => {
  return (
      <div className="dropdown">
          <button className="dropbtn">{label}</button>
          <div className="dropdown-content">
              <a>{link1}</a>
              <a>{link2}</a>
              <a>{link3}</a>
          </div>
      </div>
  )
}

export default DropDown