import { BoardPosition, Turn } from "../models/GameModels";

export default function GameBoard( {onCellSelect, board} : 
    {onCellSelect : (boardPosition : BoardPosition) => void, board: (String | null)[][]} ) {

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex} className="game-row">
                    <ol className="game-col">
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onCellSelect({rowIndex, colIndex})} disabled={cell !== null}>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}