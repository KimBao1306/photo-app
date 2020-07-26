import {PHOTO_CATEGORY_OPTIONS} from 'constants/global';
import InputField from 'custom/customField/InputField';
import RandomPhotoField from 'custom/customField/RandomPhotoField';
import SelectField from 'custom/customField/SelectField';
import {FastField, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {Button, FormGroup} from 'reactstrap';
import * as Yup from 'yup';
import Loading from 'components/Loading';

PhotoForm.propTypes = {
	onSubmit: PropTypes.func,
	initialValues: PropTypes.object,
};

PhotoForm.defaultProps = {
	onSubmit: null,
	initialValues: {},
};

function PhotoForm(props) {
	const {onSubmit, isEditMode, initialValues} = props;

	const validationSchema = Yup.object().shape({
		title: Yup.string().required('This field is required'),
		category: Yup.number().required('This field is required').nullable(),
		imageUrl: Yup.string().required('This field is required'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formikProps) => {
				const {values, errors, touched, isSubmitting} = formikProps;
				// console.log({values, errors, touched, isSubmitting});
				return (
					<Form>
						<FastField
							//props của FastField
							//được lưu vào props 'field' vs 'form'
							name="title"
							component={InputField}
							//props dành cho component được FastField render
							//được truyền vào component thông qua props
							label="Title"
							placeholder="Eg: Wow beautiful girl ..."
						/>

						<FastField
							//props của FastField
							name="category"
							component={SelectField}
							//props dành cho component được FastField render
							label="Category"
							placeholder="What's your photo category?"
							options={PHOTO_CATEGORY_OPTIONS}
						/>

						<FastField
							name="imageUrl"
							component={RandomPhotoField}
							label="Photo"
						/>
						<FormGroup>
							<Button type="submit" color={isEditMode ? 'success' : 'primary'}>
								{isEditMode ? 'Edit photo' : 'Add to album'}
							</Button>
						</FormGroup>
						{isSubmitting && <Loading />}
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
