const initialState = {
	photoList: [
		{
			id: 1,
			title: '123123123',
			category: 1,
			imageUrl: 'https://picsum.photos/id/15/300/300',
		},
		{
			id: 2,
			title: '123123123',
			category: 2,
			imageUrl: 'https://picsum.photos/id/15/300/300',
		},
		{
			id: 3,
			title: '123123123',
			category: 3,
			imageUrl: 'https://picsum.photos/id/15/300/300',
		},
		{
			id: 4,
			title: '123123123',
			category: 4,
			imageUrl: 'https://picsum.photos/id/15/300/300',
		},
		{
			id: 5,
			title: '123123123',
			category: 5,
			imageUrl: 'https://picsum.photos/id/15/300/300',
		},
		{
			id: 6,
			title: '123123123',
			category: 4,
			imageUrl: 'https://picsum.photos/id/15/300/300',
		},
	],
};

const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PHOTO':
			const newPhotoList = [...state.photoList];
			newPhotoList.push(action.payload);
			return {
				photoList: newPhotoList,
			};
		case 'REMOVE_PHOTO':
			const removePhotoId = action.payload;

			return {
				photoList: state.photoList.filter((p) => p.id !== removePhotoId),
			};
		case 'EDIT_PHOTO':
			const editPhoto = action.payload;
			const indexPhoto = state.photoList.findIndex(
				(p) => editPhoto.id === p.id
			);
			state.photoList.splice(indexPhoto, 1, editPhoto);

			return {
				photoList: state.photoList,
			};
		default:
			return state;
	}
};

export default photosReducer;
