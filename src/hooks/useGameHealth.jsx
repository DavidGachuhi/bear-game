import { useState } from 'react';

function useGameHealth() {
  // Just 3 hearts and a score
  const [hearts, setHearts] = useState(3);
  
  // heart functions
  const loseOneHeart = () => {
    if (hearts > 0) {
      setHearts(hearts - 1);
    }
  };
  
  const loseAllHearts = () => {
    setHearts(0);
  };
  
  
  const resetGame = () => {
    setHearts(3);
  };
  
  // Return what we need
  return {
    hearts,
    loseOneHeart,
    loseAllHearts,
    resetGame,
    isGameOver: hearts === 0  // true if no hearts left
  };
}

export default useGameHealth;