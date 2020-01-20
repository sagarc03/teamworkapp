class API {
  constructor(url) {
    this.host = url;
    this.header = {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  }

  async request(path, method, data = null) {
    const url = this.host + path;
    if (localStorage.getItem('jwttoken') !== null) {
      const token = 'Bearer ' + localStorage.getItem('jwttoken');
      this.header['Authorization'] = token;
    }
    const fetchData = {
      method: method,
      headers: this.header
    }

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      if (data === null) {
        throw Error(`data can't be null for ${method} method`);
      }
      fetchData['body'] = JSON.stringify(data);
    }
    return await fetch(url, fetchData);
  }
}


const Application = new API('https://www.sagarchavan.com/api/v1/')

export default Application;