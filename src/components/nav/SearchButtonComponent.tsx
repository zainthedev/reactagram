import { useState } from 'react';
import { SearchModalComponent } from './SearchModalComponent';
import { SearchImageWrapper, Icon } from '../../styled-components/imageStyles';
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
			<SearchImageWrapper onClick={toggleModal}>
				<Icon src={searchIcon} />
			</SearchImageWrapper>
			{showModal && <SearchModalComponent toggleModal={toggleModal} />}
		</>
	);
};
