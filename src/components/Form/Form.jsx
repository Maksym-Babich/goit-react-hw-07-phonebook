import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { HtmlForm, Label, Input, Button } from 'components/Form/Form.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export function Form() {
  const nameId = nanoid();
  const phoneId = nanoid();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onFormSubmit = event => {
    event.preventDefault();
    const contact = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    const prevContacts = contacts.reduce((acc, contact) => {
      acc.push(contact.name, contact.number);
      return acc;
    }, []);

    if (prevContacts.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    if (prevContacts.includes(contact.number)) {
      alert(`Contact with number ${contact.number} already exists`);
      return;
    }

    dispatch(addContact(contact));
    event.target.reset();
  };

  return (
    <HtmlForm onSubmit={onFormSubmit}>
      <Label htmlFor={nameId}>{'Name'}</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameId}
      />

      <Label htmlFor={phoneId}>{'Phone'}</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={phoneId}
      />

      <Button>{'Add contact'}</Button>
    </HtmlForm>
  );
}
