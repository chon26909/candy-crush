import './App.css';

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

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const rendomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
      randomColorArrangement.push(rendomColor);
    }

    console.log('random ', randomColorArrangement);
  } 

  createBoard();

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
