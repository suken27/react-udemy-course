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

    const [settings, setSettings] = useState({ initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 } as Settings);

    function handleInitialInvestmentChange(newValue: number) {
        setSettings((oldValue) => {
            return {
                ...oldValue,
                initialInvestment: newValue
            }
        });
    }

    function handleAnnualInvestmentChange(newValue: number) {
        setSettings((oldValue) => {
            return {
                ...oldValue,
                annualInvestment: newValue
            }
        });
    }

    function handleExpectedReturnChange(newValue: number) {
        setSettings((oldValue) => {
            return {
                ...oldValue,
                expectedReturn: newValue
            }
        });
    }

    function handleDurationChange(newValue: number) {
        setSettings((oldValue) => {
            return {
                ...oldValue,
                duration: newValue
            }
        });
    }

    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <InputField label="Initial investment" value={settings.initialInvestment} onChange={handleInitialInvestmentChange} />
                    <InputField label="Annual investment" value={settings.annualInvestment} onChange={handleAnnualInvestmentChange} />
                </div>
                <div className="input-group">
                    <InputField label="Expected return" value={settings.expectedReturn} onChange={handleExpectedReturnChange} />
                    <InputField label="Duration" value={settings.duration} onChange={handleDurationChange} />
                </div>
            </div>
            <Results settings={settings} />
        </>
    );

}