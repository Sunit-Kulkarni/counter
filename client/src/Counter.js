import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentWillMount() {
		axios.get('/')
		.then(({ data }) => {
			this.setState(data);
		})
	}

	render() {
		return (
			<div>
				<button>-</button>
				0
				<button>=</button>
			</div>
		);
	}
}

export default Counter;