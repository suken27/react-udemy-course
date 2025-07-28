import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player"

import { useState } from "react";
import { BoardPosition, PlayerNames, Turn } from "./models/GameModels";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
	X : 'Player 1',
	O : 'Player 2'
} as PlayerNames;

const ÍNITIAL_GAME_BOARD = [
	[null, null, null], 
	[null, null, null], 
	[null, null, null]
] as (string | null)[][];

function calculateWinner(gameBoard: (string | null)[][], playerNames: PlayerNames): string | undefined {
	let winner: string | undefined;
	for(const combination of WINNING_COMBINATIONS) {
		const firstPosition = gameBoard[combination[0].row][combination[0].column];
		const secondPosition = gameBoard[combination[1].row][combination[1].column];
		const thirdPosition = gameBoard[combination[2].row][combination[2].column];
		if(firstPosition && firstPosition === secondPosition && firstPosition === thirdPosition) {
			winner = playerNames[firstPosition];
		}
	}
	return winner;
}

function calculateBoard(turns: Turn[]): (string | null)[][] {
	const gameBoard = [...ÍNITIAL_GAME_BOARD.map((row) => [...row])];
	for(const turn of turns) {
		gameBoard[turn.boardPosition.rowIndex][turn.boardPosition.colIndex] = turn.player;
	}
	return gameBoard;
}

function App() {

	const [playerNames, setPlayerNames] = useState(PLAYERS);
	const [gameTurns, setGameTurns] = useState([] as Turn[]);

	const gameBoard = calculateBoard(gameTurns);
	const winner = calculateWinner(gameBoard, playerNames);
	const hasDraw = gameTurns.length === 9 && !winner;

	function handleCellSelect(boardPosition: BoardPosition) {
		setGameTurns((prevGameTurns) => {
			let player = 'X';
			if (prevGameTurns[0]?.player === 'X') {
				player = 'O';
			}
			return [{player, boardPosition} as Turn, ...prevGameTurns];
		});
	}

	function handleRematch() {
		setGameTurns([]);
	}

	function handleChangeName(symbol: string, newName: string) {
		setPlayerNames(prevPlayerNames => {
			return {
				...prevPlayerNames,
				[symbol]: newName
			}
		})
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player name={PLAYERS.X} symbol="X" onChangeName={handleChangeName} isActive={!gameTurns[0] || gameTurns[0].player==='O'}/>
					<Player name={PLAYERS.O} symbol="O" onChangeName={handleChangeName} isActive={gameTurns[0]?.player ==='X'}/>
				</ol>
				{(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
				<GameBoard onCellSelect={handleCellSelect} board={gameBoard}/>
			</div>
			<Log turns={gameTurns}/>
		</main>
	);
}

export default App