import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ContactItem,
  Delete,
} from 'components/Contacts/Contact/Contact.styled';

export function Contact({ content, id }) {
  const dispatch = useDispatch();

  const onContactDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      {content} <Delete onClick={onContactDelete}>Delete</Delete>
    </ContactItem>
  );
}

Contact.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
