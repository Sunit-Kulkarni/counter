import React, { Component } from 'react';
import axios from 'axios';



class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
	}

	componentWillMount() {
		axios.get('/counter')
		.then(({ data }) => {
			this.setState({
				counter: data.counter
			})
		})
	}

	add() {
		axios.post('/counter/add')
		.then(({ data }) => {
			this.setState({
				counter: data.counter
			});
		});
	}

	subtract() {
		axios.post('/counter/subtract')
		.then(({ data }) => {
			this.setState({
				counter: data.counter
			});
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.subtract.bind(this)}>-</button>

				{this.state.counter}

				<button onClick={this.add.bind(this)}>+</button>
			</div>
		);
	}
}

export default Counter;