import { useState } from 'react';
import { SearchModalComponent } from './SearchModalComponent';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import searchIcon from '../../images/searchIcon.svg';

export const SearchButtonComponent = () => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;

		// Prevent closing the modal on search bar click
		if (targetElement.placeholder !== 'Search') {
			setShowModal(!showModal);
		}
	};

	return (
		<>
			<ImageWrapper onClick={toggleModal}>
				<Icon src={searchIcon} />
				Search
			</ImageWrapper>
			{showModal && <SearchModalComponent toggleModal={toggleModal} />}
		</>
	);
};
