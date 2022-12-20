import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './components/winner';
import History from './components/History';
function App() {

  const [history, setHistory] = useState([
    {board: Array(9).fill(null),isNext:true}
  ]);

  const [currentMove, setCurrentMove] = useState(0)
  const current  = history[currentMove];
    // const [isNext, setisNext] = useState(false);
  // console.log(history);

    const winner = calculateWinner(current.board);
    // console.log(winner);

    const msg = winner
    ?`winner is ${winner}`
    :`Next Player is ${current.isNext?'X':'O'}`;

    const handleSquareClick = (position) => {   
    if(current.board[position] || winner){
        return;
    }
    
    

    setHistory(prev =>{

      const last = prev[prev.length-1];
      const newBoard = last.board.map((square, pos) =>{
            if(pos === position){
                return last.isNext ? 'X' : 'O';
            }
            return square;
        })
     return prev.concat({board: newBoard,isNext: !last.isNext});
    });
    
    setCurrentMove(prev => prev + 1);
    };


     const moveTo = (move)=>{
      setCurrentMove(move);
     }
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{ msg }</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <History history = {history} moveTo ={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
