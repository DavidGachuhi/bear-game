import { useState } from "react";
import { level1data, ansresult, questions } from "../data/gamedata";

function Level1({ advance,Health }) {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
  
  const handleAnswerClick = (result) => {
    setAnswerState(result);
  };

  return (
    <div>
      <h2>{questions.level1}</h2>
      <button 
        onClick={() => handleAnswerClick(ansresult[3])}
      >
        {level1data.answer1}
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[1])}
      >
        {level1data.answer2}
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[3])}
      >
        {level1data.answer3}
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[2])}
      >
        {level1data.answer4}
      </button>
      
      {/* Show result based on answer */}
      <Result answerstate={answerstate} advance={advance} />
    </div>
  );
}

function Result({ answerstate, advance,Health }) {
  if (answerstate === ansresult[1]) {
    return (
      <div>
        <h3>{level1data.outcome1}</h3>
        <button onClick={advance}>Proceed to Level 2</button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    {Health.loseOneHeart}
    return (
      <div>
        <h3>{level1data.outcome2}</h3>
        <button onClick={advance}>Proceed to Level 2</button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    {Health.loseAllHearts}
    return (
      <div>
        <h3>{level1data.outcome3}</h3>
        <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>
    );
  } else {
    return null;
  }
}

export default Level1;