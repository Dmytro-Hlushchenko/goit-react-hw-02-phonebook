export default function ContactItem ({contact: {id, name, number}, onDelete}) {
    
    return(
        <>
            <p>{name}: {number} </p>
            <button onClick={() => onDelete(id)}
            >Delete</button>
        </>
        
    )
} 