function Welcome(props) {
  return (
    <div>
      <p>BEAR GAME</p>
      <button onClick={props.advance}>startgame</button>
    </div>
  );
}

export default Welcome;