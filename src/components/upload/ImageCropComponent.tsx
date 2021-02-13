import { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../helper-functions/getCroppedImage';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { CropperContainer, Controls } from '../../styled-components/uploadStyles';

type ImageCropComponentProps = {
	selectedImage: string;
	handleImage: (newImage: string) => void;
	handleEditing: any;
	handleFinishEditing: () => void;
};

export const ImageCropComponent = ({
	selectedImage,
	handleImage,
	handleEditing,
	handleFinishEditing,
}: ImageCropComponentProps) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const showCroppedImage = useCallback(async () => {
		try {
			handleEditing();
			const croppedImage: any = await getCroppedImg(selectedImage, croppedAreaPixels);
			console.log(croppedImage);
			handleImage(croppedImage);
			handleFinishEditing();
		} catch (e) {
			console.error(e);
		}
	}, [handleFinishEditing, handleEditing, handleImage, selectedImage, croppedAreaPixels]);

	return (
		<CropperContainer>
			<Cropper
				image={selectedImage}
				crop={crop}
				zoom={zoom}
				aspect={1}
				onCropChange={setCrop}
				onCropComplete={onCropComplete}
				onZoomChange={setZoom}
			></Cropper>
			<Controls>
				<ReactagramButton onClick={handleEditing}>Cancel</ReactagramButton>
				<ReactagramButton onClick={showCroppedImage}>Continue</ReactagramButton>
			</Controls>
		</CropperContainer>
	);
};
