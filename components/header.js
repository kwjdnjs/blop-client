import header from '@/styles/header.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={header.container}>
			<Link href="/">홈</Link>
			<Link href="/address/bitcoin">주소</Link>
			<Link href="/transaction/bitcoin">트랜잭션</Link>
			<Link href="/block/bitcoin">블록</Link>
		</header>
	);
}
