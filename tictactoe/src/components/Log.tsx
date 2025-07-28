import { Turn } from "../models/GameModels";

export default function Log({turns} : {turns: Turn[]}) {
    return (
        <ol id="log">
            {turns.map(turn => <li key={`${turn.boardPosition.rowIndex}
                ${turn.boardPosition.colIndex}`}>{turn.player + " "}
                selected {turn.boardPosition.rowIndex}, {turn.boardPosition.colIndex}</li>)}
        </ol>
    );
}