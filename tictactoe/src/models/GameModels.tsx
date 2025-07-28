export type BoardPosition = {
    rowIndex: number;
    colIndex: number;
}

export type Turn = {
    player: string,
    boardPosition: BoardPosition
}

export type PlayerNames = {
    [symbol: string] : string;
}