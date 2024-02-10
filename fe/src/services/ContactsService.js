import HttpClient from './utils/HttpClient';

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
    return this.httpCLient.post('/contacts', { body: contact });
  }

  updateContact(id, contact) {
    return this.httpCLient.put(`/contacts/${id}`, { body: contact });
  }

  deleteContact(id) {
    return this.httpCLient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
