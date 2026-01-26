# terminal
dministratorslmn@zbook:~/proj/personal/pers-learn/src$ ls
App.css  App.jsx  assets  components  data  index.css  main.jsx
dministratorslmn@zbook:~/proj/personal/pers-learn/src$ cd data
dministratorslmn@zbook:~/proj/personal/pers-learn/src/data$ ls
gamedata.js
dministratorslmn@zbook:~/proj/personal/pers-learn/src/data$ cd ..
dministratorslmn@zbook:~/proj/personal/pers-learn/src$ cd components
dministratorslmn@zbook:~/proj/personal/pers-learn/src/components$ ls
death.jsx  level1.jsx  level2.jsx  welcome.jsx

# app.jsx
function App() {
  const [screen, setScreen] = useState(gamemode[0]);
  return (
    <div>
      {screen === gamemode[0] &&(<welcome advance={() => setScreen(gamemode[1])} />)}
        {screen === gamemode[1] &&(<level1 advance={() => setScreen(gamemode[2])} />)}
          {screen === gamemode[2] &&(<level2 advance={() => setScreen(gamemode[0])} />)}
            {screen === gamemode[3] &&
            (<div
            ><h1>Game Over</h1>
            <button onClick={() => setScreen(gamemode[0])}>Restart Game</button>
            </div>)}
    </div>
  );
}
export default App;

# welcome.jsx
import React from "react";
import { gamemode } from "../data/gamedata";

function welcome() {

  return (
    <div style={{ padding: "20px" }}>
      {gameState === gamemode[0] && (
        <>
          <h1>Welcome to the Game</h1>
          <button onClick={() => {advance}}>
           level 1
          </button>
        </>
      )}
    </div>
  )
}

export default welcome

# level1.jsx
import { useState } from "react";
import {level1data, ansresult, questions } from "../data/gamedata";


function level1() {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
    return (
      <div>
        <h2>{questions.level1}</h2>
        <button class="incorrect" onClick={() => {setAnswerState(ansresult[3]);result(answerstate)}}>{level1data.answer1}</button>
        <button class="correct" onClick={() => {setAnswerState(ansresult[1]);result(answerstate)}}>{level1data.answer2}</button>
        <button class="incorrect" onClick={() => {setAnswerState(ansresult[3]);result(answerstate)}}>{level1data.answer3}</button>
        <button class="correct" onClick={() => {setAnswerState(ansresult[2]);result(answerstate)}}>{level1data.answer4}</button>
      </div>
    );
}

function result(answerstate) {
  if (answerstate === ansresult[1]) {
    return (
    <div>\
      <h3>{level1data.outcome1}</h3>
      <button onClick={() => {advance}}>Proceed to Level 2</button>
      </div>);
  } else if (answerstate === ansresult[2]) {
    return (
    <div>
      <h3>{level1data.outcome2}</h3>
      <button onClick={() => {advance}}>Proceed to Level 2</button>
      </div>);
  } else {
    return (<div>
      <h3>{level1data.outcome3}</h3>
      <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>);
  }
}
export default level1;

# level2.jsx
import { useState } from "react";
import {level2data, ansresult, questions } from "../data/gamedata";


function level2() {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
    return (
      <div>
        <h2>{questions.level2}</h2>
        <button class="incorrect" onClick={() => {setAnswerState(ansresult[1]);result(answerstate)}}>{level2data.answer1}</button>
        <button class="correct" onClick={() => {setAnswerState(ansresult[2]);result(answerstate)}}>{level2data.answer2}</button>
        <button class="incorrect" onClick={() => {setAnswerState(ansresult[2]);result(answerstate)}}>{level2data.answer3}</button>
        <button class="correct" onClick={() => {setAnswerState(ansresult[3]);result(answerstate)}}>{level2data.answer4}</button>
      </div>
    );
}

function result(answerstate) {
  if (answerstate === ansresult[1]) {
    return (
    <div>\
      <h3>{level2data.outcome1}</h3>
      <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>);
  } else if (answerstate === ansresult[2]) {
    return (
    <div>
      <h3>{level2data.outcome2}</h3>
      <button onClick={() => {advance}}>Proceed to Level start</button>
      </div>);
  } else {
    return (<div>
      <h3>{level2data.outcome3}</h3>
      <button onClick={() => window.location.reload()}>Restart Game</button>
      </div>);
  }
}
export default level2;

# gamedata.js
const gamemode=["start","level1","level2","gameover"];
const ansresult=[null,"correct","closecall","died"];

const level1data={
    answer1:"leave and run quickly",
    answer2:"politley obey",
    answer3:"attack the bear",
    answer4:"resist then submit",
    outcome1:"You chose to listen to him. You survived!",
    outcome3:"He got really angry and tore you apart. Game over!",
    outcome2:"you noticed he wasnt joking and complied. You survived!",
};

const level2data={
    answer1:"accept his smelly soup and eat",
    answer2:"politely refuse you had eaten before",
    answer3:"strongly decline, you're allergic!",
    answer4:"try and make a run for it",
    outcome1:"The soup was rotten. Game over!",
    outcome2:"He respected your decision. You survived!",
    outcome3:"Got your face ripped off! Game over!",
};

const questions={
    setting:"Lost in a forest, you see an old cabin, desperate for help you knock on the door.",
    level1:"A real bear opens the door, He invites you in for some honey. What do you do?",
    level2:"The bear seems friendly and offers you some soup. What do you do?",
}
export {gamemode,level1data,level2data,questions,ansresult};



## fuck bro I genuinley suck at ts bc how tf is this 2 hrs of work and so trashy
anywaaaaaaaays I give up im going to fucking bed fuck ts