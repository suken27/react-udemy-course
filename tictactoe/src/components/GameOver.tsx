export default function GameOver({winner, onRematch}: 
    {winner: String | undefined, onRematch: () => void}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>Draw!</p>}
            <p><button onClick={onRematch}>Rematch!</button></p>
        </div>
    );
}