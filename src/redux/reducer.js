const initialState = {
  pokedex: [],
  team: []
}

const GET_POKEDEX = 'GET_POKEDEX'
const GET_TEAM = 'GET_TEAM'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_POKEDEX:
      return {...state, pokedex: action.payload}
    case GET_TEAM:
      return {...state, team: action.payload}
    default: return state;
  }
}

export function getPokedex (pokedex) {
  return {
    type: GET_POKEDEX,
    payload: pokedex
  }
}

export function getTeam (team) {
  return {
    type: GET_TEAM,
    payload: team
  }
}
