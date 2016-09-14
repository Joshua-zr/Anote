export default function notes(state=[], action) {
  switch( action.type ) {
    case FETCH_NOTE_FULFILLED:
      return {
        ...state,
        notes: action.payload,
      }
      break;
  }
}
