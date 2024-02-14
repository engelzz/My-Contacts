import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    this.httpCLient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.httpCLient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactByID(id) {
    return this.httpCLient.get(`/contacts/${id}`);
  }

  createContact(contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpCLient.post('/contacts', { body });
  }

  updateContact(id, contact) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpCLient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id) {
    return this.httpCLient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
