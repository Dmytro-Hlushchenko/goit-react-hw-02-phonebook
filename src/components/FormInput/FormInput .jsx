
export default function FormInput({onFormSubmit, onNameInput, onNumberInput, }) {
    
    return(
       <form>Phonebook
        <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={evt => {onNameInput(evt.target.value)}}
              />
          </div>
          <div>
            <label>Number: </label>
            <input
            type="tel"
            name="number"
            required
            onChange={evt => onNumberInput(evt.target.value)}
            />
          </div>
          <button type='submit' onClick={(e) => onFormSubmit(e)}>
              Add contact
          </button>
      </form>
    )
}