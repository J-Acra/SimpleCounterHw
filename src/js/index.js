//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let seconds = 0;

setInterval(() => {
	let stringSeconds = seconds.toString();
	let numLets = stringSeconds.length;
	let expectedNumLets = 5;
	let difference = expectedNumLets - numLets;
	stringSeconds = new Array(difference).fill(0).join("") + stringSeconds;
	ReactDOM.render(
		<>
			<SecondsCounter seconds={stringSeconds} />
		</>,
		document.querySelector("#app")
	);
	seconds++;
}, 1000);
