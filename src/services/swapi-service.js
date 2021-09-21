export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Couldn't get ${this._apiBase}${url}, status ${res.status}`)
    }
    return await res.json();
    }
  
    getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
  
    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}`);
      return this._transformPerson(person)
    }
  
    getAllPlanets = async () => {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
    
    getPlanet = async (id) => {
      const planet = await this.getResource(`/planets/${id}`);
      return this._transformPlanet(planet)
    }

    getAllStartships = async () => {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
    }
  
    getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}`);
      return this._transformStarship(starship);
    }
    
    getPersonImage = (itemId) => {
      return (`${this._imageBase}/characters/${itemId}.jpg`)
    };
    getStarshipImage = (itemId) => {
      return (`${this._imageBase}/starships/${itemId}.jpg`)
    };
    getPlanetImage = (itemId) => {
      return (`${this._imageBase}/${itemId}.jpg`)
    };
  
  
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      id: this._extractId(planet)
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    // console.log('person from swapi:',person);
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}