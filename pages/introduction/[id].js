import SearchBox from '@/components/searchBox';
import { useRouter } from 'next/router';

export default function Introduction() {
	const router = useRouter();

	return (
		<>
			<SearchBox />
			<h1>{router.query.id}</h1>
		</>
	);
}
