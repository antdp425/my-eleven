import React from 'react'

function PlayerName({player}) {
   return (
      <span className="playerName">
         {player.name}
      </span>
   )
}

export default PlayerName
