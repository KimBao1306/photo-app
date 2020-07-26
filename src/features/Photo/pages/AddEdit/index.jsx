import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import {Container} from 'reactstrap';
import {addPhoto, editPhoto} from 'actions/photos';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
	const photoList = useSelector((state) => state.photos.photoList);
	const dispatch = useDispatch();
	const history = useHistory();

	const {photoId} = useParams();
	const isEditMode = !!photoId;

	const initialValues = isEditMode
		? photoList.find((p) => p.id === +photoId)
		: {
				title: '',
				category: null,
				imageUrl: '',
		  };

	const handleSubmit = (values) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				let action;
				isEditMode ? (action = editPhoto(values)) : (action = addPhoto(values));

				dispatch(action);
				history.push('/photos');
				resolve();
			}, 2000);
		});
	};

	return (
		<div>
			<Banner
				title={
					isEditMode ? 'Update your amazing photo' : 'Pick your amazing photo'
				}
			/>

			<Container>
				<PhotoForm
					onSubmit={handleSubmit}
					isEditMode={isEditMode}
					initialValues={initialValues}
				/>
			</Container>
		</div>
	);
}

export default AddEditPage;
