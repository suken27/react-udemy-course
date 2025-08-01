import { ReactHTMLElement, TableHTMLAttributes } from "react";
import { calculateInvestmentResults, formatter } from "../src/util/investment";
import { Settings } from "./Calculator";

export default function Results({ settings }: { settings: Settings}) {

    const results = calculateInvestmentResults(settings);

    const rows = results.map(result => {
        return (<tr>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
            <td>{formatter.format(settings.initialInvestment + result.annualInvestment)}</td>
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