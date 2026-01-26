const gamemode=["start","level1","level2","gameover"];
const ansresult=[null,"correct","closecall","died"];

const level1data={
    answer1:"leave and run quickly",
    answer2:"politley obey",
    answer3:"attack the bear",
    answer4:"try and resist",
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