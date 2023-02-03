import styles from '@/styles/header.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={styles.container}>
			<Link href="/">홈</Link>
			<Link href="/address">주소</Link>
			<Link href="/transaction">트랜잭션</Link>
			<Link href="/block">블록</Link>
		</header>
	);
}
