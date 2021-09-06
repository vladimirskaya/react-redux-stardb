// https://swapi.dev

class SwapiService {
  async getResource() {
    const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Couldn't get ${url}, status ${res.status}`)
  }
  return await res.json();

  }
}