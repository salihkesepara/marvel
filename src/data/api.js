const baseUrl = "http://gateway.marvel.com";
const ts = "1";
const apikey = "9fdb14c311cc111a27104fc8e13845c3";
const hash = "4cdc67a3817e1efd9a52335533d5b8ae";

export async function getCharactersApi(offset) {
  const limit = 30;
  const orderBy = "name";
  const url = `${baseUrl}/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`;

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (error) {
    console.trace(error.message);
    throw error;
  }
}

export async function getComicsApi(characterId) {
  const limit = 10;
  const orderBy = "-onsaleDate";
  const modifiedSince = "2005-01-01";

  const url = `${baseUrl}/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&orderBy=${orderBy}&modifiedSince=${modifiedSince}`;

  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (error) {
    console.trace(error.message);
    throw error;
  }
}