import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './components/winner';
import History from './components/History';
import StatusMessage from './components/StatusMessage';

const NEW_GAME = [
    { board: Array(9).fill(null),isNext:true },
];

function App() {

  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0)
  const current  = history[currentMove];
    // const [isNext, setisNext] = useState(false);
  // console.log(history);

    const {winner,winningSquare} = calculateWinner(current.board);
    // console.log(winner);

  

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

     const onNewGame = ()=>{
      setHistory(NEW_GAME);
      setCurrentMove(0);
     }
  return (
    <div className="app">
      <h1>Tic <span className='text-green'>Tac</span> Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare = {winningSquare}/>
      <button type='button' onClick={onNewGame} className={`btn-reset ${winner ?'active': ' '}`}>Start New Game</button>
      <h2 style={{fontWeight:'nprmal'}}>Current Game History</h2>
      <History history = {history} moveTo ={moveTo} currentMove={currentMove} />
      <div className='bg-balls'/>
    </div>
  );
}

export default App;
