import React from "react";

type Filter = {
  id: number
  country?: string
  brand?: string
}

type DropdownItem = {
  filterID: number
  filter: string
  filtersItems: Filter[]
  filtersItemsHandler: (filtersItems: any) => void
}

const DropdownItem:React.FC<DropdownItem> = ({ filterID, filter, filtersItemsHandler, filtersItems }) => {
  const [checked, setChecked] = React.useState(false)

  const inputHandler = () => { 
    if (!checked) {
      filtersItemsHandler((prev: Filter[]) => [...prev, { id: filterID, filter: filter }])
      console.log(1)
    } else if (filtersItems) {
      filtersItemsHandler((filtersItems: Filter[]) => filtersItems.filter((filter: Filter) => filter.id !== filterID))
      console.log(2)
    }
    setChecked(!checked)
  }

  return (
    <li className="dropdown-item"><input type="checkbox" onChange={() => inputHandler()} checked={checked}/>{filter}</li>
  )
}

export default DropdownItem