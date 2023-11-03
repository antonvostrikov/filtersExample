import React, { ChangeEvent } from 'react'

interface DropdownItem {
  min: number
  max: number
  changeMin: (min: number) => void
  changeMax: (max: number) => void  
}

const DropdownItemPrice:React.FC<DropdownItem> = ({ min, max, changeMin, changeMax}) => {
  const inputMinHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.target.value)

    changeMin(numberValue)
    console.log(min)
  }

  const inputMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.target.value)

    changeMax(numberValue)
    console.log(max)
  }

  return (
    <div className="dropdown-content_price">
      <input type="text" placeholder="0" onChange={(e) => inputMinHandler(e)}/>
      <input type="text" placeholder="100000" onChange={(e) => inputMaxHandler(e)} />
    </div>
  )
}

export default DropdownItemPrice