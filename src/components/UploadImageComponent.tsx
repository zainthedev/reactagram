import FilerobotImageEditor from 'filerobot-image-editor';
import { ImageWrapper, EditableImage } from '../styled-components/imageStyles';
import { useState } from 'react';

export const UploadImageComponent = () => {
	const [isShow, setIsShow] = useState(false);
	const [imgSrc, stImgSrc] = useState('https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg');

	const showImageEditor = () => {
		setIsShow(true);
	};

	const onClose = () => {
		setIsShow(false);
	};

	const config = {
		reduceBeforeEdit: {
			mode: 'auto',
			widthLimit: 1200,
			heightLimit: 628,
		},
		colorScheme: 'light',
		showInModal: true,
	};

	return (
		<div>
			<h1>Filerobot Image Editor</h1>
			<ImageWrapper>
				<EditableImage src={imgSrc} onClick={showImageEditor} alt='example' />
			</ImageWrapper>
			<FilerobotImageEditor config={config} show={isShow} src={imgSrc} onClose={onClose} />
		</div>
	);
};
