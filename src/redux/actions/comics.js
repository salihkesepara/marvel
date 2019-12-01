export const REQUEST_COMICS = "REQUEST_COMICS";
export const SUCCESS_COMICS = "SUCCESS_COMICS";
export const FAILURE_COMICS = "FAILURE_COMICS";

export function requestComics() {
  return { type: REQUEST_COMICS }
}

export function successComics(payload) {
  return { type: SUCCESS_COMICS, payload }
}

export function failureComics(message) {
  return { type: FAILURE_COMICS, message }
}