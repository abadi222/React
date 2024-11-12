function App() {
  const player = [{ name: "Adi", currentScore: 0 }];
  const tragetScore = 50;
  let totalScore = 0;
  let currentScore = player.currentScore;

  function throwDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    const diceRoll1 = Math.floor(Math.random() * 6) + 1;
    currentScore = diceRoll + diceRoll1;
    totalScore += currentScore;
    console.log(totalScore);

    if (totalScore >= tragetScore) {
      totalScore = 0;
      console.log("Reastart game");
    }
    return [diceRoll, diceRoll1];
  }

  const click = () => {
    console.log(throwDice());
  };

  return <button onClick={click}> click here</button>;
}
export default App;
