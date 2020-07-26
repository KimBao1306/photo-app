import React from 'react';
import {Container} from 'reactstrap';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import {removePhoto} from 'actions/photos';

MainPage.propTypes = {};

function MainPage() {
	const photoList = useSelector((state) => state.photos.photoList);
	const dispatch = useDispatch();
	const history = useHistory();

	function handlePhotoEdit(photoID) {
		history.push(`/photos/${photoID}`);
	}

	function handlePhotoRemove(photoID) {
		const action = removePhoto(photoID);
		dispatch(action);
	}

	return (
		<div className="photo-main">
			<Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />
			<Container className="text-center">
				<Link to="/photos/add">Add new photo</Link>
				<PhotoList
					photoList={photoList}
					onPhotoEdit={handlePhotoEdit}
					onPhotoRemove={handlePhotoRemove}
				/>
			</Container>
		</div>
	);
}

export default MainPage;
