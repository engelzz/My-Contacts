import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpCLient = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    return this.httpCLient.get('/categories');
  }
}

export default new CategoriesService();
