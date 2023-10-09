export default function ContactsList ({contacts, onInputFilterName}) {
return(
    <div>
        <label>Contacts</label>
            <div>
                <label>Find contacts by name: </label>
                <input type="text" 
                onChange={evt => onInputFilterName('filter', evt.target.value)}/>
            </div>
        <ul>
            {contacts.map(item => (
                    <li key={item.id}>{item.name}: {item.number}</li>
            ))}
        </ul>
    </div>
    
    )
}