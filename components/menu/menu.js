import menu from '@/styles/menu.module.scss';
import MenuItem from './menuItem';
import { useRouter } from 'next/router';

const items = [
	{ id: 0, name: '비트코인', type: 'btc' },
	{ id: 1, name: '이더리움', type: 'eth' },
];

export default function Menu() {
	const router = useRouter();

	return (
		<div className={menu.container}>
			{/* 메뉴 불러오기 */}
			{items.map((element) => {
				const selected = router.query === element.type;

				return (
					<MenuItem
						key={element.id}
						type={element.type}
						name={element.name}
						selected={selected}
					/>
				);
			})}
		</div>
	);
}
