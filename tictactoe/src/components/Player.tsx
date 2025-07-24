import { useState } from 'react';

export default function Player({ name, symbol }: { name: string; symbol: string }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

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
            <button onClick={() => setIsEditing(false)}>Save</button>
        );
    } else {
        nameContent = <span className="player-name">{playerName}</span>;
        buttonContent = (
            <button onClick={() => setIsEditing(true)}>Edit</button>
        );
    }

    return (
        <li>
            <span className="player">
                {nameContent}
                <span className="player-symbol">{symbol}</span>
            </span>
            {buttonContent}
        </li>
    );
}