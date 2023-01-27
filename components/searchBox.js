import { useState } from 'react';
import searchBox from '@/styles/searchBox.module.scss';

export default function SearchBox() {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(text);
		setText('');
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<form className={searchBox.container} onSubmit={handleSubmit}>
			<input
				className={searchBox.search}
				onChange={onChange}
				value={text}
			></input>
			<button className={searchBox.btn} type="submit">
				검색
			</button>
		</form>
	);
}
