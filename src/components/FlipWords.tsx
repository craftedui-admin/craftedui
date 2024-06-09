'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import cn from '@/utils/cn';

export const FlipWords = ({
	words,
	duration = 2000,
	className
}: {
	words: string[];
	duration?: number;
	className?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const startAnimation = useCallback(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}
		>
			<motion.div
				initial={{
					opacity: 0,
					y: 10
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				transition={{
					duration: 0.4,
					ease: 'easeInOut',
					type: '',
					stiffness: 100,
					damping: 20
				}}
				exit={{
					opacity: 0,
					y: -10,
					x: 0,
					position: 'absolute'
				}}
				className={cn('inline-block relative ', className)}
				key={currentWord}
			>
				{currentWord}
			</motion.div>
		</AnimatePresence>
	);
};
