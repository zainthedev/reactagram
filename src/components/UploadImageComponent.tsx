import FilerobotImageEditor from 'filerobot-image-editor';
import { ImageWrapper, EditableImage } from '../styled-components/imageStyles';
import { useEffect, useState } from 'react';

export const UploadImageComponent = () => {
	const [isShow, setIsShow] = useState(false);
	const [selectedImage, setSelectedImage] = useState('');

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

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files![0];
		const fileURL = URL.createObjectURL(file);
		setSelectedImage(fileURL);
	};

	return (
		<div>
			<label>
				<input type='file' name='file' accept='image/*' onChange={onChangeHandler}></input>
			</label>
			{selectedImage && (
				<ImageWrapper>
					<EditableImage src={selectedImage} onClick={showImageEditor} alt='example' />
				</ImageWrapper>
			)}
			<FilerobotImageEditor config={config} show={isShow} src={selectedImage} onClose={onClose} />
		</div>
	);
};
