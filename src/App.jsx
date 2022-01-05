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

  const checkForColumeOfThree = () => {
    for(let i; i < 47; i++) {
      const columeOfThree
    }
  }


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
          {
            currentColorArrangement.map((candyColor, index) => { 
              return <img key={index} style={{backgroundColor: candyColor}}/>
            })
          }
      </div>
    </div>
  );
}

export default App;
