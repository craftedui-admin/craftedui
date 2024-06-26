'use client';
import componentDetails from './data.json';
import PreviewContent from '@/components/PreviewContent';

function ThreeDButton() {
	return (
		<PreviewContent>
			<PreviewContent.CodeAndPreview path='components/button/3dbutton' componentDetails={componentDetails} />
		</PreviewContent>
	);
}

export default ThreeDButton;
