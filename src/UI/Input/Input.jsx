import React from "react";
import cx from "clsx";

import styles from "./Input.module.css";

const Input = ({
	type,
	placeholder,
	defaultValue,
	disabled,
	className,
	readonly,
}) => {
	return (
		<input
			type={type}
			className={cx(styles.input, className)}
			placeholde={placeholder}
			defaultValue={defaultValue}
			disabled={disabled}
			readOnly={readonly}
		/>
	);
};

export default Input;
