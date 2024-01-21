import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpCLient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpCLient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpCLient.post('/contacts', contact);
  }
}

export default new ContactsService();
