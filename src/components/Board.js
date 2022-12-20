import React from 'react'
import Square from './Square'
import { useState } from 'react'

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setisNext] = useState(false);
    const handleSquareClick = (position) => {
       
    if(board[position]){
        return;
    }


    setBoard(prev =>{
        return prev.map((square, pos) =>{
            if(pos === position){
                return isNext?'X':'O';
            }
            return square;
        })
    })
    
    setisNext(prev => !prev);

    };


    const renderSquare = (position) => {
        return <Square value={board[position]} onClick={() => handleSquareClick(position)} />
    }
    return (
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board