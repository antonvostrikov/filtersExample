import React from 'react'
import { DropdownContext } from './Dropdown'

const DropdownButton:React.FC<any> = ({ children }) => {
  const { dropdown, setDropdown } = React.useContext(DropdownContext)

  const dropdownHandler = () => {
    setDropdown(!dropdown)
  }

  return (
    <div className="dropdown-button" onClick={() => dropdownHandler()}>
      <span>{ children }</span>
    </div>
  )
}

export default DropdownButton