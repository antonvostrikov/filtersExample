import React from 'react'

import { Watches } from '../../types/typeWatch'
import WatchItem from './WatchItem'

const WatchList:React.FC<Watches> = ({ watches }) => {
  return (
    <div className="watch-list">
      { watches.map(watch => <WatchItem {...watch}/>) }
    </div>
  )
}

export default WatchList