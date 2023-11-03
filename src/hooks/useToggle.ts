import React from 'react'

const useToggle = () => {
  const [dropdown, setDropdown] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

    const dropdownHandler = (event: MouseEvent) => {
      if (dropdown && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', dropdownHandler)

  return {
    dropdown,
    setDropdown, 
    dropdownRef
  }
}

export default useToggle