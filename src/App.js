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

// const App = () => {
// 	const [count, setCount] = useState(0)
// 	useEffect(() => {
// 		count && 
// 		fetch('https://jsonplaceholder.typicode.com/posts/' + count)
// 		.then(response => response.json())
// 		.then(json => console.log(json))

// 		// return () => {

// 		// }
// 		  }, [count])

		  
// 	return (<h1>
// 		{count} <br />
		
// 		<button onClick={() => setCount(count + 1)} >Add</button>
// 	</h1>)
// }

export default withRouter(App);
