import { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ImageWrapper, UserIcon } from '../styled-components/imageStyles';
import { StyledPopover, PopoverButton, RouterLink } from '../styled-components/globalStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const SearchPopoverComponent = () => {
	const [foundUsers, setFoundUsers]: any = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const handleInput = (e: any) => {
		const formValue = e.currentTarget.value;
		setSearchInput(formValue);
	};

	useEffect(() => {
		if (userCollectionData.data !== undefined && searchInput.length > 0) {
			const allUsers = [...userCollectionData.data];
			const allFoundUsers: any = [];
			allUsers.forEach((user: any) => {
				if (user.name.includes(searchInput)) {
					allFoundUsers.push(user);
				}
			});
			setFoundUsers(allFoundUsers);
		}
	}, [searchInput, userCollectionData.data]);

	const popover = (
		<StyledPopover>
			<Popover.Content>
				{foundUsers.length > 0 &&
					searchInput.length > 0 &&
					foundUsers.map((user: any) => {
						return (
							<PopoverButton key={user.name}>
								<RouterLink to={`/u/${user.name}`}>
									<ImageWrapper>
										<UserIcon alt='user' src={user.displayPicture} />
										<p>{user.name}</p>
									</ImageWrapper>
								</RouterLink>
							</PopoverButton>
						);
					})}
			</Popover.Content>
		</StyledPopover>
	);

	return (
		<OverlayTrigger trigger='click' rootClose placement='auto' overlay={popover}>
			<label>
				<FormInputWrapper>
					<FormInput onChange={handleInput} placeholder='Search'></FormInput>
				</FormInputWrapper>
			</label>
		</OverlayTrigger>
	);
};
