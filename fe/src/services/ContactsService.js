import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    this.httpCLient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpCLient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map(ContactMapper.toDomain);
  }

  async getContactByID(id) {
    const contact = await this.httpCLient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
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
