import { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../helper-functions/getCroppedImage';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { CropperContainer, Controls } from '../../styled-components/uploadStyles';

type ImageCropComponentProps = {
	selectedImage: string;
	handleImage: (newImage: string) => void;
	handleEditing: any;
};

export const ImageCropComponent = ({
	selectedImage,
	handleImage,
	handleEditing,
}: ImageCropComponentProps) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const [croppedImage, setCroppedImage] = useState(null);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const showCroppedImage = useCallback(async () => {
		try {
			handleEditing();
			const croppedImage: any = await getCroppedImg(selectedImage, croppedAreaPixels, rotation);
			handleImage(croppedImage);
		} catch (e) {
			console.error(e);
		}
	}, [selectedImage, croppedAreaPixels, rotation]);

	const onClose = useCallback(() => {
		setCroppedImage(null);
	}, []);

	const initialUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files![0];
		const fileURL = URL.createObjectURL(file);
		handleImage(fileURL);
	};

	return (
		<CropperContainer>
			<Cropper
				disableAutomaticStylesInjection={false}
				image={selectedImage}
				crop={crop}
				zoom={zoom}
				aspect={4 / 3}
				onCropChange={setCrop}
				onCropComplete={onCropComplete}
				onZoomChange={setZoom}
			></Cropper>
			<Controls>
				<ReactagramButton onClick={handleEditing}>Cancel</ReactagramButton>
				<ReactagramButton onClick={showCroppedImage}>Finished</ReactagramButton>
			</Controls>
		</CropperContainer>
	);
};
