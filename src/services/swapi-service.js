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
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    getPerson(id) {
      return this.getResource(`/people/${id}`);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
  
    async getAllStartships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    getPlanet(id) {
      return this.getResource(`/planets/${id}`);
    }
  
    getStarship(id) {
      return this.getResource(`/starships/${id}`);
    }
    
  }
  
  const swapi = new SwapiService();
  swapi.getAllPlanets().then((people) => {
    people.forEach( p => {
      console.log(p.name);
    });
  })