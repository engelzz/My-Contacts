import { Link } from 'react-router-dom';

import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong> 3 contatos </strong>
        <a href="/new"> Novo contato </a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span> Nome </span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong> Matheus Engel </strong>
              <small> Instagram </small>
            </div>
            <span> matheusengel@teste.com </span>
            <span>(11) 9823823-3823 </span>
          </div>

          <div className="actions">
            <a href="/edit/123">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong> Matheus Engel </strong>
              <small> Instagram </small>
            </div>
            <span> matheusengel@teste.com </span>
            <span>(11) 9823823-3823 </span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong> Matheus Engel </strong>
              <small> Instagram </small>
            </div>
            <span> matheusengel@teste.com </span>
            <span>(11) 9823823-3823 </span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}