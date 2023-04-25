import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { SectionMain } from 'components/SectionMain/SectionMain';
import { Contacts } from 'components/Contacts/Contacts';
import { Search } from 'components/Search/Search';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionMain title="Phonebook">
        <Form />
        <Section title="Contacts">
          <Search />

          <Contacts>
            {isLoading && !error && (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#000']}
              />
            )}
          </Contacts>
        </Section>
      </SectionMain>
    </>
  );
}
