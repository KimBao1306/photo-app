import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import Images from 'constants/images';
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
	name: PropTypes.string,
	imageUrl: PropTypes.string,
	onImageChange: PropTypes.func,
	onRandomButtonBlur: PropTypes.func,
	invalid: PropTypes.bool,
};

RandomPhoto.defaultProps = {
	name: '', //name
	imageUrl: '', //value
	onImageChange: null, //onchange
	onRandomButtonBlur: null, //onblur
	invalid: false,
};

function getRandomPhoto() {
	const randomId = Math.trunc(Math.random() * 2000);
	return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
	const {name, imageUrl, onImageChange, onRandomButtonBlur, invalid} = props;

	function handleRandomPhoto() {
		if (onImageChange) {
			const newImage = getRandomPhoto();
			onImageChange(newImage);
		}
	}

	return (
		<div className={invalid ? 'random__photo is-invalid' : 'random__photo'}>
			<div className="random__photo--btn">
				<Button
					type="button"
					outline
					color="primary"
					//
					name={name}
					onBlur={onRandomButtonBlur}
					onClick={handleRandomPhoto}
				>
					Random new photo
				</Button>
			</div>
			<div className="random__photo--photo">
				<img
					width="200px"
					height="200px"
					src={imageUrl || Images.COLORFUL_BG}
					alt="Oops, Maybe the url was broken"
					onError={handleRandomPhoto}
				/>
			</div>
		</div>
	);
}

export default RandomPhoto;
