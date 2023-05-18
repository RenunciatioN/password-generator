import React from "react";

const Select = ({ options, onBlur }) => {
	return (
		<select onBlur={onBlur}>
			{options && options.map((option, index) => (
				<option key={index}>{option}</option>
			))}
		</select>
	);
};

export default Select;
