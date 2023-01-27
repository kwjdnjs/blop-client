import Link from 'next/link';
import menu from '@/styles/menu.module.scss';

export default function MenuItem(props) {
	return (
		<Link className={menu.link} href={'/introduction/' + props.type}>
			<div className={menu.item} selected={props.selected}>
				{props.name}
			</div>
		</Link>
	);
}
