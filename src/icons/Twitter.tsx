import cn from '@/utils/cn';
import { IconType } from './types';

export default function TwitterIcon({
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
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			fill='currentColor'
		>
			<path d='M11.1527 8.92804L16.2525 3H15.044L10.6159 8.14724L7.07919 3H3L8.34821 10.7835L3 17H4.20855L8.88474 11.5643L12.6198 17H16.699L11.1524 8.92804H11.1527ZM9.49748 10.8521L8.95559 10.077L4.644 3.90978H6.50026L9.97976 8.88696L10.5216 9.66202L15.0446 16.1316H13.1883L9.49748 10.8524V10.8521Z'></path>
		</svg>
	);
}
