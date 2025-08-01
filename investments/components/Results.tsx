import { ReactHTMLElement, TableHTMLAttributes } from "react";
import { calculateInvestmentResults, formatter } from "../src/util/investment";
import { Settings } from "./Calculator";

export default function Results({ settings }: { settings: Settings}) {

    const results = calculateInvestmentResults(settings);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    const rows = results.map(result => {

        const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
        const totalAmountInvested = result.valueEndOfYear - totalInterest;

        return (<tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
        </tr>);
    }) as ReactHTMLElement<HTMLTableCellElement>[];

    return(
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}