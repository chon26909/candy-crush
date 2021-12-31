import './App.css';
import { useState, useEffect } from 'react'

const width = 8;
const candyColors = [
  'red',
  'green',
  'orange',
  'purple',
  'blue',
  'yellow'
]

const App = () => {

  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const rendomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(rendomColor);
    }

    console.log('random ', randomColorArrangement);
    setCurrentColorArrangement(randomColorArrangement);
  } 


  useEffect(() => {
    createBoard();
  },[])
  

  return (
    <div className="App">
      <div className='game'>
          
      </div>
    </div>
  );
}

export default App;
