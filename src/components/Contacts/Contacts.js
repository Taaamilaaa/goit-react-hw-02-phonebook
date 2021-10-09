export function Contacts({ contacts }) {
    console.log(contacts);
    if (contacts) {
    const { id, name, number } = contacts;
        return (<>
            <h2>Contacts</h2>
            <ul>
                <li>{name} - { number}</li>
            </ul>
        </>)
   
    }
    return (<p>There are no contacts</p>)
}