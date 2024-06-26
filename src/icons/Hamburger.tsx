import cn from '@/utils/cn';
import { IconType } from './types';

export default function HamburgerIcon({
	className,
	inverted = false,
	withoutBg = false,
	width = 24,
	height = 24,
	...props
}: IconType) {
	return (
		<svg
			{...props}
			className={cn(className)}
			width={width}
			height={height}
			viewBox='0 0 24 24'
			version='1.1'
			xmlSpace='preserve'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<g id='Page-1' strokeWidth='0' fill='none' fillRule='evenodd'>
				<g id='Menu'>
					<rect id='Rectangle' fillRule='nonzero' x='0' y='0' width='24' height='24'></rect>
					<line x1='5' y1='7' x2='19' y2='7' id='Path' strokeWidth='2' strokeLinecap='round'></line>
					<line x1='5' y1='17' x2='19' y2='17' id='Path' strokeWidth='2' strokeLinecap='round'></line>
					<line x1='5' y1='12' x2='19' y2='12' id='Path' strokeWidth='2' strokeLinecap='round'></line>
				</g>
			</g>
		</svg>
	);
}
