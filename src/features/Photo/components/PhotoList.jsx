import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';
import PhotoCard from './PhotoCard';

PhotoList.propTypes = {
	photoList: PropTypes.array,
	onPhotoEdit: PropTypes.func,
	onPhotoRemove: PropTypes.func,
};

PhotoList.defaultProps = {
	photoList: [],
	onPhotoEdit: null,
	onPhotoRemove: null,
};

function PhotoList(props) {
	const {photoList, onPhotoEdit, onPhotoRemove} = props;

	return (
		<Row>
			{photoList.map((p) => (
				<PhotoCard
					key={p.id}
					{...p}
					onPhotoEdit={onPhotoEdit}
					onPhotoRemove={onPhotoRemove}
				/>
			))}
		</Row>
	);
}

export default PhotoList;
