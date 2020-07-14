import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./routing/routes";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Routes />
			</div>
		);
	}
}

export default withRouter(App);
