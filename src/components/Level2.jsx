import { useState } from "react";
import { level2data, ansresult, questions } from "../data/gamedata";

function Level2({ advance }) {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
  
  const handleAnswerClick = (result) => {
    setAnswerState(result);
  };

  return (
    <div>
      <h2>{questions.level2}</h2>
      <button 
        onClick={() => handleAnswerClick(ansresult[1])}
      >
        {level2data.answer1}
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[2])}
      >
        {level2data.answer2}
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[2])}
      >
        {level2data.answer3}
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[3])}
      >
        {level2data.answer4}
      </button>
      
      <Result answerstate={answerstate} advance={advance} />
    </div>
  );
}

function Result({ answerstate, advance }) {
  if (answerstate === ansresult[1]) {
    return (
      <div>
        <h3>{level2data.outcome1}</h3>
        <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div>
        <h3>{level2data.outcome2}</h3>
        <button onClick={advance}>Proceed to Level 3</button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div>
        <h3>{level2data.outcome3}</h3>
        <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>
    );
  } else {
    return null;
  }
}

export default Level2;