import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';


const SubmitSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(2, 'Too Short!')
    .required('This field is required, please fill that'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00')
    .required('This field is required, please fill that'),
});

export default function FormInput({onFormSubmit,}) {
    
    return(
      <Formik
        initialValues={{
          id: nanoid(),
          name: '',
          number: '',
        }}
        // validationSchema={SubmitSchema}

        onSubmit={values => {onFormSubmit(values)}}
      >
        <Form>
          <label>Name:
          <Field 
            name="name"
            placeholder="Jane" />
          </label>

          <label>Number:
          <Field 
            name="number"
            placeholder="658-58-69"
            type="number"
          />
          </label>
          <button type="submit">Add contact</button>
        </Form> 
    </Formik>
    )
}