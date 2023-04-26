import { useSelector } from 'react-redux';
import { ContactsList } from 'components/Contacts/Contacts.styled';
import { Contact } from 'components/Contacts/Contact/Contact';
import { selectFilteredContacts } from 'redux/selectors';

export function Contacts() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ContactsList>
      {filteredContacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <Contact key={id} content={` ${name}: ${number}`} id={id}></Contact>
        );
      })}
    </ContactsList>
  );
}
