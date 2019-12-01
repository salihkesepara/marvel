import { getCharactersApi, getComicsApi } from "./api";
import { requestCharacter, successCharacter, failureCharacter } from "../redux/actions/characters";
import { requestComics, successComics, failureComics } from "../redux/actions/comics";

export function getCharacters(offset) {
  return dispatch => {
    dispatch(requestCharacter());
    return getCharactersApi(offset).then(res => {
      let data = [];
      res.data.results.forEach(item => {
        data.push({
          id: item.id,
          image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          name: item.name,
        })
      })
      dispatch(successCharacter(data));
    }).catch(error => {
      console.trace(error);
      dispatch(failureCharacter(
        error.message === null || typeof error.message === 'undefined'
          ? error.status
          : error.message)
      );
    });
  }
}

export function getComics(characterId) {
  return dispatch => {
    dispatch(requestComics());
    return getComicsApi(characterId).then(res => {
      let data = [];
      res.data.results.forEach(item => {
        data.push({
          id: item.id,
          title: item.title,
        })
      })
      dispatch(successComics(data));
    }).catch(error => {
      console.trace(error);
      dispatch(failureComics(error.message));
    });
  }
}