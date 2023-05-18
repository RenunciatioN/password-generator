import React from "react";
import cx from "clsx";

import styles from './Checkbox.module.css'

const Checkbox = ({ name, id, className, defaultChecked, onChange }) => {
	return (
		<input
			id={id}
			type="checkbox"
			name={name}
			className={cx(styles.checkbox, className)}
			defaultChecked={defaultChecked}
			onChange={onChange}
		/>
	);
};

export default Checkbox;
