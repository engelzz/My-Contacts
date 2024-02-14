/* eslint-disable no-nested-ternary */
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
  ErrorContainer,
  EmptyListContainer, SearchNotFoundContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import empytBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    hasError,
    handleChangeSearchTerm,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        isLoading={isLoadingDelete}
        visible={isDeleteModalVisible}
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>
          Esse ação não poderá ser desfeita!
        </p>
      </Modal>

      {(contacts.length > 0 && !hasError) && (
        <InputSearchContainer>
          <input
            value={searchTerm}
            type="text"
            placeholder="Pesquisar contato"
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        hasError={hasError}
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
          }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <a href="/new"> Novo contato </a>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="sad" />

          <div className="details">
            <strong> Ocorreu um erro ao obter os seus contatos! </strong>

            <Button type="button" onClick={handleTryAgain}> Tentar novamente </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={empytBox} alt="Empty Box" />

              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima
                para cadastrar o seu primeiro!
              </p>

            </EmptyListContainer>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <span>
                Nenhum Contato foi encontrado para <strong>{searchTerm}</strong>.
              </span>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span> Nome </span>
                <img src={arrow} alt="Arrow" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong> {contact.name} </strong>
                  { contact.category.name && (
                    <small> {contact.category.name} </small>
                  )}
                </div>
                <span> {contact.email} </span>
                <span> {contact.phone} </span>
              </div>

              <div className="actions">
                <a href={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </a>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
