import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';


export default function FormInput({onFormSubmit,}) {
    
    return(
      <Formik
        initialValues={{
          id: nanoid(),
          name: '',
          number: '',
        }}
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