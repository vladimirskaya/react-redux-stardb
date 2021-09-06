// https://swapi.dev

const getResource = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Couldn't get ${url}, status ${res.status}`)
  }
  const body = await res.json();
  return body;
}
getResource('https://swwapi.dev/api/people/5')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Error ',err);
  });

