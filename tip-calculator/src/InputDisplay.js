import react, { Component } from 'react';
import './InputDisplay.css';
import './App.css';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bill: 10.0,
			tip: 2.0,
			people: 3,
		};
	}
	render() {
		const amount = (this.state.bill * this.state.tip) / 100;
		const total = (parseFloat(this.state.bill) + parseFloat(amount)).toFixed(2);
		const each = (parseFloat(total) / parseFloat(this.state.people)).toFixed(2);
		return (
			<div class="row">
				<div className="input-display">
					<div className="input-box input-box1">
						<h1>{amount}</h1>
						<label>
							Bill
							<input
								type="number"
								value={this.state.bill}
								onChange={(e) => {
									this.setState({ bill: e.target.value });
								}}
							/>
						</label>
					</div>
					<div className="input-box input-box2">
						<h1> {this.state.tip} </h1>
						<label>
							Tip %
							<input
								type="number"
								value={this.state.tip}
								onChange={(e) => {
									this.setState({ tip: e.target.value });
								}}
							/>
						</label>
					</div>
					<div className="input-box input-box3">
						<h1>{this.state.people}</h1>
						<label>
							# of People
							<input
								type="number"
								value={this.state.people}
								onChange={(e) => {
									this.setState({ people: e.target.value });
								}}
							/>
						</label>
					</div>
				</div>

				<div className="input-display">
					<div className="input-display">
						<div className="input-box input-box1">
							<h1> Tip Amount Due:</h1>
							<header> ${amount} </header>
						</div>
						<div className="input-box input-box2">
							<h1> Total Due:</h1>
							<header>${total}</header>
						</div>
						<div className="input-box input-box3">
							<h1> How much per person:</h1>
							<header>${each}</header>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* <h1>{amount}</h1>
				<label>
					Bill
					<input
						type="number"
						value={this.state.bill}
						onChange={(e) => {
							this.setState({ bill: e.target.value });
						}}
					/>
				</label>
				<h1>{this.state.tip} </h1>
				<label>
					Tip %
					<input
						type="number"
						value={this.state.tip}
						onChange={(e) => {
							this.setState({ tip: e.target.value });
						}}
					/>
				</label>

				<h1>{this.state.people}</h1>
				<label>
					# of People
					<input
						type="number"
						value={this.state.people}
						onChange={(e) => {
							this.setState({ people: e.target.value });
						}}
					/>
				</label> */
export default Input;
