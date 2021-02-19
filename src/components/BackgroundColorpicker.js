import React from 'react'
import ColorSquare from './ColorSquare'

function BackgroundColorpicker() {

   let colors = [{backgroundColor: "pink"},{backgroundColor: "blue"},{backgroundColor: "green"}].map(color => { return <ColorSquare color={color.backgroundColor}/>})

   return (
      <div className="colors">
         {colors}
      </div>
   )
}

export default BackgroundColorpicker
