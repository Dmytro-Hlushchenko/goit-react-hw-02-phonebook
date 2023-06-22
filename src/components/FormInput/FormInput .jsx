// import PropTypes from 'prop-types';

export default function FormInput({onFormSubmit, onNameInput}) {
    
    return(
      <div>
        <label htmlFor="">
          Phonebook
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => onNameInput(e)}
          />
          <button
            type='button'
            onClick={onFormSubmit}
            >
            Add contact
          </button>
      </div>
    )
}