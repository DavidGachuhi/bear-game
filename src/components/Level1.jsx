// Level1
import { level1data,questions,ansresult } from "../data/gamedata";
import { useState } from "react";
function Level1({ advance, gameHealth }) {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
  
  const handleAnswerClick = (result) => {
    setAnswerState(result);
    
    // Apply heart effects HERE
    if (result === ansresult[1]) {
      // Correct - do nothing
    } 
    else if (result === ansresult[2]) {
      // Close call - lose 1 heart
      gameHealth.loseOneHeart();
    }
    else if (result === ansresult[3]) {
      // Wrong - lose all hearts
      gameHealth.loseAllHearts();
    }
  };

  return (
    <div>
      <h2>{questions.level1}</h2>
      {/*Ive added those tags so you guys understand the logic better,
      close calls mean they lose a heart wrong answers mean they lose all the hearts 
      while correct ones allow procedure*/}
      <button onClick={() => handleAnswerClick(ansresult[3])}>
        {level1data.answer1} (Wrong)
      </button>
      <button onClick={() => handleAnswerClick(ansresult[1])}>
        {level1data.answer2} (Correct)
      </button>
      <button onClick={() => handleAnswerClick(ansresult[3])}>
        {level1data.answer3} (Wrong)
      </button>
      <button onClick={() => handleAnswerClick(ansresult[2])}>
        {level1data.answer4} (Close Call)
      </button>
      
      <Result answerstate={answerstate} advance={advance} />
    </div>
  );
}

function Result({ answerstate, advance }) {
  // NO heart functions here!
  if (answerstate === ansresult[1]) {
    return (
      <div>
        <h3>{level1data.outcome1}</h3>
        <button onClick={advance}>Proceed to Level 2</button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div>
        <h3>{level1data.outcome2}</h3>
        <p>⚠️ Lost 1 heart!</p>
        <button onClick={advance}>Proceed to Level 2</button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div>
        <h3>{level1data.outcome3}</h3>
        <p>💀 Lost all hearts!</p>
        {/* Game over will show automatically from App.jsx */}
      </div>
    );
  } else {
    return null;
  }
}
export default Level1;