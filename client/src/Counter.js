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
			<div></div>
		);
	}
}