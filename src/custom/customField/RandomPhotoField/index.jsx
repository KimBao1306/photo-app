import React from 'react';
import PropTypes from 'prop-types';
import RandomPhoto from 'components/RandomPhoto';
import {FormGroup, Label, FormFeedback} from 'reactstrap';
import {ErrorMessage} from 'formik';

RandomPhotoField.propTypes = {
	//các props từ thằng FastField cung cấp
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
	label: '',
};

function RandomPhotoField(props) {
	const {field, form, label} = props;
	const {name, onBlur, value} = field;
	//get errors from form
	const {errors, touched} = form;
	const showError = errors[name] && touched[name];
	function handleRandomPhotoChange(newImageUrl) {
		form.setFieldValue(name, newImageUrl);
	}

	return (
		<div>
			<FormGroup>
				{label && <Label for={name}>{label}</Label>}
				<RandomPhoto
					name={name}
					imageUrl={value}
					onImageChange={handleRandomPhotoChange}
					onRandomButtonBlur={onBlur}
					invalid={showError}
				/>
				<ErrorMessage name={name} component={FormFeedback} />
			</FormGroup>
		</div>
	);
}

export default RandomPhotoField;
