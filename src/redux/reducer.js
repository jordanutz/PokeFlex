const initialState = {
  pokedex: []
}

const GET_POKEDEX = 'GET_POKEDEX'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_POKEDEX:
      return {...state, pokedex: action.payload}
    default: return state;
  }
}

export function getPokedex (pokedex) {
  return {
    type: GET_POKEDEX,
    payload: pokedex
  }
}
