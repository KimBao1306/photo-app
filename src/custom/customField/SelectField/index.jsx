import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, Label, FormFeedback} from 'reactstrap';
import Select from 'react-select';
import {ErrorMessage} from 'formik';
import './SelectField.scss';

SelectField.propTypes = {
	//các props từ thằng FastField cung cấp
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	//các props tự thêm của mình
	label: PropTypes.string,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	options: PropTypes.array,
};

SelectField.defaultProps = {
	label: '',
	disabled: false,
	placeholder: '',
	options: [],
};

function SelectField(props) {
	const {field, form, label, disabled, placeholder, options} = props;
	const {name, value} = field;
	//get errors from form
	const {errors, touched} = form;
	const showError = errors[name] && touched[name];
	//get Name by category id
	const findCategoryName = options.find((option) => option.value === value);

	const handelSelectedOptionChange = (selectedOption) => {
		const selectedValue = selectedOption
			? selectedOption.value
			: selectedOption;

		form.setFieldValue(name, selectedValue);
	};

	return (
		<div>
			<FormGroup>
				{label && <Label for={name}>{label}</Label>}
				<Select
					{...field}
					value={findCategoryName}
					onChange={handelSelectedOptionChange}
					//tùy chỉnh theo ý mình
					id={name}
					placeholder={placeholder}
					isDisabled={disabled}
					options={options}
					className={showError && 'select is-invalid'}
				/>

				<ErrorMessage name={name} component={FormFeedback} />
			</FormGroup>
		</div>
	);
}

export default SelectField;
