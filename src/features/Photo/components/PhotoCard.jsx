import {PHOTO_CATEGORY_OPTIONS} from 'constants/global';
import PropTypes from 'prop-types';
import React from 'react';
import {
	Button,
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Col,
} from 'reactstrap';

PhotoCard.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	category: PropTypes.number.isRequired,
	onPhotoEdit: PropTypes.func.isRequired,
	onPhotoRemove: PropTypes.func.isRequired,
};

function PhotoCard(props) {
	const {id, title, imageUrl, category, onPhotoEdit, onPhotoRemove} = props;
	const categoryObj = PHOTO_CATEGORY_OPTIONS.find((x) => x.value === category);

	return (
		<Col xs="3" style={{marginBottom: '5px'}}>
			<Card>
				<CardImg top width="100%" src={imageUrl} alt="Card image cap" />
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardText>{categoryObj.label}</CardText>
					<div className="d-flex justify-content-around">
						<Button color="info" onClick={() => onPhotoEdit(id)}>
							Edit
						</Button>
						<Button color="danger" onClick={() => onPhotoRemove(id)}>
							Remove
						</Button>
					</div>
				</CardBody>
			</Card>
		</Col>
	);
}

export default PhotoCard;
