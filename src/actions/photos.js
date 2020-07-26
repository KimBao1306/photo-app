export const addPhoto = (photoValues) => {
	return {
		type: 'ADD_PHOTO',
		payload: photoValues,
	};
};

export const removePhoto = (photoValues) => {
	return {
		type: 'REMOVE_PHOTO',
		payload: photoValues,
	};
};
export const editPhoto = (photoValues) => {
	return {
		type: 'EDIT_PHOTO',
		payload: photoValues,
	};
};
