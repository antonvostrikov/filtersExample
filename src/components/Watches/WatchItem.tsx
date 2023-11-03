import React from 'react'

import { Watch } from '../../types/typeWatch'

const WatchItem:React.FC<Watch> = ({ sex, brand, name, price, country }) => {
  return (
    <div className="watch-item">
      <ul>
        <li>{sex}</li>
        <li>{brand}</li>
        <li>{name}</li>
        <li>{price} Р</li>
        <li>{country}</li>
      </ul>
    </div>
  )
}

export default WatchItem