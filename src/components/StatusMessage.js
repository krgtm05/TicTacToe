import React from 'react'

const StatusMessage = ({winner, current}) => {
    // const msg = winner
    // ?`winner is ${winner}`
    // :`Next Player is ${current.isNext?'X':'O'}`;
  const noMovesLeft = current.board.every(el => el !== null)

  return (
    <div className='status-message'>
        {winner && (
          <>
          Winner is {' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
          </>
        ) }
        {!winner && !noMovesLeft && (
          <>
          Next Player is{' '}
          <span className={current.isNext ? 'text-green' : 'text-orange'} > {current.isNext ? 'X' : 'O'}{' '}</span>
          </>
        )} 
        {!winner && noMovesLeft && (
          <>
          <span className='text-green'>X</span> and{' '}
          <span className='text-orange'>O</span> Tied

          </>
        )}
    </div>
  )
}

export default StatusMessage