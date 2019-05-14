/*
 * action types
 */
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

/*
 * action creators
 */

export function toggleComplete(index) {
  return { type: TOGGLE_COMPLETE, index }
}
