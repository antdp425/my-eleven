import React, { useEffect } from 'react'
import BackgroundColorpicker from './BackgroundColorpicker'

function LineupStyle({updateLineupStyle}) {
   return (
      <div className="lineupStyle">
      <div>
         <div>Background Color</div>
         <BackgroundColorpicker />
      </div>
      </div>
   )
}

export default LineupStyle
