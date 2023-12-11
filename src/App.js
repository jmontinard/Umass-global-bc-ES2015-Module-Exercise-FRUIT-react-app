// import './App.css';
import { fruits } from './foods';
import { choice, remove } from './helpers';

function App() {
  if (fruits.length === 0) return "I’m sorry, we’re all out";

  let randomFruit = choice(fruits);

  console.log(`I’d like one ${randomFruit}, please.`);
  console.log(`Here you go: ${randomFruit}`);
  console.log("Delicious! May I have another?");

  remove(fruits, randomFruit); 

  const fruitsLeft = fruits.length;
  console.log(`I’m sorry, we’re all out. We have ${fruitsLeft} left.`);

  return (
    <div className="App">
      {randomFruit}
    </div>
  );
}

export default App;
