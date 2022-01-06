import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
	const singleDigits = props.seconds.split("");
	return (
		<div className="bigCounter">
			<div className="clockIcon">
				<i className="far fa-clock"></i>
			</div>
			<div>{singleDigits[0]}</div>
			<div>{singleDigits[1]}</div>
			<div>{singleDigits[2]}</div>
			<div>{singleDigits[3]}</div>
			<div>{singleDigits[4]}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number,
};

export default SecondsCounter;
