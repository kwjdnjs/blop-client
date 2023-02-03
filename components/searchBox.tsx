import { useState } from 'react';
import styles from '@/styles/searchBox.module.scss';
import { useRouter } from 'next/router';

export default function SearchBox() {
	const [text, setText] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		setText('');
		router.push(`/search/${text}`);
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<input title="title" className={styles.search} onChange={onChange} value={text}></input>
			<button className={styles.btn} type="submit">
				검색
			</button>
		</form>
	);
}
