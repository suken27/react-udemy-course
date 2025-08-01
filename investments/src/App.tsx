import Calculator from '../components/Calculator';
import logo from './assets/investment-calculator-logo.png';

function App() {

	return (
		<>
			<div id="header">
				<img src={logo} alt='Investment calculator logo' />
				<h1>Investment Calculator</h1>
			</div>
			<Calculator />
		</>
	);
}

export default App
