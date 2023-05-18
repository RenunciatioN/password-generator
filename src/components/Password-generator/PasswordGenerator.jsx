import React, { useState } from "react";

import styles from "./PasswordGenerator.module.css";

import Input from "./../../UI/Input/Input";
import Select from "./../../UI/Select/Select";
import Checkbox from "./../../UI/Checkbox/Checkbox";
import Button from "./../../UI/Button/Button";

const passwordLenghtValue = [12, 13, 14, 15, 16];


const PasswordGenerator = () => {
	const [result, setResult] = useState("");
	const [passwordLenght, setPasswordLenght] = useState(12);
	const [isSymbolUse, setIsSimbolUse] = useState(false);
	const [isPasswordCopied, setIsPasswordCopied] = useState(false);

	let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ";
	const symbols = "!@#$%^&()_+?:{}[]";

	const handlePasswordGenerator = () => {
		if (isSymbolUse) {
			chars += symbols;
		}

		let currentResult = "";

		for (let i = 0; i < passwordLenght; i += 1) {
			const rundomNumber = Math.floor(Math.random() * chars.length);
			currentResult += chars.substring(rundomNumber, rundomNumber + 1);
		}

		setResult(currentResult);
	};

	const handleBlur = (e) => {
		setPasswordLenght(e.target.value);
	};

	const handlePasswordCopy = () => {
		result &&
			navigator.clipboard.writeText(result).then(() => {
				setIsPasswordCopied(true);

				setTimeout(() => {
					setIsPasswordCopied(false);
				}, 2000);
			});
	};

	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Password Generator</h1>
			<div className={styles.result}>
				<Input type={"text"} readonly={true} defaultValue={result} />
				<button
					className={styles.copy}
					onClick={handlePasswordCopy}
				></button>
				{isPasswordCopied && (
					<span className={styles.copied}>Скопировано</span>
				)}
			</div>
			<div className={styles.option}>
				<span className={styles.optionName}>Длина пароля</span>
				<Select options={passwordLenghtValue} onBlur={handleBlur} />
			</div>
			<div className={styles.option}>
				<label htmlFor="symbols" className={styles.optionLabel}>
					Использовать спецсимволы
				</label>
				<Checkbox
					defaultChecked={false}
					id="symbols"
					onChange={() => setIsSimbolUse(!isSymbolUse)}
				/>
			</div>
			<Button
				type={"button"}
				children={"Сгенерировать"}
				onClick={handlePasswordGenerator}
			/>
		</div>
	);
};

export default PasswordGenerator;
