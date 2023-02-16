import styles from '@/styles/header.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={styles.container}>
			<Link href="/">홈</Link>
		</header>
	);
}
