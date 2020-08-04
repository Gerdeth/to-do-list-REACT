import React from "react";
import { PropTypes } from "prop-types";
export class ListTasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconVisibility: false
		};
	}

	render() {
		var classToApply = this.state.iconVisibility ? "visible" : "hidden";
		return (
			<li
				className="d-flex justify-content-between"
				onMouseEnter={() => this.setState({ iconVisibility: true })}
				onMouseLeave={() => this.setState({ iconVisibility: false })}>
				<div>{this.props.task}</div>
				<div>
					<i
						className={`fa fa-trash ${classToApply}`}
						onClick={() => this.props.deleteFunction(this.props.id)}
					/>
				</div>
			</li>
		);
	}
}
ListTasks.propTypes = {
	id: PropTypes.number,
	task: PropTypes.string,
	deleteFunction: PropTypes.func
};
