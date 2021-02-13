import { useState } from 'react';
import { ReactagramButton } from '../../styled-components/globalStyles';

type FinalisePostComponentProps = {
	selectedImage: string;
};

export const FinalisePostComponent = ({ selectedImage }: FinalisePostComponentProps) => {
	console.log(selectedImage);
	return (
		<div>
			<img src={selectedImage} alt='The chosen, cropped image to be posted' />
		</div>
	);
};
