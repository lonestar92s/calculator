import React, { Component } from 'react';

export default class Results extends Component {

	render() {
		let {results} = this.props;
		return (
		<div className="results">
		<p>{results}</p>
		</div>

		)
	}

}