'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
type CodeAndPreviewContentProps = {
	path: string;
	componentDetails: {
		name: string;
		desc?: string;
		libraries?: string[];
	};
};

export default function CodeAndPreviewContent({ path, componentDetails }: CodeAndPreviewContentProps) {
	const [isPreview, setIsPreview] = useState(true);

	const Component = dynamic(() => import(`../content/${path}.tsx`));
	const codestring = require(`!!raw-loader!../content/${path}.tsx`).default;

	const { name, desc, libraries } = componentDetails;
	return (
		<section className='flex flex-col gap-6'>
			<h1>Name: {name}</h1>
			<span>Desc: {desc}</span>

			<ol>
				Libraries:
				{libraries?.map((lib: string) => <li key={lib}>{lib}</li>)}
			</ol>
			<button className='p-2 bg-zinc-400 rounded-lg' onClick={() => setIsPreview((prev) => !prev)}>
				Show {isPreview ? 'Code' : 'Preview'}
			</button>
			{isPreview ? (
				<Component />
			) : (
				<SyntaxHighlighter language='javascript' style={docco}>
					{codestring}
				</SyntaxHighlighter>
			)}
		</section>
	);
}
