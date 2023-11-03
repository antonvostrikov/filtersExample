import React, { createContext } from 'react'
import useToggle from '../../hooks/useToggle'


interface DropdownContextType {
  dropdown: boolean
  setDropdown: (dropdown: boolean) => void
}

export const DropdownContext = createContext<DropdownContextType>({
  dropdown: false, 
  setDropdown: () => {}
})

const Dropdown:React.FC<any> = ({ children }) => {
  const { dropdown, setDropdown, dropdownRef } = useToggle()

  return (
    <DropdownContext.Provider value={{ dropdown, setDropdown }}>
      <div className="dropdown" ref={dropdownRef}>
        { children }
       </div>
    </DropdownContext.Provider> 
  )
}

export default Dropdown