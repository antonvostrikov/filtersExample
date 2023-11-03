import React from 'react'

const DropdownList:React.FC<any> = ({ children }) => {
  return (
    <ul className="dropdown-list">
      { children }
    </ul>
  )
}

export default DropdownList