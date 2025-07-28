import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }: 
    { name: string; symbol: string, isActive: boolean, onChangeName: (symbol: string, newName: string) => void }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleButtonClick() {
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
        return setIsEditing(prevState => !prevState);
    }

    let nameContent;
    let buttonContent;
    if (isEditing) {
        nameContent = (
            <input required
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
            />
        );
        buttonContent = (
            <button onClick={handleButtonClick}>Save</button>
        );
    } else {
        nameContent = <span className="player-name">{playerName}</span>;
        buttonContent = (
            <button onClick={handleButtonClick}>Edit</button>
        );
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {nameContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            {buttonContent}
        </li>
    );
}