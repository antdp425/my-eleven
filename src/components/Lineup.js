import React from 'react'
import Player from './Player'

function Lineup() {
   return (
      <div className="lineup">
         <Player goalie={true}defaultPosition={{x:400,y:50}}/>
         <Player defaultPosition={{x:175,y:150}}/>
         <Player defaultPosition={{x:325,y:150}}/>
         <Player defaultPosition={{x:475,y:150}}/>
         <Player defaultPosition={{x:625,y:150}}/>
         <Player defaultPosition={{x:250,y:250}}/>
         <Player defaultPosition={{x:400,y:250}}/>
         <Player defaultPosition={{x:550,y:250}}/>
         <Player defaultPosition={{x:250,y:350}}/>
         <Player defaultPosition={{x:400,y:350}}/>
         <Player defaultPosition={{x:550,y:350}}/>
      </div>
   )
}
export default Lineup