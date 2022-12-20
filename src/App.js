import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './components/winner';
function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setisNext] = useState(false);


    const winner = calculateWinner(board);
    // console.log(winner);

    const msg = winner
    ?`winner is ${winner}`
    :`Next Player is ${isNext?'X':'O'}`;

    const handleSquareClick = (position) => {   
    if(board[position] || winner){
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

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{ msg }</h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
}

export default App;
