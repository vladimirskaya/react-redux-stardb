// https://swapi.dev

class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
  if (!res.ok) {
    throw new Error(`Couldn't get ${this._apiBase}${url}, status ${res.status}`)
  }
  return await res.json();
  }

  getAllPeople() {
    return this.getResource(`/people/`);
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

}