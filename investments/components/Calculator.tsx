import { useState } from "react";
import InputField from "./InputField";
import Results from "./Results";

export type Settings = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export default function Calculator() {

    const [settings, setSettings] = useState({ initialInvestment: 15000, annualInvestment: 1200, expectedReturn: 6, duration: 10 } as Settings);

    const inputIsValid = settings.duration > 0;

    function handleChange(inputIdentifier: string, newValue: number) {
        setSettings((oldValue) => {
            return {
                ...oldValue,
                [inputIdentifier]: newValue
            }
        });
    }

    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <InputField label="Initial investment" value={settings.initialInvestment} onChange={(newValue: number) => handleChange('initialInvestment', newValue)} />
                    <InputField label="Annual investment" value={settings.annualInvestment} onChange={(newValue: number) => handleChange('annualInvestment', newValue)} />
                </div>
                <div className="input-group">
                    <InputField label="Expected return" value={settings.expectedReturn} onChange={(newValue) => handleChange('expectedReturn', newValue)} />
                    <InputField label="Duration" value={settings.duration} onChange={(newValue) => handleChange('duration', newValue)} />
                </div>
            </div>
            {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
            {inputIsValid && <Results settings={settings} />}
        </>
    );

}