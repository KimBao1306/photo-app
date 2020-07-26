import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import {ErrorMessage} from 'formik';

InputField.propTypes = {
	//các props từ thằng FastField cung cấp
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	//các props tự thêm của mình
	type: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
};

InputField.defaultProps = {
	type: 'text',
	label: '',
	disabled: false,
	placeholder: '',
};

function InputField(props) {
	const {field, form, label, type, disabled, placeholder} = props;
	const {name} = field;
	const {errors, touched} = form;
	const showError = errors[name] && touched[name];
	// const
	return (
		<div>
			<FormGroup>
				{label && <Label for={name}>{label}</Label>}

				<Input
					//formik bắt buộc phải có 4 thuộc tính 'value', 'onChange', 'onBlur', 'name' cho input
					//các thuộc tính trên nằm trong props 'field' của FastField cung cấp
					{...field}
					//tùy chỉnh theo ý mình
					type={type}
					id={name}
					disabled={disabled}
					placeholder={placeholder}
					invalid={showError}
				/>

				<ErrorMessage name={name} component={FormFeedback} />
			</FormGroup>
		</div>
	);
}

export default InputField;
