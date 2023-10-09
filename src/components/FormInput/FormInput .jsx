
export default function FormInput({onContactInput, onFormSubmit,}) {
    
    return(
       <form>
        <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              require
              onChange={evt => onContactInput ('name', evt.target.value)}
              />
          </div>
          <div>
            <label>Number: </label>
            <input
            type="tel"
            name="number"
            required
            onChange={evt => onContactInput ('number', evt.target.value)}
            />
          </div>
          <button type='submit' onClick={(e) => onFormSubmit(e)}>
              Add contact
          </button>
      </form>
    )
}