export const REQUEST_CHARACTERS = "REQUEST_CHARACTERS";
export const SUCCESS_CHARACTERS = "SUCCESS_CHARACTERS";
export const FAILURE_CHARACTERS = "FAILURE_CHARACTERS";

export function requestCharacter() {
  return { type: REQUEST_CHARACTERS }
}

export function successCharacter(payload) {
  return { type: SUCCESS_CHARACTERS, payload }
}

export function failureCharacter(message) {
  return { type: FAILURE_CHARACTERS, message }
}