import {TOGGLE_COMPLETE} from './actions'

const initialState = {
  scales: [
    {name: "C", done: false},
    {name: "G", done: false},
    {name: "D", done: false},
    {name: "A", done: false},
    {name: "E", done: false},
    {name: "B", done: false},
    {name: "Gb", done: false},
    {name: "Db", done: false},
    {name: "Ab", done: false},
    {name: "Eb", done: false},
    {name: "Bb", done: false},
    {name: "F", done: false},
    {name: "a", done: false},
    {name: "e", done: false},
    {name: "b", done: false},
    {name: "f#", done: false},
    {name: "c#", done: false},
    {name: "g#", done: false},
    {name: "eb", done: false},
    {name: "bb", done: false},
    {name: "f", done: false},
    {name: "c", done: false},
    {name: "g", done: false},
    {name: "d", done: false}]
}

function scalesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return {
        scales:
        state.scales.map((scale, index) => {
          if (index === action.index) {
            return Object.assign({}, scale, {
              done: !scale.done
            })
          }
          return scale
        })}
    default:
      return state
  }
}

export default scalesReducer
