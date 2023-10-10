import ContactItem from "components/ContactItem/ContactItem"

export default function ContactsList ({contacts, onDelete}) {

    return(
    <div>
        <ul>
            {contacts.map(item => (
                <li key = {item.id}>
                    <ContactItem
                    contact = {item}
                    onDelete = {onDelete}
                    >
                    </ContactItem>
                </li>
            ))}
        </ul>
    </div>
    
    )
}