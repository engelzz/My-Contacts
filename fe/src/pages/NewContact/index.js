import UseNewContact from './useNewContact';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  const {
    contactFormRef,
    handleSubmit,
  } = UseNewContact();

  return (
    <>
      <PageHeader
        title="Novo Contato"
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
