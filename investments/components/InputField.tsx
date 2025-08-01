import { ChangeEvent } from "react";

export default function InputField({ label, value, onChange }: {label: string, value: number, onChange: (newValue: number) => void}) {

    function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
        onChange(parseFloat(e.target.value));
    }

    return (
        <p>
            <label>{label}</label>
            <input type="number" onChange={handleValueChange} value={value} required />
        </p>
    );
}