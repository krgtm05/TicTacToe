import React from 'react'

const StatusMessage = ({winner, current}) => {
    // const msg = winner
    // ?`winner is ${winner}`
    // :`Next Player is ${current.isNext?'X':'O'}`;
  const noMovesLeft = current.board.every(el => el !== null)

  return (
    <h2>
        {winner && `Winner is ${winner}`}
        {!winner && !noMovesLeft && `Next Player is ${current.isNext?'X':'O'}`} 
        {!winner && noMovesLeft && `It's a Draw`}
    </h2>
  )
}

export default StatusMessage